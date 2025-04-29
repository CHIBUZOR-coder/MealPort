
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native'

import { categories } from '@/Categories/index'
import { useState } from 'react'

const Categories = () => {
  // console.log(categories)

  const [ActiveCategory, setActiveCATEGORY] = useState(null)
  const { width } = useWindowDimensions() // Get screen width
  const isLargeScreen = width >= 768 // Define "md" breakpoint

  return (
    <View className='flex'>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ width: isLargeScreen ? 50 : 18 }} />
        )}
        ListEmptyComponent={<Text>No Items Found</Text>}
        data={categories}
        contentContainerStyle={{
          paddingHorizontal: 10,
          flexGrow: 1, // Ensures the container expands to available space
          justifyContent: isLargeScreen ? 'space-between' : 'flex-start' // Center items on large screens
        }}
        renderItem={({ item }) => {
          let isActive = item.id === ActiveCategory
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200'
          let textClass = isActive
            ? 'font-semibold text-gray-800'
            : 'text-gray-500'

          return (
            <View className='flex flex-col justify-center  items-center'>
              <TouchableOpacity
                className={`rounded-full h-20 w-20 bg-gray-400 flex justify-center shadow-lg items-center ${btnClass} `}
                onPress={() => setActiveCATEGORY(item.id)}
              >
                <Image
                  style={{ width: 45, height: 45, borderRadius: 22.5 }}
                  source={item.image}
                />
              </TouchableOpacity>

              <View className='justify-center items-center' style={{ width: '100%', height: 20, marginTop: 5 }}>
                <Text
                  className={`flex justify-center items-center text-[12px] ${textClass} `}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Categories
