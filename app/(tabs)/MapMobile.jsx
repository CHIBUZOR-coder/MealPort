import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default function MapMobile () {
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      <View className='flex-1 bg-primary'>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
        </MapView>
      </View>
    </View>
  )
}
