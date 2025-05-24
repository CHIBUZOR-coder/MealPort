import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const userInfo = useSelector(state => state?.user?.userInfo)



  return (
    <View className='flex-1 bg-primary'>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})
