import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
  Easing,
  Button,
  TouchableOpacity,
  Pressable,
  Modal
} from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'
import * as Icon from 'react-native-feather'

//rnfes
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { themeColors } from '@/theme'
import { useNavigation, useRouter } from 'expo-router'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterUser } from '@/Redux/slices/UserSlice'
import { userActions } from '@/Redux/slices/UserSlice'

const Register = () => {
  const router = useRouter()
  const { width } = useWindowDimensions()
  const isExtraSmall = width < 500
  const isSmall = width >= 500
  const isMedium = width >= 768 && width < 1001
  const isLargeScreen = width >= 768 && width < 1001
  const isExtra = width > 1001
  const [Accept, setAccept] = useState(null)

  const [slideAnim] = useState(new Animated.Value(width))
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmCPassword] = useState('')
  const [adress, setAdress] = useState('')
  const [isOwner, setIsOwner] = useState('false')
  const [phone, setPhone] = useState('')
  // const [Message, setMessage] = useState(null)

  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()

  const isLoading = useSelector(state => state?.user?.isLoading)
  const message = useSelector(state => state?.user?.userData?.message)
  const modalVisible = useSelector(state => state?.user?.modalVisible)

  const HandleRegister = async () => {
    console.log('Load', isLoading)

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      alert('Please fill all required fields')
      return
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    const formData = new FormData()
    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('password', password)
    formData.append('confirmpassword', confirmPassword)
    formData.append('owner', isOwner ? 'true' : 'false')
    formData.append('adress', adress)

    if (image) {
      formData.append('image', image.uri)
    }

    console.log('image:', image)

    const result = await dispatch(RegisterUser(formData))

    console.log('result', result)

    if (result?.payload?.success === true) {
      console.log('sucessss:', result?.payload)

      console.log('Registration Success:', result.data)
      setTimeout(() => {
        dispatch(userActions.hideModal())
      }, 4000)
    } else {
      setTimeout(() => {
        console.log('Registration Failed:', result?.payload || 'Unknown error')

        dispatch(userActions.hideModal())
      }, 4000)
    }
  }

  useEffect(() => {
    console.log('firstname', firstname)
    console.log('lastname', lastname)
    console.log('email', email)
    console.log('isOwner', isOwner)
    console.log('adress', adress)
  }, [email, firstname, lastname, isOwner, adress])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // ✅ allows cropping
      quality: 1,
      base64: true
    })

    if (!result.canceled) {
      const image = result.assets[0]
      setImage({
        uri: image.uri,
        name: image.fileName || 'selected-image.jpg',
        size: image.fileSize || 0
      })
    } else {
      console.log('Image picking cancelled')
    }
  }

  useFocusEffect(
    useCallback(() => {
      // Reset animation position
      slideAnim.setValue(width)

      // Start animation
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true
      }).start()
    }, [width])
  )

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: isLoading ? '' : 1 }}>
      <ScrollView
        style={{
          display: 'flex',
          position: 'relative',
          flex: 1,
          width: '100%'
        }}
        className=' bg-white'
      >
        {isLoading && isLoading ? (
          <View
            // style={{ backgroundColor: 'rgba(0,0,0,0.6)', width:"100%", height:"100%" }}
            className=' absolute top-0 left-0 z-40 w-full h-full bg-blacktrans flex flex-row justify-center '
          >
            <View
              style={{ position: 'absolute', top: '25%' }}
              // className='absolute top-1/2'
            >
              <Icon.Loader
                stroke={themeColors.bgColor(1)}
                className=' w-32 h-32 animate-spin'
              />
            </View>
          </View>
        ) : (
         <View></View>
        )}

        {modalVisible && (
          <Modal visible={modalVisible} transparent={true} animationType='fade'>
            <Pressable
              onPress={() => dispatch(userActions.hideLogModal())}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                backgroundColor: 'rgba(0,0,0,0.5)' // semi-transparent background
              }}
            >
              <View
                style={{
                  width: '80%',
                  height: '30%',
                  position: 'absolute',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text className='text-gray-500 font-semibold text-lg'>
                  {(message && message) || 'Unknown error'}
                </Text>
              </View>
            </Pressable>
          </Modal>
        )}

        <Animated.View
          style={{
            transform: [{ translateX: slideAnim }],
            display: 'flex',
            // minHeight:'150vh',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: 'white',
            width: '100%'
          }}
        >
          {/********************************** Login Banner ***************************************************/}
          <View
            className='flex justify-center items-center relative '
            style={{
              backgroundColor: themeColors.bgColor(0.8),
              height: 400,
              width: '100%'
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}
              className='absolute rounded-full p-2 bg-use2 shadow-lg  top-16 md:top-5 left-5 z-10'
            >
              <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
            </TouchableOpacity>

            <View
              style={{ height: 200, width: 200 }}
              className=' flex justify-center items-center rounded-full'
            >
              <Image
                source={require('@/assets/anima/log2.jpg')}
                style={{ height: 200, width: '100%', resizeMode: 'cover' }}
                className='rounded-full'
              />
            </View>
          </View>

          {/********************************** Login Banner ***************************************************/}

          {isLargeScreen || isMedium || isExtra ? (
            <View
              className={'-mt-10 rounded-tr-lg rounded-tl-3xl'}
              style={{
                flex: 1,
                display: 'flex',
                // minHeight:'150vh',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                backgroundColor: 'white',
                width: '100%',
                paddingVertical: isLargeScreen || isExtra || isSmall ? 20 : 0 // Adjust as needed
              }}
            >
              <View>
                <Text className='font-semibold text-lg'>Register</Text>
              </View>
              <View
                style={{
                  width: isLargeScreen || isExtra || isSmall ? '40%' : '90%'
                }}
                className=' bg-primary py-8 my-6  relative rounded-lg flex justify-center items-center gap-4 '
              >
                <TextInput
                  onChangeText={text => setFirstName(text)}
                  value={firstname && firstname}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 15 : 20,
                      outline: 'none'
                    }
                  ]}
                  placeholder='First Name'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />
                <TextInput
                  onChangeText={setLastName}
                  value={lastname}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 15 : 20,
                      outline: 'none'
                    }
                  ]}
                  placeholder='Last Name'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />

                <TextInput
                  onChangeText={setEmail}
                  value={email}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 15 : 20,
                      outline: 'none'
                    }
                  ]}
                  placeholder='Email'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />

                <TextInput
                  onChangeText={setAdress}
                  value={adress}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 15 : 20,
                      outline: 'none'
                    }
                  ]}
                  placeholder='Adress'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />

                <TextInput
                  onChangeText={setPhone}
                  value={phone}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 15 : 20,
                      outline: 'none'
                    }
                  ]}
                  placeholder='Phone'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />

                <View className='w-[80%] p-5 rounded-lg bg-white flex flex-row items-center '>
                  <TextInput
                    onChangeText={text => setPassword(text)}
                    value={password}
                    style={{ outline: 'none' }}
                    placeholder='Password'
                    placeholderTextColor={themeColors.placeHolerColor(0.5)}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.icon}
                  >
                    <Icon.Eye strokeWidth={2} stroke={themeColors.bgColor(1)} />
                  </TouchableOpacity>
                </View>
                <View className='w-[80%] p-5 rounded-lg bg-white flex flex-row items-center '>
                  <TextInput
                    onChangeText={text => setconfirmCPassword(text)}
                    value={confirmPassword}
                    style={{ outline: 'none' }}
                    placeholder='Confirm Password'
                    placeholderTextColor={themeColors.placeHolerColor(0.5)}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.icon}
                  >
                    <Icon.Eye strokeWidth={2} stroke={themeColors.bgColor(1)} />
                  </TouchableOpacity>
                </View>
                <View className='w-[80%] p-5 rounded-lg bg-white '>
                  <Text className=' text-gray-500'>
                    Register as resturant owner?
                  </Text>
                  <View className='flex flex-row  items-center justify-around md:justify-start py-2 '>
                    <View className='flex flex-row gap-3'>
                      <Text className='text-gray-500'>Yes</Text>
                      <Pressable
                        onPress={() => {
                          setIsOwner('true')
                          console.log('Accept Pressed true')
                        }}
                        style={[
                          styles.radio,
                          {
                            backgroundColor:
                              isOwner === 'true'
                                ? themeColors.bgColor(1)
                                : 'rgba(107, 114, 128, 0.4)'
                          }
                        ]}
                        className='rounded-full radio'
                      ></Pressable>
                    </View>

                    <View
                      style={{ marginHorizontal: 30 }}
                      className='flex flex-row gap-3'
                    >
                      <Text className='text-gray-500'>No</Text>

                      <Pressable
                        onPress={() => {
                          console.log('Accept Pressed false')
                          setIsOwner('false')
                        }}
                        style={[
                          styles.radio,
                          {
                            backgroundColor:
                              isOwner === 'false'
                                ? themeColors.bgColor(1)
                                : 'rgba(107, 114, 128, 0.4)'
                          }
                        ]}
                        className='rounded-full radio'
                      ></Pressable>
                    </View>
                  </View>
                </View>
                <View
                  className='w-[80%] p-5 rounded-lg bg-white'
                  placeholder='Email'
                >
                  <TouchableOpacity
                    onPress={pickImage}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                      // borderTopRightRadius: 12,
                      // borderBottomLeftRadius: 12,
                      backgroundColor: themeColors.bgColor(1),
                      borderRadius: 8
                    }}
                  >
                    <Feather
                      name='image'
                      size={20}
                      color='white'
                      style={{ marginRight: 10 }}
                    />
                    <Text style={{ color: 'white', fontSize: 16 }}>
                      Add an image
                    </Text>
                  </TouchableOpacity>
                  {image && (
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                      <Image
                        source={{ uri: image.uri }}
                        style={{ width: 100, height: 100, borderRadius: 10 }}
                        resizeMode='cover'
                      />
                      <Text style={{ marginTop: 10 }}>
                        {image.name} ({Math.round(image.size / 1024)} KB)
                      </Text>
                    </View>
                  )}
                </View>
                <View
                  className='w-[80%] p-5 rounded-lg bg-white'
                  placeholder='Email'
                >
                  <TouchableOpacity
                    onPress={() => HandleRegister()}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                      // borderTopRightRadius: 12,
                      // borderBottomLeftRadius: 12,
                      backgroundColor: themeColors.bgColor(1),
                      borderRadius: 8
                    }}
                    className='font-semibold'
                  >
                    <Text className='text-white'>Submit</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text className='pass'>Already have an account? </Text>
                  <Pressable
                    onPress={() => {
                      router.push({
                        pathname: '/Login'
                      })
                    }}
                    className='flex justify-center items-center '
                  >
                    <Text className='pass'>Login</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ) : (
            <View
              className={
                ' relative -mt-16 z-10 rounded-tr-3xl rounded-tl-3xl bg-white'
              }
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                paddingVertical: isLargeScreen || isExtra ? 40 : 0 // Adjust as needed
              }}
            >
              <View className='w-[90%] bg-primary py-8 my-6  relative rounded-lg flex justify-center items-center gap-4 '>
                <TextInput
                  onChangeText={setFirstName}
                  value={firstname}
                  style={[
                    styles.TextStyle,
                    { padding: isLargeScreen || isExtra || isSmall ? 8 : 20 }
                  ]}
                  placeholder='First Name'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />
                <TextInput
                  onChangeText={setLastName}
                  value={lastname}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 8 : 20
                    }
                  ]}
                  placeholder='Last Name'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />
                <TextInput
                  onChangeText={setEmail}
                  value={email}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 8 : 20
                    }
                  ]}
                  placeholder='Email'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />
                <TextInput
                  keyboardType='numeric'
                  onChangeText={setPhone}
                  value={phone}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 8 : 20
                    }
                  ]}
                  placeholder='Phone'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />

                <TextInput
                  onChangeText={setAdress}
                  value={adress}
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 8 : 20
                    }
                  ]}
                  placeholder='Adress'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />

                <View className='w-[80%] p-5 rounded-lg bg-white flex flex-row items-center '>
                  <TextInput
                    onChangeText={setPassword}
                    value={password}
                    style={{ outline: 'none' }}
                    placeholder='Password'
                    placeholderTextColor={themeColors.placeHolerColor(0.5)}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.icon}
                  >
                    <Icon.Eye strokeWidth={2} stroke={themeColors.bgColor(1)} />
                  </TouchableOpacity>
                </View>
                <View className='w-[80%] p-5 rounded-lg bg-white flex flex-row items-center '>
                  <TextInput
                    onChangeText={setconfirmCPassword}
                    value={confirmPassword}
                    style={{ outline: 'none' }}
                    placeholder='Confirm Password'
                    placeholderTextColor={themeColors.placeHolerColor(0.5)}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.icon}
                  >
                    <Icon.Eye strokeWidth={2} stroke={themeColors.bgColor(1)} />
                  </TouchableOpacity>
                </View>

                <View className='w-[80%] p-5 rounded-lg bg-white '>
                  <Text className=' text-gray-500'>
                    Register as resturant owner?
                  </Text>
                  <View className='flex flex-row  items-center justify-around py-2 '>
                    <View className='flex flex-row gap-3'>
                      <Text className='text-gray-500'>Yes</Text>
                      <Pressable
                        onPress={() => {
                          setAccept(true)
                          console.log('Accept Pressed true')
                        }}
                        style={[
                          styles.radio,
                          {
                            backgroundColor:
                              Accept === true
                                ? themeColors.bgColor(1)
                                : 'rgba(107, 114, 128, 0.4)'
                          }
                        ]}
                        className='rounded-full radio '
                      ></Pressable>
                    </View>

                    <View
                      style={{ marginHorizontal: 50 }}
                      className='flex flex-row gap-3'
                    >
                      <Text className='text-gray-500'>No</Text>

                      <Pressable
                        onPress={() => {
                          console.log('Accept Pressed false')
                          setAccept(false)
                        }}
                        style={[
                          styles.radio,
                          {
                            backgroundColor:
                              Accept === false
                                ? themeColors.bgColor(1)
                                : 'rgba(107, 114, 128, 0.4)'
                          }
                        ]}
                        className='rounded-full radio
                 '
                      ></Pressable>
                    </View>
                  </View>
                </View>
                <View className='w-[80%] p-5 rounded-lg bg-white'>
                  <TouchableOpacity
                    onPress={pickImage}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                      // borderTopRightRadius: 12,
                      // borderBottomLeftRadius: 12,
                      backgroundColor: themeColors.bgColor(1),
                      borderRadius: 8
                    }}
                  >
                    <Feather
                      name='image'
                      size={20}
                      color='white'
                      style={{ marginRight: 10 }}
                    />
                    <Text style={{ color: 'white', fontSize: 16 }}>
                      Add an image
                    </Text>
                  </TouchableOpacity>
                  {image && (
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                      <Image
                        source={{ uri: image.uri }}
                        style={{ width: 100, height: 100, borderRadius: 10 }}
                        resizeMode='cover'
                      />
                      <Text style={{ marginTop: 10 }}>
                        {image.name} ({Math.round(image.size / 1024)} KB)
                      </Text>
                    </View>
                  )}
                </View>
                <View
                  className='w-[80%] p-5 rounded-lg bg-white'
                  placeholder='Email'
                >
                  <TouchableOpacity
                    onPress={() => HandleRegister()}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                      // borderTopRightRadius: 12,
                      // borderBottomLeftRadius: 12,
                      backgroundColor: themeColors.bgColor(1),
                      borderRadius: 8
                    }}
                  >
                    <Text className='font-semibold text-white'>Submit</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text className='pass'>Already have an account? </Text>
                  <Pressable
                    onPress={() => {
                      router.push({
                        pathname: '/Login'
                      })
                    }}
                    className='flex justify-center items-center '
                  >
                    <Text className='pass'>Login</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  TextStyle: {
    width: '80%',

    backgroundColor: 'white',
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12
  },

  radio: {
    // backgroundColor: 'rgba(107, 114, 128, 0.4)',
    height: 20,
    width: 20,
    borderWidth: 1
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }]
  }
})
