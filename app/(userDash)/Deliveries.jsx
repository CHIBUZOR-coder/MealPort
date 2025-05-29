import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'

const Deliveries = () => {
  const [DshowModal, setDshowModal] = useState(false)
  const [PshowModal, setPshowModal] = useState(false)
  const DModalShow = () => {
    setDshowModal(prv => !prv)
  }

  const PModalShow = () => {
    setPshowModal(prv => !prv)
  }

  const pending = [
    {
      dleveryId: 144,
      quantity: 2,
      name: 'Chicken Sausage',
      amount: '20.00',
      paymentType: 'Cash on Delivery'
    },
    {
      dleveryId: 285,
      quantity: 1,
      amount: '30.00',
      name: 'Veggie Pizza',
      paymentType: 'Credit Card'
    },
    {
      dleveryId: 365,
      quantity: 3,
      amount: '25.00',
      name: 'Beef Burger',
      paymentType: 'Mobile Payment'
    },
    {
      dleveryId: 443,
      quantity: 2,
      name: 'Grilled Fish',
      amount: '40.00',
      paymentType: 'Cash on Delivery'
    }
  ]

  const delivered = [
    {
      dleveryId: 120,
      quantity: 2,
      name: 'Chicken Sausage',
      amount: '20.00',
      paymentType: 'Cash on Delivery'
    },
    {
      dleveryId: 247,
      quantity: 1,
      amount: '30.00',
      name: 'Veggie Pizza',
      paymentType: 'Credit Card'
    },
    {
      dleveryId: 344,
      quantity: 3,
      amount: '25.00',
      name: 'Beef Burger',
      paymentType: 'Mobile Payment'
    },
    {
      dleveryId: 485,
      quantity: 2,
      name: 'Grilled Fish',
      amount: '40.00',
      paymentType: 'Cash on Delivery'
    },
    {
      dleveryId: 526,
      quantity: 1,
      amount: '35.00',
      name: 'Chocolate Cupcake',
      paymentType: 'Credit Card'
    },
    {
      dleveryId: 695,
      quantity: 1,
      amount: '55.00',
      name: 'Chocolate',
      paymentType: 'Credit Card'
    },
    {
      dleveryId: 741,
      quantity: 1,
      amount: '40.00',
      name: 'Choco',
      paymentType: 'Credit Card'
    }
  ]

  return (
    <View  className='flex-1 p-4 bg-primary'>
      <View className='flex flex-row justify-between w-full '>
        <Text className='text-3xl font-semibold'>Deliveries</Text>
        <View className='flex gap-3'>
          <View className='flex flex-row items-center justify-center gap-3'>
            <Text className='text-lg font-semibold text-gray-500'>
              Deliverd
            </Text>
            <TouchableOpacity
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
          <View className='flex flex-row items-center justify-center gap-3'>
            <Text className='text-lg font-semibold text-gray-500'>Pending</Text>
            <TouchableOpacity
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
        </View>


        
        <Modal className='dshow' visible={DshowModal} animationType='slide'>
          <View className='bg-white rounded-tr-md rounded-tl-md'>
            <TouchableOpacity onPress={() => DModalShow()}>
              <Icon.Filter
                stroke='black'
                strokeWidth={2.5}
                height={24}
                width={24}
              />
            </TouchableOpacity>
            <Text className='text-xl'>Deliverd</Text>
          </View>
        </Modal>
        <Modal className='dshow' visible={PshowModal} animationType='slide'>
          <View className='bg-white rounded-tr-md rounded-tl-md'>
            <TouchableOpacity onPress={() => PModalShow()}>
              <Icon.Filter
                stroke='black'
                strokeWidth={2.5}
                height={24}
                width={24}
              />
            </TouchableOpacity>

            <Text className='text-xl'>Pending..</Text>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default Deliveries

const styles = StyleSheet.create({})
