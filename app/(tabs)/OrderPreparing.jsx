import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  View
} from 'react-native'
import { themeColor, themeColors } from '@/theme/index'

import { Platform } from 'react-native'
const router = useRouter()

export default function OrderPreparing () {
  useEffect(() => {
    setTimeout(() => {
      router.push('/Delivery')
    }, 3000)
  }, [])
  const params = useLocalSearchParams()
  // const { data } = useLocalSearchParams()

  return (
    <SafeAreaView
      // style={{backgroundColor: themeColors.bgColor(0.8)}}
      className='flex-1 justify-center relative items-center bg-primary'
    >
      <View className=' md:h-[80%] md:w-[40%] h-[50%] w-[98%] flex flex-row justify-center gap-4 items-center relative'>
        <Text className='text-xl font-semibold'>Preparing Order</Text>
        <ActivityIndicator size={'large'} color={themeColors.bgColor(1)} />
      </View>
    </SafeAreaView>
  )
}
