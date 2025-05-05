import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
  Platform,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  StatusBar
} from 'react-native'
import { themeColor, themeColors } from '@/theme/index'
import * as Icon from 'react-native-feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'

function SeeAll () {
  const { id, parentId, tittle } = useLocalSearchParams()
  // console.log('idd:', id)

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

  const data = useSelector(state =>
    state.resturant.data.filter(item => item.id === parseInt(parentId))
  )

  const items = data[0]?.content
  // console.log('itemss:', items)
  // console.log('pidd:', parentId)
  //  console.log("id:", items?.id);

  const { width } = useWindowDimensions() // Get screen width
  const isLargeScreen = width >= 768 // Define "md" breakpoint
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      className='flex-1 bg-primary flex justify-center items-center p-4'
    >
      <StatusBar backgroundColor='black' barStyle='white-content' />
      <View className='p-4 '>
        <Text className='text-xl font-semibold mt-20 md:mt-0 '>{tittle}</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: themeColors.bgColor(1),
          top: insets.top + 18,
          left: 20
          // position: 'absolute'
        }}
        onPress={() => {
          navigation.goBack()
        }}
        className='absolute rounded-full p-2  shadow-lg   z-10'
      >
        <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
      </TouchableOpacity>

      {isLargeScreen ? (
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 20
          }}
          className='w-full'
        >
          {console.log('itemsTest', items)}
          {items?.map((item, i) => (
            <Pressable
              onPress={() => {
                // console.log('ItemM:', item.id)
                // console.log('ItemM:', item)
                // console.log('ItemTittel:', tittle)
                // console.log('parId:', parentId)

                router.push({
                  pathname: '/restaurant',
                  params: { parentId: parentId, id: item.id, tittle: tittle }
                })
              }}
              key={item.id}
              className='p-2 bg-white relative flex  justify-between  rounded-lg shadow-lg  '
            >
              <View className='bg-blue-500 rounded-xl'>
                <Image
                  className=' w-full '
                  style={{
                    height: isLargeScreen ? 280 : 200,
                    width: isLargeScreen ? 400 : 340,
                    resizeMode: 'cover'
                  }}
                  source={item.image}
                />
              </View>
              <View className=' w-full p-4 flex flex-col gap-3'>
                <Text className='font-bold  w-full'>{item.name}</Text>
                <Text className='font-bold  w-full flex justify-start items-center gap-3'>
                  <Text>{item.star}</Text>{' '}
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
                  <Text className='text-gray-500'>Nearby Street</Text>
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      ) : (
        <>
          <FlatList
            data={items}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: '/restaurant',
                      params: {
                        parentId,
                        id: item?.id,
                        tittle: tittle
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
                        width: isLargeScreen ? 400 : 320,
                        backgroundSize: 'cover'
                      }}
                      source={item.image}
                    />

                    <View className=' w-full p-4 flex flex-col gap-3'>
                      <Text className='font-bold  w-full'>{item.name}</Text>
                      <Text className='font-bold  w-full flex justify-start items-center gap-3'>
                        <Text>{item.star}</Text>{' '}
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
                        <Text className='text-gray-500'>Nearby Street</Text>
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )
            }}
          />
        </>
      )}
    </SafeAreaView>
  )
}

export default SeeAll
