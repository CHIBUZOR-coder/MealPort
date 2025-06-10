import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'
import { useDispatch } from 'react-redux'
import { dashActions } from '@/Redux/slices/dashSlice'
import { ScrollView } from 'react-native-virtualized-view'
import { themeColors } from '@/theme'
import { useRouter } from 'expo-router'

const Notifications = () => {
  const [PshowModal, setPshowModal] = useState(false)

  const dispatch = useDispatch()

  const DModalShow = () => {
    dispatch(dashActions.showDelivery())
  }
  const PModalShow = () => {
    dispatch(dashActions.showPending())
  }

  const Rider = [
    {
      dleveryId: 144,
      quantity: 2,
      name: 'Chicken Sausage',
      amount: '20.00',
      paymentType: 'Cash on Delivery',
      status: 'pending'
    },
    {
      dleveryId: 285,
      quantity: 1,
      amount: '30.00',
      name: 'Veggie Pizza',
      paymentType: 'Credit Card',
      status: 'pending'
    },

    {
      dleveryId: 365,
      quantity: 3,
      amount: '25.00',
      name: 'Beef Burger',
      paymentType: 'Mobile Payment',
      status: 'pending'
    },
    {
      dleveryId: 443,
      quantity: 2,
      name: 'Grilled Fish',
      amount: '40.00',
      paymentType: 'Cash on Delivery',
      status: 'pending'
    }
  ]

  const delivered = [
    {
      dleveryId: 120,
      quantity: 2,
      name: 'Chicken Sausage',
      amount: '20.00',
      paymentType: 'Cash on Delivery',
      status: 'deliverd'
    },

    {
      dleveryId: 465,
      quantity: 2,
      name: 'Grilled Fish',
      amount: '40.00',
      paymentType: 'Cash on Delivery',
      status: 'pending'
    },
    {
      dleveryId: 247,
      quantity: 1,
      amount: '30.00',
      name: 'Veggie Pizza',
      paymentType: 'Credit Card',
      status: 'deliverd'
    },
    {
      dleveryId: 245,
      quantity: 1,
      amount: '30.00',
      name: 'Veggie Pizza',
      paymentType: 'Credit Card',
      status: 'pending'
    },

    {
      dleveryId: 344,
      quantity: 3,
      amount: '25.00',
      name: 'Beef Burger',
      paymentType: 'Mobile Payment',
      status: 'deliverd'
    },
    {
      dleveryId: 122,
      quantity: 2,
      name: 'Chicken Sausage',
      amount: '20.00',
      paymentType: 'Cash on Delivery',
      status: 'pending'
    },
    {
      dleveryId: 485,
      quantity: 2,
      name: 'Grilled Fish',
      amount: '40.00',
      paymentType: 'Cash on Delivery',
      status: 'deliverd'
    },
    {
      dleveryId: 526,
      quantity: 1,
      amount: '35.00',
      name: 'Chocolate Cupcake',
      paymentType: 'Credit Card',
      status: 'deliverd'
    },
    {
      dleveryId: 321,
      quantity: 3,
      amount: '25.00',
      name: 'Beef Burger',
      paymentType: 'Mobile Payment',
      status: 'pending'
    },
    {
      dleveryId: 695,
      quantity: 1,
      amount: '55.00',
      name: 'Chocolate',
      paymentType: 'Credit Card',
      status: 'deliverd'
    },
    {
      dleveryId: 741,
      quantity: 1,
      amount: '40.00',
      name: 'Choco',
      paymentType: 'Credit Card',
      status: 'deliverd'
    }
  ]

  const router = useRouter()
  return (
    <View className='p-4 bg-primary'>
      <View className='flex flex-row justify-center w-full'>
       
        <Text style={styles.font} className='text-2xl font-bold text-gray-500'>
          Notifications
        </Text>
      </View>

      {/* <View className='flex flex-row items-center justify-between gap-10 pt-10 '>
        <View className='flex flex-row items-center justify-center h-full gap-3 '>
          <Text
            style={styles.font}
            className='text-lg font-semibold text-gray-500'
          >
            Pending
          </Text>
          <TouchableOpacity
            style={{ ...styles.shadow }}
            onPress={() => PModalShow()}
            className='flex items-center justify-center p-2 bg-white rounded-md'
          >
            <Icon.Clock
              stroke='black'
              strokeWidth={2.5}
              height={18}
              width={18}
            />
          </TouchableOpacity>
        </View>
        <View className='flex flex-row items-center h-full gap-3 '>
          <Text
            style={styles.font}
            className='text-lg font-semibold text-gray-500'
          >
            Deliverd
          </Text>
          <TouchableOpacity
            style={{ ...styles.shadow }}
            onPress={() => DModalShow()}
            className='flex items-center justify-center p-2 bg-white rounded-md'
          >
            <Icon.CheckCircle
              stroke='black'
              strokeWidth={2.5}
              height={18}
              width={18}
            />
          </TouchableOpacity>
        </View>
      </View> */}
      <ScrollView style={{ height: 580 }} className='mt-5'>
        {delivered.length > 0 ? (
          <View className='flex flex-col gap-4 '>
            {delivered.map((item, index) => (
              <View
                key={index}
                style={styles.shadow}
                className='flex flex-col  items-center mb-2 relative bg-white rounded-lg px-3 md:px-3 py-[1.5rem] '
              >
                <View className='flex items-center w-full gap-2 '>
                  <View className='flex flex-row items-center justify-between w-full '>
                    <View className='flex flex-row items-center gap-[5px] w-[50%] '>
                      <View
                        // style={{ backgroundColor: themeColors.bgColor(1) }}
                        className='flex items-center justify-center w-6 h-6 rounded-full bg-person '
                      >
                        <View
                          style={{
                            backgroundColor:
                              item.status === 'deliverd'
                                ? themeColors.bgColor(1)
                                : 'red'
                          }}
                          className='w-[10px] h-[10px] rounded-full h10'
                        ></View>
                      </View>

                      <View>
                        <Text
                          style={{
                            ...styles.font,
                            color: themeColors.bgColor(1)
                          }}
                          className='font-bold text-blue-500'
                        >
                          #{item.dleveryId}
                        </Text>
                      </View>
                    </View>

                    <View>
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
                  </View>
                  <View className='flex w-full '>
                    <Text className='text-lg font-semibold'>
                      {item.quantity} x {item.name}
                    </Text>

                    <Text className='text-sm text-gray-500 '>
                      {item.paymentType}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View className='flex items-center justify-center w-full h-64 bg-white rounded-lg'>
            <Image
              source={require('@/assets/images/deli.jpg')}
              style={{ width: 100, height: 100 }}
            />
            <Text
              style={{ ...styles.font, color: '#6B7280' }}
              className='text-lg text-center text-gray-500'
            >
              No deliveries available
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default Notifications

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
