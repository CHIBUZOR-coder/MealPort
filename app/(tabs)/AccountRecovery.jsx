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
  Pressable
} from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'
import * as Icon from 'react-native-feather'

//rnfes
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { themeColors } from '@/theme'
import { router, useNavigation } from 'expo-router'

const AccountRecovery = () => {
  const { width } = useWindowDimensions()
  const isExtraSmall = width < 500
  const isSmall = width >= 500
  const isMedium = width >= 768 && width < 1001
  const isLargeScreen = width >= 768 && width < 1001
  const isExtra = width > 1001
  const [Accept, setAccept] = useState(null)

  const [slideAnim] = useState(new Animated.Value(width))
  const [file, setFile] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // ✅ allows cropping
      quality: 1
    })

    if (!result.canceled) {
      const image = result.assets[0]
      setFile({
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
    <SafeAreaView style={{ flex: 1 }}>
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
                <Text className='font-semibold text-lg'>Account Recovry</Text>
              </View>
              <View
                style={{
                  width: isLargeScreen || isExtra || isSmall ? '40%' : '90%'
                }}
                className=' bg-primary py-8 my-6  relative rounded-lg flex justify-center items-center gap-4 '
              >
                <TextInput
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 8 : 20,
                      outline: 'none'
                    }
                  ]}
                  placeholder='Email'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />
                <View className='w-[80%] p-5 rounded-lg bg-white flex flex-row items-center '>
                  <TextInput
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
                    {/* Use Icon.EyeOff when !showPassword */}
                  </TouchableOpacity>
                </View>
                <View className='w-[80%] p-5 rounded-lg bg-white'>
                  <TouchableOpacity
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
                        pathname: '/ManageAccount'
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
                  style={[
                    styles.TextStyle,
                    { padding: isLargeScreen || isExtra || isSmall ? 8 : 20 }
                  ]}
                  placeholder='First Name'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />
                <TextInput
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
                  style={[
                    styles.TextStyle,
                    {
                      padding: isLargeScreen || isExtra || isSmall ? 8 : 20
                    }
                  ]}
                  placeholder='Phone'
                  placeholderTextColor={themeColors.placeHolerColor(0.5)}
                />
                <View className='w-[80%] p-5 rounded-lg bg-white '>
                  <Text className=' text-gray-500'>
                    Register as resturant owner?
                  </Text>
                  <View className='flex flex-row  items-center justify-around py-2 '>
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
                    <Pressable
                      onPress={() => {
                        console.log('Accept Pressed false')
                        setAccept(false)
                      }}
                      style={[
                        styles.radio,
                        {
                          marginHorizontal: 16,
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
                  {file && (
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                      <Image
                        source={{ uri: file.uri }}
                        style={{ width: 100, height: 100, borderRadius: 10 }}
                        resizeMode='cover'
                      />
                      <Text style={{ marginTop: 10 }}>
                        {file.name} ({Math.round(file.size / 1024)} KB)
                      </Text>
                    </View>
                  )}
                </View>
                <View
                  className='w-[80%] p-5 rounded-lg bg-white'
                  placeholder='Email'
                >
                  <TouchableOpacity
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
                        pathname: '/ManageAccount'
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

export default AccountRecovery

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
