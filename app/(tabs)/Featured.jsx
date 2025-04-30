import { featuredDishes } from '@/Categories'
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  Touchable,
  useWindowDimensions,
  View
} from 'react-native'
import { themeColor, themeColors } from '@/theme/index'
import * as Icon from 'react-native-feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link, useNavigation } from 'expo-router'
import { useRouter } from 'expo-router'
import { homeActions } from '@/Redux/slices/HomePageSlice'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Featured = () => {
  const dispatch = useDispatch()
  const showModal = useSelector(state => state.home.showModal)

  console.log('modal', showModal)

  const HandleShowModal = () => {
    dispatch(homeActions.HandleShowModal())
  }

  // const navigation = useNavigation()
  const { width } = useWindowDimensions() // Get screen width
  const isLargeScreen = width >= 768 // Define "md" breakpoint
  const numColumns = isLargeScreen ? 3 : 1

  const router = useRouter()

  const shadowStyle = Platform.select({
    ios: {
      shadowColor: '#000', // Shadow color for iOS
      shadowOffset: { width: 5, height: 5 }, // Shadow offset
      shadowOpacity: 0.6, // Shadow opacity
      shadowRadius: 7 // Shadow softness
    },
    android: {
      elevation: 10 // Elevation for Android shadow
    },
    default: {}
  })

  // const isLargeScreen = width >= 768 // Define "md" breakpoint
  // const numColumns = isLargeScreen ? 3 : 1 // Define number of columns based on screen size
  return (
    <SafeAreaView className='mt-8 relative ' style={{ flex: 1 }}>
      {/* <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'yellow',
          zIndex: 20
        }}
        className='w-full absolute top-0 left-0 z-20 '
      ></View> */}
      <FlatList
        data={featuredDishes}
        ItemSeparatorComponent={() => (
          <View style={{ height: isLargeScreen ? 30 : 70 }} />
        )}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        contentContainerStyle={{
          // backgroundColor: 'blue',
          paddingVertical: 2,
          paddingHorizontal: isLargeScreen ? 23 : 8,
          flexGrow: 1, // Ensures the container expands to available space
          // justifyContent: isLargeScreen ? 'start' : 'start', // Center items on large screens
          justifyContent: 'space-between'
        }}
        // 👈 3 Columns on Large Screens, 1 Column on Small Screens
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View View className={` py-1 flex flex-col gap-6 touch  `}>
              <View className='flex flex-col gap-2'>
                <View
                  style={{ paddingHorizontal: 10 }}
                  className={`flex-row  content  justify-between  `}
                >
                  <View className='flex flex-colw-full '>
                    <Text className='font-semibold text-lg'>{item.tittle}</Text>
                  </View>

                  <Pressable
                    onPress={() =>
                      router.push({
                        pathname: '/SeeAll',
                        params: { data: JSON.stringify(item.content) }
                      })
                    }
                    className='flex flex-col '
                  >
                    <Text
                      style={{
                        color: themeColors.bgColor(1),
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                      }}
                      className='font-semibold text-lg '
                    >
                      See All
                    </Text>
                  </Pressable>
                </View>

                {/* margin */}
                <Text
                  style={{ paddingHorizontal: 10 }}
                  className=' text-sm text-gray-500   '
                >
                  {item.description}
                </Text>
              </View>

              <View className=''>
                <FlatList
                  data={item.content}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={subItem => subItem.id.toString()}
                  renderItem={({ item: subItem }) => {
                    return (
                      <Pressable
                        onPress={() =>
                          router.push({
                            pathname: '/restaurant',
                            params: {
                              item: JSON.stringify(subItem),
                              tittle: item.tittle
                            }
                          })
                        }
                      >
                        <View
                          style={[
                            {
                              margin: 8,
                              borderRadius: 8
                            },
                            shadowStyle // Spread the shadowStyle here
                          ]}
                          className={` flex flex-col bg-white  rounded-lg shadow-lg  `}
                        >
                          <Image
                            className='rounded-t-lg'
                            style={{
                              height: isLargeScreen ? 280 : 200,
                              width: isLargeScreen ? 400 : 340,
                              backgroundSize: 'cover'
                            }}
                            source={subItem.image}
                          />

                          <View className=' w-full p-4 flex flex-col gap-3'>
                            <Text className='font-bold  w-full'>
                              {subItem.name}
                            </Text>
                            <Text className='font-bold  w-full flex justify-start items-center gap-3'>
                              <Text>{subItem.star}</Text>{' '}
                              <Text className='text-gray-500'>|</Text>
                              <Text className='text-gray-500'> Fast Food</Text>
                            </Text>
                            <Text className='flex justify-start items-center gap-3'>
                              <Icon.MapPin
                                height={'15'}
                                width={'15'}
                                strokeWidth={2.5}
                                stroke={'gray'}
                              />

                              {/* <Text className='text-gray-500'>|</Text> */}
                              <Text className='text-gray-500'>
                                Nearby Street
                              </Text>
                            </Text>
                          </View>
                        </View>
                      </Pressable>
                    )
                  }}
                />
              </View>

              {/* flatlist */}
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Featured
