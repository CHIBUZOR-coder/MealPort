import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { themeColors } from '@/theme'
const Load = () => {
  return (
    <View className='flex justify-center items-center' style={{ flex: 1 }}>
      <View
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className='flex justify-center items-center animate-pulse  rounded-full h-20 w-20 '
      >
        <View className='animate-spin'>
          <Icon.Loader stroke={"white"} strokeWidth={4} />
        </View>
      </View>
    </View>
  )
}

export default Load

const styles = StyleSheet.create({})
