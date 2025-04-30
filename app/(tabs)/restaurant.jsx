import { useLocalSearchParams, useNavigation } from 'expo-router'
import {
  Animated,
  Easing,
  View,
  Text,
  Image,
  // ScrollView,
  TouchableOpacity,
  Platform,
  FlatList,
  useWindowDimensions,
  Pressable,
  StatusBar
} from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context' // Import from safe-area-context
import { ScrollView } from 'react-native-virtualized-view'

import * as Icon from 'react-native-feather'
import { themeColor, themeColors } from '@/theme/index'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { cartActions } from '@/Redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function RestaurantScreen () {
  const [quantity, setQuantities] = useState({})
  const router = useRouter()

  const [render, setRender] = useState(false)
  const [isId, setIsid] = useState(1)
  const { width } = useWindowDimensions()
  const isExtraSmall = width < 500
  const isSmall = width >= 500 && width < 768
  const isMedium = width >= 768 && width < 1001
  const isLargeScreen = width >= 768 && width < 1001
  const isExtra = width > 1001
  const [slideAnim] = useState(new Animated.Value(width)) // Start off-screen to the right
  const [heightAnim] = useState(new Animated.Value(0)) // Start at 0 height (collapsed)

  const [storedFood, setStoredFood] = useState([])
  const [localCart, setlocalCart] = useState([])
  const [CartCount, setCartCount] = useState(0)
  const [Total, setTotal] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [renderCart, setRenderCart] = useState(false)
  const dispatch = useDispatch()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  })

  const logStoredCart = async () => {
    const data = await AsyncStorage.getItem('storedFood')
    console.log('Cart Items:', data ? JSON.parse(data) : [])

    setlocalCart(data ? JSON.parse(data) : [])
  }

  const RemoveItem = async () => {
    // await AsyncStorage.clear()
    await AsyncStorage.removeItem('storedFood')
    await AsyncStorage.removeItem('quantity')
  }

  useEffect(() => {
    RemoveItem()
  }, [])

  useEffect(() => {
    logStoredCart()
    console.log('Food Added')
  }, [storedFood])

  useEffect(() => {
    console.log('localCart:', localCart)
  }, [localCart])

  const HandleAddToCart = async (dish, action) => {
    const id = dish.id.toString() // Ensure it's a string for key consistency
    let newQty

    // Step 1: Get stored quantity data (object format)
    const quantityData = await AsyncStorage.getItem('quantity')
    const parsedQuantities = quantityData ? JSON.parse(quantityData) : {}
    const currentQty = parsedQuantities[id] || 0

    // Step 2: Update the quantity
    newQty = action === 'add' ? currentQty + 1 : Math.max(currentQty - 1, 0)
    const updatedQuantities = { ...parsedQuantities, [id]: newQty }

    // Step 3: Save to AsyncStorage + update state
    await AsyncStorage.setItem('quantity', JSON.stringify(updatedQuantities))

    // Step 4: Update stored food cart
    const storedData = await AsyncStorage.getItem('storedFood')
    let storedFood = storedData ? JSON.parse(storedData) : []

    const existingFoodIndex = storedFood.findIndex(
      item => item.id === parseInt(dish.id)
    )

    if (existingFoodIndex !== -1) {
      storedFood[existingFoodIndex] = {
        ...storedFood[existingFoodIndex],
        quantity: newQty,
        price: parseFloat(dish.price) * newQty
      }
    } else if (newQty > 0) {
      // Only add if quantity > 0
      storedFood.push({ ...dish, quantity: newQty })
    }

    // Optional: remove items with quantity 0 from storedFood
    storedFood = storedFood.filter(item => item.quantity > 0)

    setStoredFood(storedFood)
    await AsyncStorage.setItem('storedFood', JSON.stringify(storedFood))
    dispatch(cartActions.addToCart(storedFood))
  }

  const loadQuantities = async () => {
    const quantityData = await AsyncStorage.getItem('quantity')
    const parsed = quantityData ? JSON.parse(quantityData) : {}
    setQuantities(parsed)
  }

  useEffect(() => {
    loadQuantities()
  }, [storedFood])

  const HandleDeleteFromAddToCart = async dish => {
    const id = parseInt(dish.id)

    // setQuantities(prev => {
    //   const currentQty = prev[id] || 0
    //   const newQty = Math.max(currentQty - 1, 0)
    //   // Update quantities state
    //   return { ...prev, [id]: newQty }
    // })

    const quantityData = await AsyncStorage.getItem('quantity')
    const parsedQuantities = quantityData ? JSON.parse(quantityData) : {}
    const currentQty = parsedQuantities[id] || 0
    const newQty = Math.max(currentQty - 1, 0)
    const updatedQuantities = { ...parsedQuantities, [id]: newQty }
    await AsyncStorage.setItem('quantity', JSON.stringify(updatedQuantities))

    const storedData = await AsyncStorage.getItem('storedFood')
    let Storedfood = JSON.parse(storedData) || []

    // let Storedfood = storedFood && storedFood

    // Check if the item exists
    const existingFood = Storedfood.find(item => item.id === parseInt(dish.id))

    if (existingFood) {
      const updatedQuantity = existingFood.quantity - 1

      if (updatedQuantity <= 0) {
        // If quantity is 1, remove the item from the cart
        Storedfood = Storedfood.filter(item => item.id !== id)

        setStoredFood(Storedfood)
        await AsyncStorage.setItem('storedFood', JSON.stringify(Storedfood))
        console.log('Item removed from cart')

        return
      } else {
        // Otherwise, just decrease the quantity and update the price
        const newQuqntity = existingFood.quantity - 1
        const defaultPrice =
          parseFloat(existingFood.price) / existingFood.quantity
        const newPrice = parseFloat(existingFood.price) - defaultPrice

        console.log('quantity:', newQuqntity)

        Storedfood = Storedfood.map(item =>
          item.id === dish.id
            ? { ...item, quantity: newQuqntity, price: newPrice }
            : item
        )
      }

      setStoredFood(Storedfood) // Update storedFood with the modified list
      await AsyncStorage.setItem('storedFood', JSON.stringify(Storedfood))
      console.log('Item removed from cart')
      dispatch(cartActions.addToCart(storedFood))
    } else {
      console.log('Item does not exist in the cart')
    }
  }

  useEffect(() => {
    const cartCount =
      localCart && localCart?.reduce((curr, acc) => curr + acc?.quantity, 0)
    setCartCount(cartCount)

    const Totalamaount =
      localCart &&
      localCart
        ?.reduce((curr, acc) => curr + parseFloat(acc.price), 0)
        .toFixed(2)

    console.log('Total:', Totalamaount)
    setTotal(Totalamaount)
  }, [localCart])

  useEffect(() => {
    console.log('CartCount:', CartCount)
  }, [CartCount])
  useEffect(() => {
    console.log('Total:', Total)
  }, [Total])

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

  useFocusEffect(
    React.useCallback(() => {
      // Reset height
      heightAnim.setValue(0)

      // Animate to full height (e.g., 200)
      Animated.timing(heightAnim, {
        toValue: 200, // or whatever height you want
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false // Height can't use native driver
      }).start()
    }, [])
  )

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
  const params = useLocalSearchParams()
  // const item = params.item ? JSON.parse(params.item) : {}
  // const tittle = params.tittle ? JSON.parse(params.tittle) : {}
  const { item, tittle } = useLocalSearchParams()

  const restaurantItem = JSON.parse(item)
  const Dishes = restaurantItem.dishes
  console.log('items:', restaurantItem)

  const navigation = useNavigation()

  useEffect(() => {
    console.log('storedFood:', storedFood)
  }, [storedFood])

  const HandleToggleTrue = () => {
    setToggle(true)
  }

  const HandleToggleFalse = () => {
    setToggle(false)
  }

  const HandleRenderCart = () => {
    setRenderCart(true)
  }
  const HandleHideCart = () => {
    setRenderCart(false)
  }

  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
      <StatusBar backgroundColor='black' barStyle='white-content' />
      {/* Notification********************* */}

      {toggle && (
        <View
          className={`fixed   ${
            toggle ? '' : 'hidden'
          } top-20 left-0 right-0 p-2 w-full  flex  justify-center items-center bg-transparent z-50 align-middle`}
          // style={{ zIndex:  }}
        >
          <TouchableOpacity
            onPress={() => {
              HandleToggleFalse()
              HandleRenderCart()
            }}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className=' p-2  rounded-3xl w-[80%]  z-50 flex flex-row justify-between items-center'
          >
            <View className=' rounded-full flex flex-row justify-center items-center h-12 w-12 bg-primary2 '>
              <Text className=' p-2 text-white  font-semibold '>
                {(CartCount && CartCount) || 0}
              </Text>
            </View>
            <Text className=' p-2 text-white font-semibold flex justify-center items-center'>
              View Cart
            </Text>
            <Text className=' p-2 text-white font-semibold flex justify-center items-center '>
              ${Total}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Notification Done *************************************************************/}

      {/* View cart **********************************************************************/}
      <SafeAreaView
        className={`flex-1  ${
          renderCart ? 'cartRender' : 'cartHide'
        }   w-full bg-primary z-50 h-full`}
        edges={['top', 'left', 'right']}
      >
        {/* Back Arrow *************************/}
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor(1),
            top: insets.top + 18,
            left: 20,
            position: 'absolute'
          }}
          onPress={() => {
            setRender(false)

            HandleHideCart()
            HandleToggleFalse()
          }}
          className='absolute rounded-full p-2  shadow-lg   z-10'
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
        </TouchableOpacity>
        {/* Back Arrow Done *************************/}

        {/* Cartitems **************************************** */}

        {storedFood.length > 0 ? (
          <View
            style={{
              top: insets.top + 90,
              left: 0,
              position: 'absolute',
              gap: 5
            }}
            className='  w-full h-1/2 absolute flex  flex-col justify-center items-center p-2 '
          >
            <FlatList
              data={storedFood}
              style={{ width: '100%', height: '100%' }}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginHorizontal: 10, // <-- add margin on left and right
                    marginTop: 10,
                    marginBottom: 10,
                    padding: 10,
                    borderRadius: 8,
                    overflow: 'hidden'
                  }}
                  className='bg-white  flex flex-row justify-between items-center gap-3 shadow-lg'
                >
                  <View className='flex flex-row justify-center gap-2 items-center'>
                    <View
                      style={{
                        height: isLargeScreen ? 100 : 70,
                        width: isLargeScreen ? 100 : 70
                        // borderRadius: 12,
                        // overflow: 'hidden'
                      }}
                      className='rounded-full h-10 w-10 overflow-hidden '
                    >
                      <Image
                        style={{
                          height: isLargeScreen ? 100 : 70,
                          width: isLargeScreen ? 100 : 70,
                          resizeMode: 'cover'
                        }}
                        source={item.image}
                      />
                    </View>
                    <Text
                      style={{ fontSize: isExtraSmall ? 10 : 15 }}
                      className='font-semibold'
                    >
                      {item.name} - x{item.quantity}
                    </Text>
                  </View>

                  <View className='flex flex-row justify-center gap-2 items-center'>
                    <Text
                      style={{ fontSize: isExtraSmall ? 10 : 15 }}
                      className='font-semibold'
                    >
                      ${parseFloat(item.price).toFixed(2)}
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        HandleDeleteFromAddToCart(item)
                        HandleToggleTrue()
                      }}
                      style={{
                        backgroundColor: themeColors.bgColor(1)
                      }}
                      className='rounded-full w-10 h-10 justify-center items-center'
                    >
                      <Icon.Minus
                        height={20}
                        width={20}
                        strokeWidth={4}
                        stroke='white'
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        ) : (
          <View className='w-full   absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-center items-center'>
            <Text className='font-semibold text-2xl '>No Items in Cart</Text>
          </View>
        )}

        {/* Cartitems Done**************************************** */}

        {/* Order Details *******************************************/}

        <View
          style={{
            top: insets.top + 10,

            position: 'absolute'
          }}
          className='w-full flex flex-row justify-center items-center p-2 absolute top-5 left-0 '
        >
          <Text style={{ fontSize: 25 }} className='font-semibold '>
            Your Orders
          </Text>
        </View>

        <View
          style={{ padding: 20 }}
          className='absolute bill  left-0 rounded-tr-3xl   rounded-tl-3xl bg-primaryLight w-full'
        >
          <View className=' flex flex-col gap-4 '>
            <View className='flex flex-row justify-between '>
              <Text>Subtotal</Text>
              <Text>{Total && Total}</Text>
            </View>
            <View className='flex flex-row justify-between '>
              <Text>Delivery Fee</Text>
              <Text>$5</Text>
            </View>
            <View className='flex flex-row justify-between '>
              <Text className='font-bold'>Order Total</Text>
              <Text className='font-bold'>${parseFloat(Total) + 5}</Text>
            </View>
          </View>

          <View
            className={`p-2 w-full  flex  justify-center items-center bg-transparent z-50 align-middle mt-4`}
            // style={{ zIndex:  }}
          >
            <TouchableOpacity
              onPress={() => {
                HandleToggleFalse()
                router.push({
                  pathname: '/OrderPreparing',
                  params: { data: storedFood }
                })
              }}
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className=' p-2  rounded-3xl w-[80%]  z-50 flex flex-row justify-between items-center'
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text className='p-2 text-white font-semibold '>
                  Place Order
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Order Details  Done *******************************************/}
      </SafeAreaView>

      {/* View cart Done ***********************************************************************/}

      <Animated.View
        className={'bg-primary'}
        style={{
          transform: [{ translateX: slideAnim }], // Apply horizontal translation

          flex: 1
        }}
      >
        <SafeAreaView className='flex-1 ' edges={['top', 'left', 'right']}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: isLargeScreen ? 200 : 0 }}
            className='flex-1 bg-primary '
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  setRender(false)
                  navigation.goBack()
                  HandleHideCart()
                  HandleToggleFalse()
                }}
                className='absolute rounded-full p-2 bg-use2 shadow-lg  top-5 left-5 z-10'
              >
                <Icon.ArrowLeft
                  strokeWidth={3}
                  stroke={themeColors.bgColor(1)}
                />
              </TouchableOpacity>

              <Image
                source={restaurantItem.image}
                style={{ width: '100%', height: 260 }}
              />
              {/* <Text className='text-white'>{item.name}</Text>
          <Text>{item.description}</Text> */}
            </View>

            <View
              className={`bg-white -mt-16 rounded-tr-3xl   rounded-tl-3xl `}
            >
              <View className=' w-full p-4 flex flex-col gap-3 '>
                <Text className='font-bold  w-full'>{restaurantItem.name}</Text>
                <View className='flex justify-start flex-col gap-4 '>
                  <Text className='font-bold  w-full flex justify-start items-center gap-3 b'>
                    <Text>{restaurantItem.star}</Text>{' '}
                    <Text className='text-gray-500'>|</Text>
                    <Text className='text-gray-500'> Fast Food</Text>
                  </Text>
                  <View className='flex w-1/2 justify-start flex-row items-center gap-3'>
                    <Icon.MapPin
                      height={'15'}
                      width={'15'}
                      strokeWidth={2.5}
                      stroke={'gray'}
                    />

                    {/* <Text className='text-gray-500'>|</Text> */}
                    <Text className='text-gray-500 '>Nearby Street</Text>
                  </View>
                </View>
                <Text className='text-gray-500 '>
                  {restaurantItem.description}
                </Text>
                <Text className='text-gray-500 text-lg'>{tittle}</Text>
              </View>
            </View>
            <View className='p-2 flex-1'>
              <View className='px-4 mt-6 '>
                <Text className='text-lg font-semibold '>Menu</Text>
              </View>

              {isLargeScreen || isExtra ? (
                <View
                  style={{ minHeight: Dishes.length * 42 }}
                  className='flex flex-row flex-wrap justify-center gap-5 '
                >
                  {Dishes.map((dish, i) => (
                    <View
                      key={dish.id}
                      style={[
                        {
                          margin: isLargeScreen ? 25 : isExtra ? 8 : 8,
                          borderRadius: 8,
                          width: isLargeScreen
                            ? 200
                            : isExtra
                            ? 400
                            : width - 22
                        },
                        shadowStyle // Spread the shadowStyle here
                      ]}
                      className='p-2 bg-white relative par flex flex-row justify-between  '
                    >
                      <View
                        style={{
                          height: isLargeScreen ? 100 : 100,
                          width: isLargeScreen ? 200 : 100,
                          // borderRadius: 12,
                          overflow: 'hidden'
                        }}
                        className='bg-blue-500 rounded-xl'
                      >
                        <Image
                          className=' w-full '
                          style={{
                            height: isLargeScreen ? 100 : 100,
                            width: isLargeScreen ? 200 : 100,
                            resizeMode: 'cover'
                          }}
                          source={dish.image}
                        />
                      </View>
                      <View className='p-2 flex-1 flex flex-col gap-5'>
                        <View>
                          <Text
                            style={{
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 15
                            }}
                            className='font-bold dish '
                          >
                            {dish.name}
                          </Text>
                          <Text className='text-gray-500'>
                            {dish.description}
                          </Text>
                          <Text>${dish.price}</Text>
                        </View>

                        <View className=' flex justify-end  flex-1 items-end '>
                          <View className='flex flex-row justify-center gap-3 items-center '>
                            <TouchableOpacity
                              onPress={() => {
                                HandleDeleteFromAddToCart(dish)
                                HandleToggleTrue()
                              }}
                              style={{
                                backgroundColor: themeColors.bgColor(1)
                              }}
                              className='rounded-full w-10 h-10 justify-center items-center'
                            >
                              <Icon.Minus
                                height={20}
                                width={20}
                                strokeWidth={4}
                                stroke='white'
                              />
                            </TouchableOpacity>

                            <Text className='font-semibold w-5 text-gray-500'>
                              {quantity[dish.id] || 0}
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                HandleAddToCart(dish, 'add')
                                HandleToggleTrue()
                              }}
                              style={{
                                backgroundColor: themeColors.bgColor(1)
                              }}
                              className='rounded-full w-10 h-10 justify-center items-center'
                            >
                              <Icon.Plus
                                height={20}
                                width={20}
                                strokeWidth={4}
                                stroke='white'
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              ) : (
                <>
                  <View className='flex  justify-center flat  overflow-auto'>
                    <FlatList
                      style={{ minHeight: restaurantItem.dishes.length * 42 }}
                      key={
                        isLargeScreen
                          ? 'large-screen'
                          : isExtra
                          ? 'extra-screen'
                          : 'small-screen'
                      } // Unique key based on screen size
                      data={restaurantItem.dishes}
                      keyExtractor={item => item.id.toString()}
                      numColumns={isLargeScreen ? 3 : isExtra ? 6 : 1}
                      renderItem={({ item: dish }) => (
                        <View
                          style={[
                            {
                              margin: isLargeScreen ? 25 : isExtra ? 10 : 8,
                              borderRadius: 8,
                              width: isLargeScreen
                                ? 200
                                : isExtra
                                ? 400
                                : width - 30
                            },
                            shadowStyle // Spread the shadowStyle here
                          ]}
                          className='p-2 bg-white relative par flex flex-row justify-between  '
                        >
                          <View
                            style={{
                              height: isLargeScreen ? 100 : 100,
                              width: isLargeScreen ? 200 : 100,
                              // borderRadius: 12,
                              overflow: 'hidden'
                            }}
                            className='bg-blue-500 rounded-xl'
                          >
                            <Image
                              className=' w-full '
                              style={{
                                height: isLargeScreen ? 100 : 100,
                                width: isLargeScreen ? 200 : 100,
                                resizeMode: 'cover'
                              }}
                              source={dish.image}
                            />
                          </View>
                          <View className='p-2 flex-1 flex flex-col gap-5'>
                            <View>
                              <Text
                                style={{
                                  fontFamily: 'Poppins_400Regular',
                                  fontSize: 15
                                  // fontWeight: 800
                                }}
                                className='font-bold dish'
                              >
                                {dish.name}
                              </Text>
                              <Text className='mt-1 text-gray-500'>
                                {dish.description}
                              </Text>
                              <Text
                                style={{
                                  fontFamily: 'Poppins_400Regular',
                                  fontSize: 15
                                }}
                                className='font-bold mt-4'
                              >
                                ${dish.price}
                              </Text>
                            </View>

                            <View className=' flex justify-end  flex-1 items-end '>
                              <View className='flex flex-row justify-center gap-3 items-center '>
                                <TouchableOpacity
                                  onPress={() => {
                                    HandleDeleteFromAddToCart(dish)
                                    HandleToggleTrue()
                                  }}
                                  style={{
                                    backgroundColor: themeColors.bgColor(1)
                                  }}
                                  className='rounded-full w-10 h-10 justify-center items-center'
                                >
                                  <Icon.Minus
                                    height={20}
                                    width={20}
                                    strokeWidth={4}
                                    stroke='white'
                                  />
                                </TouchableOpacity>

                                <Text className='font-semibold w-5 text-center text-gray-500'>
                                  {quantity[dish.id] || 0}
                                </Text>
                                <TouchableOpacity
                                  onPress={() => {
                                    HandleAddToCart(dish, 'add')
                                    HandleToggleTrue()
                                  }}
                                  style={{
                                    backgroundColor: themeColors.bgColor(1)
                                  }}
                                  className='rounded-full w-10 h-10 justify-center items-center'
                                >
                                  <Icon.Plus
                                    height={20}
                                    width={20}
                                    strokeWidth={4}
                                    stroke='white'
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      )}
                    />
                  </View>
                </>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Animated.View>
    </View>
  )
}
