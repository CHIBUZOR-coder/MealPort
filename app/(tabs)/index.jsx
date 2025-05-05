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

import { resturanActions } from '@/Redux/slices/restaurantSlice'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function HomeScreen () {
  const { width } = useWindowDimensions() // Get screen width
  const isLargeScreen = width >= 768 // Define "md" breakpoint

  const router = useRouter()
  // const restaurants = use
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
                    pathname: '/Login'
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
