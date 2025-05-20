import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Icon from 'react-native-feather'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { themeColors } from '@/theme'

const index = () => {
  return (
    <SafeAreaView
      style={{ padding: 16 }}
      className='flex-1 bg-primary relative '
    >
      <StatusBar backgroundColor='dark' barStyle='white-content' />
      <Text className='text-2xl font-bold'>Account</Text>
      {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>> Parent View */}
      <View className='w-full flex flex-col justify-center items-center mt-8 gap-12'>
        {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(AccoutInfo) ********************/}
        <View
          style={{ overflow: 'hidden' }}
          className='rounded-md bg-white p-4 w-full overflow-hidden shadow-md flex flex-row justify-between item-center'
        >
          {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>> subChild(user icon) */}
          <View
            // style={{ borderRadius: '100%', height: 20, width: 20 }}
            className='bg-person rounded-full h-18 w-18 p-6 self-start'
          >
            <Icon.User
              height={'25'}
              width={'25'}
              strokeWidth={2.5}
              stroke={'white'}
            />
          </View>
          {/* Done */}

          {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>>> subChild(name/email) */}
          <View className='flex flex-col  justify-center item-center'>
            <Text className='font-semibold text-lg'>Hi, Chibuzor Emekalam</Text>
            <Text className='text-small text-gray-500'>
              chibuzormekalam@gmail.com
            </Text>
          </View>
          {/* Done */}

          {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>> subChild( logout) */}
          <View
            // style={{ borderRadius: '100%', height: 20, width: 20 }}
            className='  self-center flex flex-row justify-between items-center '
          >
            <Icon.LogOut
              height={'35'}
              width={'35'}
              strokeWidth={2.5}
              stroke={'rgba(107, 114, 128, .5)'}
            />
          </View>
          {/* Done */}
        </View>
        {/* Done */}

        {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(Edit Information) ********************/}
        <View className='  flex flex-col w-full '>
          <View
            style={{ paddingVertical: 5, paddingHorizontal: 20 }}
            className='w-full p-4 '
          >
            <Text className='text-gray-500 font-semibold my-2 text-lg'>
              Edit Information
            </Text>
          </View>
          <View className=' p-4 w-full bg-white rounded-md flex flex-row justify-between shade '>
            <Text className='font-bold text-lg'>Edit Account</Text>

            <View>
              <Icon.Edit stroke={'rgba(107, 114, 128, .5)'} strokeWidth={2.5} />
            </View>
          </View>
        </View>
        <View className='  flex flex-col w-full '>
          <View
            style={{ paddingVertical: 5, paddingHorizontal: 20 }}
            className='w-full p-4 '
          >
            <Text className='text-gray-500 font-semibold my-2 text-lg'>
              More Settings
            </Text>
          </View>
          <View className='flex flex-col gap-[2px] justify-center items-center w-full shade'>
            <View className=' p-4 w-full bg-white rounded-tr-md rounded-tl-md flex flex-row justify-between  '>
              <View className='flex flex-row justify-center items-center gap-4'>
                <Icon.Sun
                  stroke={'rgba(107, 114, 128, .5)'}
                  strokeWidth={2.5}
                />
                <Text className='font-bold text-lg'>Light</Text>
              </View>

              <View>
                <Icon.ToggleRight
                  stroke={'rgba(107, 114, 128, .5)'}
                  strokeWidth={2.5}
                  height={'60'}
                  width={'60'}
                />
              </View>
            </View>
            <View className=' p-4 w-full bg-white rounded-br-md rounded-bl-md flex flex-row justify-between '>
              <View className='flex flex-row justify-center items-center gap-4'>
                <Icon.Globe
                  stroke={'rgba(107, 114, 128, .5)'}
                  strokeWidth={2.5}
                />
                <Text className='font-bold text-lg'>Language</Text>
              </View>

              <View>
                <Icon.ChevronRight
                  stroke={'rgba(107, 114, 128, .5)'}
                  strokeWidth={2.5}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Done */}

      {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(buttom icons) ********************/}
      <View className='absolute w-full p-5 bottom-0 left-0 bg-white flex flex-row justify-between gap-4 '>
        <View className={`rounded-full bg-activ self-start p-4`}>
          <Icon.Home stroke={'white'} strokeWidth={2.5} />
        </View>
        <View className={`rounded-full bg-person self-start p-4`}>
          <Icon.Truck stroke={themeColors.bgColor(1)} strokeWidth={2.5} />
        </View>
        <View className={`rounded-full bg-person self-start p-4`}>
          <Icon.Bell stroke={themeColors.bgColor(1)} strokeWidth={2.5} />
        </View>
        <View className={`rounded-full bg-person self-start p-4`}>
          <Icon.User stroke={themeColors.bgColor(1)} strokeWidth={2.5} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
