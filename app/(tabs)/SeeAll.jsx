import { useLocalSearchParams, useNavigation } from 'expo-router'
import { View, Text } from 'react-native'


function SeeAll () {
  const { data } = useLocalSearchParams()

  const item = JSON.parse(data)
  console.log('item', item)

  return (
    <View className='flex-1 bg-red-400 flex justify-center items-center'>
      <Text className='text-xl'>SeeAll</Text>
    </View>
  )
}

export default SeeAll
