import {
  Image,
  StyleSheet,
  Platform,
  View,
  TextInput,
  FlatList,
  ScrollView,
  useWindowDimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native'

{
  /* <View className='w-[70%] bg-red-500 rounded-lg flex  gap-3 justify-center items-center'>
        <TextInput className='bg-white  p-6 w-[80%]' placeholder='John' />
        <TextInput className='bg-white  p-6 w-[80%]' placeholder='Doe' />
        <TextInput className='bg-white  p-6 w-[80%]' type='email' placeholder='John Doe' />
        <TextInput className='bg-white  p-6 w-[80%]' keyboardType='numeric' placeholder='John Doe' />
        <TextInput className='bg-white  p-6 w-[80%]' type='file' />
      </View> */
}

import AsyncStorage from '@react-native-async-storage/async-storage'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from 'react-native-feather'
import { themeColor, themeColors } from '@/theme/index'
import Categories from './Categories'
import Featured from './Featured'
import { jwtDecode } from 'jwt-decode'

import { resturanActions } from '@/Redux/slices/restaurantSlice'
import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useSearchParams } from 'expo-router/build/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '@/Redux/slices/UserSlice'

export default function HomeScreen () {
  const { width } = useWindowDimensions() // Get screen width
  const isLargeScreen = width >= 768 // Define "md" breakpoint

  const router = useRouter()
  // const restaurants = use

  const [token, setToken] = useState('')
  const [expiresAt, setExpiresAt] = useState()
  const dispatch = useDispatch()
  const Token = useSelector(state => state?.user?.token)
  // console.log('TOK:', Token)

  const AddToken = async () => {
    try {
      if (Token && Token) {
        console.log('tok:', Token)

        await AsyncStorage.setItem('token', String(Token))
        fetchToken()
      } else {
        console.log('token value is empty')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (Token) {
      AddToken()
    }
  }, [Token]) // <-- run this effect when Token updates

  const fetchToken = async () => {
    const storedToken = await AsyncStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
    }
  }

  useEffect(() => {
    fetchToken()
  }, [])

  useEffect(() => {
    console.log('Tokk:', token)
  }, [token])

  const removeToken = async () => {
    try {
      const token = await AsyncStorage.removeItem('token')

      if (!token) {
        console.log('token value is removed')
      } else {
        console.log('Action failed')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // useEffect(() => {
  //   removeToken()
  // }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (expiresAt) {
  //       const now = new Date()
  //       if (now >= expiresAt) {
  //         console.log('🔴 Token has expired.')
  //         AsyncStorage.removeItem('token')
  //         dispatch(userActions.setToken(''))
  //         router.replace('/Login')
  //       }
  //     } else {
  //       console.log('Token has not yet expired')
  //     }
  //   }, 1000 * 10) // check every 10 seconds

  //   return () => clearInterval(interval)
  // }, [expiresAt])

  return (
    <SafeAreaView className=' flex-1' showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor='black' barStyle='white-content' />

      <ScrollView
        className='w-full bg-primary py-2'
        keyboardShouldPersistTaps='handled'
      >
        <View className=''>
          <View
            style={{ padding: isLargeScreen ? 10 : 3 }}
            className=' py-2 flex flex-col gap-3 bg-white'
          >
            <View
              className={`w-full flex-row justify-between  items-center    `}
            >
              <View className=' w-[84%] md:w-[30%] flex-row gap-2 parent  items-center'>
                <View className='  items-center justify-start flex-row p-2 rounded-full border border-gray-300 '>
                  <Icon.Search height={'25'} width={'25'} stroke={'gray'} />
                  <TextInput
                    className=' ml-2 border-none outline-none  w-[40%]'
                    placeholder='Restaurant'
                    placeholderTextColor='gray'
                  />
                  <View className='flex-row flex-shrink-0 items-center  border-0 px-1 border-l-2 border-l-gray-300 '>
                    <Icon.MapPin height={'25'} width={'25'} stroke={'gray'} />
                    <Text className='text-gray-600'>New York, NYC</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: token ? '/Dash' : '/Login'
                  })
                }
                className='p-1 slider rounded-full flex justify-center items-center h-10 w-10 cursor-pointer'
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.User
                  height={'25'}
                  width={'25'}
                  strokeWidth={2.5}
                  stroke={'white'}
                />
              </TouchableOpacity>
            </View>

            <Categories />
          </View>

          <Featured />
        </View>
      </ScrollView>
      {/* Main Content */}
    </SafeAreaView>
  )
}
