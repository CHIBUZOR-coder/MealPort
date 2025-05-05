import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { resturanActions } from '@/Redux/slices/restaurantSlice'
import { featuredDishes } from '@/Categories'
import { View } from 'react-native'

function ReduxRehydrator () {
  const dispatch = useDispatch()

  let LocalResturant

  const RemoveItem = async () => {
    await AsyncStorage.clear()
  }

  const LocalAddResturants = async () => {
    try {
      // Check if the data is already in AsyncStorage to avoid overwriting it
      const storedData = await AsyncStorage.getItem('resturants')

      if (storedData) {
        // If there is stored data, dispatch it to Redux
        const parseData = JSON.parse(storedData)
        dispatch(resturanActions.localAddResturant(parseData))
      } else {
        // If no data in AsyncStorage, set the featuredDishes
        if (featuredDishes) {
          await AsyncStorage.setItem(
            'resturants',
            JSON.stringify(featuredDishes)
          )
          dispatch(resturanActions.localAddResturant(featuredDishes))
        } else {
          console.warn('No featuredDishes found to set in AsyncStorage')
        }
      }
    } catch (e) {
      console.log('Error reading or writing to AsyncStorage:', e.message)
    }
  }

  useEffect(() => {
    RemoveItem()

    LocalAddResturants()
  }, [])

  return <View style={{ visibility: 'hidden' }}></View>
}

export default ReduxRehydrator
