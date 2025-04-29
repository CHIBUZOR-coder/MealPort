import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ActivityIndicator, Image, SafeAreaView, View } from 'react-native'
import { themeColor, themeColors } from '@/theme/index'

import { Platform } from 'react-native'

export default function OrderPreparing () {
  const params = useLocalSearchParams()
  // const { data } = useLocalSearchParams()

  return (
    <SafeAreaView
      // style={{backgroundColor: themeColors.bgColor(0.8)}}
      className='flex-1 justify-center relative items-center bg-primary'
    >
      <View className=' md:h-[80%] md:w-[40%] h-[50%] w-[98%] flex flex-row justify-center items-center relative'>
        <Text>
          Preparing Order
        </Text>
        <ActivityIndicator size={"large"} color={themeColors.bgColor(1)} />
      </View>
    </SafeAreaView>
  )
}
