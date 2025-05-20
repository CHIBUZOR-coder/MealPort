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
import { router, useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, userActions } from '@/Redux/slices/UserSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
  const { width } = useWindowDimensions()
  const isExtraSmall = width < 500
  const isSmall = width >= 500
  const isMedium = width >= 768 && width < 1001
  const isLargeScreen = width >= 768 && width < 1001
  const isExtra = width > 1001

  const [slideAnim] = useState(new Animated.Value(width))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const logLoad = useSelector(state => state?.user?.logLoading)
  const logModal = useSelector(state => state?.user?.logModalVisible)
  // const logMessage = useSelector(state => state?.user?.loggedData?.message)
  const [logMessage, setLogMessage] = useState(null)
  const HandleLogin = async () => {
    const logvalue = {
      email,
      password
    }
    const result = await dispatch(LoginUser(logvalue))
    let checkStorage
    if (result?.payload?.success) {
      console.log('Registration Success:', result.data)
      await AsyncStorage.setItem('auth_token', result?.payload?.token)
      setLogMessage(result?.payload?.message)
      checkStorage = await AsyncStorage.getItem('auth_token')

      // console.log('localToken:', checkStorage)

      setTimeout(() => {
        dispatch(userActions.hideLogModal())
        router.push({
          pathname: '/'
        })
      }, 3000)
    } else {
      setLogMessage(result?.payload)
      setTimeout(() => {
        dispatch(userActions.hideLogModal())
      }, 3000)
    }
  }

  useEffect(() => {
    console.log('email', email)
    console.log('pass', password)
  }, [email, password])
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
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      {logLoad && logLoad ? (
        <View
          // style={{ backgroundColor: 'rgba(0,0,0,0.6)', width:"100%", height:"100%" }}
          className=' absolute top-0 left-0 z-40 w-full h-full bg-blacktrans flex flex-row justify-center '
        >
          <View
            style={{ position: 'absolute', top: '45%' }}
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

      {logModal ? (
        <Modal visible={logModal} transparent={true} animationType='fade'>
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
              <Text className='text-gray-500 font-semibold text-xl'>
                {logMessage || 'Unknown error'}
              </Text>
            </View>
          </Pressable>
        </Modal>
      ) : (
        ''
      )}

      <ScrollView
        style={{
          display: 'flex',
          position: 'relative',
          flex: 1,
          width: '100%'
        }}
        className=' bg-white'
      >
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
              height: isLargeScreen || isMedium || isExtra ? 400 : 400,
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

          {/********************************** Login Banner Done ***************************************************/}

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
                <Text className='font-semibold text-lg'>Login</Text>
              </View>
              <View
                style={{
                  width: isLargeScreen || isExtra || isSmall ? '40%' : '90%'
                }}
                className=' bg-primary py-8 my-6  relative rounded-lg flex justify-center items-center gap-4 '
              >
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
                    {/* Use Icon.EyeOff when !showPassword */}
                  </TouchableOpacity>
                </View>
                <View className='w-[80%] p-5 rounded-lg bg-white'>
                  <TouchableOpacity
                    onPress={() => HandleLogin()}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                      backgroundColor: themeColors.bgColor(1),
                      borderRadius: 8
                    }}
                    className='font-semibold'
                  >
                    <Text className='font-semibold text-white'>Login</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text className='pass'>Don't have an account? </Text>
                  <Pressable
                    onPress={() => {
                      router.push({
                        pathname: '/Register'
                      })
                    }}
                    className='flex justify-center items-center '
                  >
                    <Text className='pass'>Signup</Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable
                    onPress={() => {
                      router.push({
                        pathname: '/AccountRecovery'
                      })
                    }}
                    className='flex justify-center items-center '
                  >
                    <Text className='pass'>Forgot password? </Text>
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
                    {/* Use Icon.EyeOff when !showPassword */}
                  </TouchableOpacity>
                </View>

                <View className='w-[80%] p-5 rounded-lg bg-white'>
                  <TouchableOpacity
                    onPress={() => HandleLogin()}
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
                  <Text className='pass'>Don't have an account? </Text>
                  <Pressable
                    onPress={() => {
                      router.push({
                        pathname: '/Register'
                      })
                    }}
                    className='flex justify-center items-center '
                  >
                    <Text className='pass'>Signup</Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable
                    onPress={() => {
                      router.push({
                        pathname: '/AccountRecovery'
                      })
                    }}
                    className='flex justify-center items-center '
                  >
                    <Text className='pass'>Forgot password? </Text>
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

export default Login

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
