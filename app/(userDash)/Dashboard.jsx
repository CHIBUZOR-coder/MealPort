import {
  Animated,
  StyleSheet,
  Easing,
  Text,
  useWindowDimensions,
  View,
  Image
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFocusEffect, useRouter } from 'expo-router'
import * as Icon from 'react-native-feather'
import { themeColors } from '@/theme'
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins'
import { ScrollView } from 'react-native-virtualized-view'

const Dashboard = () => {
  const userInfo = useSelector(state => state?.user?.userInfo)
  const { width } = useWindowDimensions()

  const getHeight = () => {
    if (isExtra) return 120
    if (isLargeScreen) return 100
    if (isMedium) return 90
    if (isSmall) return 70
    if (isExtraSmall) return 60
    return 60 // fallback
  }

  const getPingHight = () => {
    if (isExtra) return 125
    if (isLargeScreen) return 105
    if (isMedium) return 95
    if (isSmall) return 75
    if (isExtraSmall) return 65
    return 65 // fallback
  }

  const getChildHight = () => {
    if (isExtra) return 100
    if (isLargeScreen) return 90
    if (isMedium) return 80
    if (isSmall) return 55
    if (isExtraSmall) return 50
  }

  const isExtraSmall = width < 500
  const isSmall = width >= 500 && width < 768
  const combinedSmall = isExtraSmall && isSmall

  const isMedium = width >= 768 && width < 1001
  const isLargeScreen = width >= 768 && width < 1001
  const isExtra = width > 1001

  const pending = [
    {
      dleveryId: 122,
      quantity: 2,
      name: 'Chicken Sausage',
      amount: '20.00',
      paymentType: 'Cash on Delivery'
    },
    {
      dleveryId: 245,
      quantity: 1,
      amount: '30.00',
      name: 'Veggie Pizza',
      paymentType: 'Credit Card'
    },
    {
      dleveryId: 321,
      quantity: 3,
      amount: '25.00',
      name: 'Beef Burger',
      paymentType: 'Mobile Payment'
    },
    {
      dleveryId: 465,
      quantity: 2,
      name: 'Grilled Fish',
      amount: '40.00',
      paymentType: 'Cash on Delivery'
    }
  ]

  const delivery = [
    {
      dleveryId: 122,
      quantity: 2,
      name: 'Chicken Sausage',
      amount: '20.00',
      paymentType: 'Cash on Delivery'
    },
    {
      dleveryId: 245,
      quantity: 1,
      amount: '30.00',
      name: 'Veggie Pizza',
      paymentType: 'Credit Card'
    },
    {
      dleveryId: 321,
      quantity: 3,
      amount: '25.00',
      name: 'Beef Burger',
      paymentType: 'Mobile Payment'
    },
    {
      dleveryId: 465,
      quantity: 2,
      name: 'Grilled Fish',
      amount: '40.00',
      paymentType: 'Cash on Delivery'
    },
    {
      dleveryId: 586,
      quantity: 1,
      amount: '35.00',
      name: 'Chocolate Cupcake',
      paymentType: 'Credit Card'
    },
    {
      dleveryId: 635,
      quantity: 1,
      amount: '55.00',
      name: 'Chocolate',
      paymentType: 'Credit Card'
    },
    {
      dleveryId: 721,
      quantity: 1,
      amount: '40.00',
      name: 'Choco',
      paymentType: 'Credit Card'
    }
  ]

  const [slideAnim] = useState(new Animated.Value(width))

  const Screen = isLargeScreen && isMedium && isExtra

  const router = useRouter()

  const [loaded] = useFonts({ Poppins_400Regular })

  useFocusEffect(
    React.useCallback(() => {
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

  const date = new Date()

  useEffect(() => {
    console.log('date:', date)
    // if (!loaded) return <Text className='font-semibold'> Loading...</Text>
  }, [])

  return (
    <Animated.View
      style={{
        // flex: 1,
        padding: 20,
        backgroundColor: 'rgb(229, 231, 235)',
        position: 'relative',
        transform: [{ translateX: slideAnim }]
      }}
    >
      <View
        // style={{ backgroundColor: 'yellow' }}
        className='flex justify-center w-full   '
      >
        <Text style={{ ...styles.font }} className='text-lg  font-bold'>
          Hi, {userInfo?.name || 'Chbuzor'} !
        </Text>
        <Text
          style={{ ...styles.font, color: '#6B7280' }}
          className='text-gray-500'
        >
          {date.toDateString()}
        </Text>
      </View>

      <View
        // style={{ backgroundColor: 'blue',  }}
        className='w-full flex  flex-row  gap-6 justify-center items-center pt-5 '
      >
        <View
          style={styles.shadow}
          className='w-[45%] h-44 rounded-lg bg-white '
        >
          {/* <View
            style={{
              height: getPingHight(),
              width: getPingHight(),
              backgroundColor: themeColors.bgColor(1)
            }}
            className={`absolute   ${
              pending?.length > 0 ? 'animate-ping ' : 'bg-transparent'
            } top-3 right-3   rounded-full flex items-center justify-center`}
          ></View> */}

          <View
            style={{
              height: getHeight(),
              width: getHeight(),
              marginRight: 3,
              marginTop: 2.5
            }}
            className={`absolute top-3 right-3  bg-person  rounded-full flex items-center justify-center px-4`}
          >
            <View
              style={{
                backgroundColor: themeColors.bgColor(1),
                height: getChildHight(),
                width: getChildHight()
              }}
              className='flex rounded-full   items-center justify-center '
            >
              <Icon.Truck stroke={'white'} strokeWidth={2.5} />
            </View>
          </View>

          <View
            style={{
              height: getHeight(),
              width: getHeight(),
              marginRight: 3,
              marginTop: 2.5
            }}
            className={`absolute top-3 right-3  bg-person  rounded-full flex items-center justify-center px-4`}
          >
            <View
              style={{
                backgroundColor: themeColors.bgColor(1),
                height: getChildHight(),
                width: getChildHight()
              }}
              className='flex rounded-full   items-center justify-center '
            >
              <Icon.Truck stroke={'white'} strokeWidth={2.5} />
            </View>
          </View>

          <View className='absolute bottom-0 left-0 right-0 flex p-4 md:p-6 rounded-lg '>
            <Text className=' text-xl font-semibold text-gray-500'>
              {delivery?.length}
            </Text>
            <View style={styles.status}>
              <Text className=' font-bold text-gray-500'>Delivered</Text>
              <Icon.ChevronRight
                stroke={'rgba(107, 114, 128, .5)'}
                strokeWidth={2.5}
              />
            </View>
          </View>
        </View>
        <View
          style={styles.shadow}
          className='w-[45%] h-44 rounded-lg bg-white'
        >
          <View
            style={{
              height: getPingHight(),
              width: getPingHight(),
              backgroundColor: themeColors.bgColor(1)
            }}
            className={`absolute   ${
              pending?.length > 0 ? 'animate-ping ' : 'bg-transparent'
            } top-3 right-3   rounded-full flex items-center justify-center`}
          ></View>

          <View
            style={{
              height: getHeight(),
              width: getHeight(),
              marginRight: 3,
              marginTop: 2.5
            }}
            className={`absolute top-3 right-3  bg-person  rounded-full flex items-center justify-center px-4`}
          >
            <View
              style={{
                backgroundColor: 'red',
                height: getChildHight(),
                width: getChildHight()
              }}
              className='flex rounded-full   items-center justify-center '
            >
              <Icon.Truck stroke={'white'} strokeWidth={2.5} />
            </View>
          </View>

          <View className='absolute bottom-0 left-0 right-0 flex p-4 md:p-6 rounded-lg '>
            <Text className=' text-xl font-semibold text-gray-500'>
              {pending?.length}
            </Text>
            <View style={styles.status}>
              <Text className=' font-bold text-gray-500'>Pending</Text>
              <Icon.ChevronRight
                stroke={'rgba(107, 114, 128, .5)'}
                strokeWidth={2.5}
              />
            </View>
          </View>
        </View>
      </View>

      <View className='pt-8 pb-2'>
        <Text style={{}} className=' text-lg  font-bold '>
          Delivered
        </Text>
      </View>
      <ScrollView style={{ height: 355 }} className='w-full   '>
        {delivery.length > 0 ? (
          <View className='flex flex-col gap-4 '>
            {delivery.map((item, index) => (
              <View
                key={index}
                style={styles.shadow}
                className='flex  items-center mb-2  bg-white rounded-lg px-5 py-[1.5rem] '
              >
                <View className='flex flex-row justify-between items-center w-full '>
                  <View></View>
                  <View className='w-70%'>
                    <View className=' w-full flex flex-row justify-between items-center'>
                      <Text
                        style={{
                          ...styles.font,
                          color: themeColors.bgColor(1)
                        }}
                        className='text-blue-500 font-bold'
                      >
                        #{item.dleveryId}
                      </Text>
                      <Text
                        style={{
                          ...styles.font,
                          color: themeColors.bgColor(1)
                        }}
                        className='font-bold'
                      >
                        ${item.amount}
                      </Text>
                    </View>
                    <Text className='text-lg font-semibold'>
                      {item.quantity} x {item.name}
                    </Text>

                    <Text className=' text-gray-500 text-sm'>
                      {item.paymentType}
                    </Text>
                  </View>
                </View>

                {item.icon}
              </View>
            ))}
          </View>
        ) : (
          <View className='flex bg-white rounded-lg items-center justify-center h-64 w-full'>
            <Image
              source={require('@/assets/images/deli.jpg')}
              style={{ width: 100, height: 100 }}
            />
            <Text
              style={{ ...styles.font, color: '#6B7280' }}
              className='text-center text-lg text-gray-500'
            >
              No deliveries available
            </Text>
          </View>
        )}
      </ScrollView>

      {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(buttom icons) ********************/}
    </Animated.View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  topShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 }, // Negative height pushes shadow up
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Required for Android, but affects all sides
    backgroundColor: 'white' // Needed to visualize the shadow properly
  },
  bottomShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, // Negative height pushes shadow up
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Required for Android, but affects all sides
    backgroundColor: 'white' // Needed to visualize the shadow properly
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  font: {
    fontFamily: 'Poppins_400Regular',
    // fontSize: 16,
    color: 'black'
  }
})
