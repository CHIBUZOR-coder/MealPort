import { Platform, Text, View } from 'react-native'


export default function Delivery () {
  return (
    // <View className='flex-1 justify-center items-center bg-primary'>
    //   {Platform.OS === 'web' ? (
    //     <Text className='text-white'>Web Delivery</Text>
    //   ) : (
    //     <MapMobile />
    //   )}
    // </View>
    <View className='flex-1 justify-center items-center bg-primary px-6 '>
      
      <Text className='text-center font-semibold text-xl'>
        Delivery. 
      </Text>
      <Text className='text-center'>
        Delivery. No current Google Maps Platform Api key
      </Text>
    </View>
  )
}
