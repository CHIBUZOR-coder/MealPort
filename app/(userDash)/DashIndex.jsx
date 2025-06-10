import {
  Animated,
  StyleSheet,
  Text,
  View,
  Easing,
  useWindowDimensions,
  TouchableOpacity,
  Modal
} from 'react-native'
import React, { useEffect, useState } from 'react'

import * as Icon from 'react-native-feather'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { themeColors } from '@/theme'
import { useFocusEffect, useRouter } from 'expo-router'
import Account from './Account'
import Dashboard from './Dashboard'
import Orders from './Deliveries'
import Notifications from './Notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Load from './Load'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '@/Redux/slices/UserSlice'
import { ScrollView } from 'react-native-virtualized-view'
import Deliveries from './Deliveries'
import { dashActions } from '@/Redux/slices/dashSlice'

const storeDecodedFields = async dec => {
  try {
    await AsyncStorage.setItem('user_id', String(dec?.id))
    await AsyncStorage.setItem('user_role', dec?.role)
    await AsyncStorage.setItem('user_email', dec?.email)
    await AsyncStorage.setItem('user_firstname', dec?.firstname)
    await AsyncStorage.setItem('user_lastname', dec?.lastname)
    await AsyncStorage.setItem('user_address', dec?.address)
    await AsyncStorage.setItem('user_phone', dec?.phone)
    await AsyncStorage.setItem('user_image', dec?.image)
    await AsyncStorage.setItem('user_iat', String(dec?.iat))
    await AsyncStorage.setItem('user_exp', String(dec?.exp))
  } catch (error) {
    console.error('Failed to save decoded fields:', error)
  }
}

const index = () => {
  const { width } = useWindowDimensions()
  const [active, setActive] = useState('1')
  // const [Page, setPage] = useState('Dash')
  const [id, setId] = useState()
  const [loading, setLoading] = useState(true)
  const [render, setRender] = useState(<Dashboard />)
  const [slideAnim] = useState(new Animated.Value(width))
  const decoded = useSelector(state => state?.user?.decoded)
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')

  const pending = [
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
      dleveryId: 247,
      quantity: 1,
      amount: '30.00',
      name: 'Veggie Pizza',
      paymentType: 'Credit Card',
      status: 'deliverd'
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
  const dispatch = useDispatch()

  useEffect(() => {
    if (decoded) {
      console.log('dash:', decoded)
      storeDecodedFields(decoded)
    }
  }, [decoded])

  useEffect(() => {
    const init = async () => {
      await HandleLocalActive()
    }
    const getUserDetails = async () => {
      const firstname = await AsyncStorage.getItem('user_firstname')
      setFirstName(firstname)
      const email = await AsyncStorage.getItem('user_email')
      setEmail(email)
      const lastname = await AsyncStorage.getItem('user_lastname')
      setLastName(lastname)
      const phone = await AsyncStorage.getItem('user_phone')
      setPhone(phone)
      const image = await AsyncStorage.getItem('user_image')
      setImage(image)
      const role = await AsyncStorage.getItem('user_role')

      const userInfo = {
        firstname,
        lastname,
        email,
        phone,
        role,
        image
      }
      setRole(role)
      dispatch(userActions.SeUserInfo(userInfo))
      console.log({ firstname, email, lastname, phone, image, role })
    }
    getUserDetails()
    init()
  }, [])

  const HandleSetActive = page => {
    setActive(page.id)
    if (page.text === 'Dash') {
      setRender(<Dashboard />)
    } else if (page.text === 'Deliveries') {
      setRender(<Orders />)
    } else if (page.text === 'Notifications') {
      setRender(<Notifications />)
    } else if (page.text === 'Account') {
      setRender(<Account />)
    }
    HandleAddLocalPage(page.text, page.id)
    // setRender(page.text)
  }

  const HandleLocalActive = async () => {
    const page = await AsyncStorage.getItem('page')
    const id = await AsyncStorage.getItem('active')

    // console.log('Active', id)
    // console.log('Page:', page)

    setActive(id)
    if (page === 'Dash') {
      setRender(<Dashboard />)
    } else if (page === 'Deliveries') {
      setRender(<Deliveries />)
    } else if (page === 'Notifications') {
      setRender(<Notifications />)
    } else if (page === 'Account') {
      setRender(<Account />)
    }
    setLoading(false)
  }

  const HandleAddLocalPage = async (page, id) => {
    console.log('Adding page to local storage...')

    await AsyncStorage.setItem('page', page)
    await AsyncStorage.setItem('active', id)
  }

  const router = useRouter()
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

  useEffect(() => {
    console.log('active', active)
  }, [active])

  const DshowModal = useSelector(state => state?.dash?.deliveryModal)
  const PshowModal = useSelector(state => state?.dash?.pendingModal)

  useEffect(() => {
    console.log('Dmodal:', DshowModal)
  }, [])

  const DModalRemove = () => {
    dispatch(dashActions.RemoveDelivery())
  }

  const PModalRemove = () => {
    dispatch(dashActions.RemovePending())
  }

  const pages = [
    {
      icon: <Icon.Home stroke={'white'} strokeWidth={2.5} />,
      text: 'Dash',
      id: '1'
    },
    {
      icon: <Icon.Truck stroke={'white'} strokeWidth={2.5} />,
      text: 'Deliveries',
      id: '2'
    },
    {
      icon: <Icon.Bell stroke={'white'} strokeWidth={2.5} />,
      text: 'Notifications',
      id: '3'
    },
    {
      icon: <Icon.User stroke={'white'} strokeWidth={2.5} />,
      text: 'Account',
      id: '4'
    }
  ]

  //   if (loading) {
  //   return (
  //     <SafeAreaView style={styles.loadingContainer}>
  //       <Load />
  //     </SafeAreaView>
  //   )
  // }

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ backgroundColor: 'white', flex: 1 }}
    >
      {/* <StatusBar backgroundColor='dark' barStyle='white-content' /> */}

      <Animated.View
        className={` ${
          loading === true ? 'flex justify-center items-center' : ''
        }`}
        style={{
          flex: 1,
          backgroundColor: 'rgb(229, 231, 235)',
          position: 'relative',
          display: loading === true ? 'flex' : '',
          justifyContent: loading === true ? 'center' : '',
          alignItems: loading === true ? 'center' : '',
          transform: [{ translateX: slideAnim }]
        }}
      >
        <>{loading ? <Load /> : render}</>

        {/* Delivery Start */}
        <Modal className='dshow' visible={DshowModal} animationType='slide'>
          <SafeAreaView className='flex-1 p-4  bg-slate-300'>
            <View>
              <View className='flex flex-row justify-between w-full '>
                <Text style={styles.font} className='text-3xl font-semibold'>
                  Delivered
                </Text>
                <View className='flex gap-3'>
                  <TouchableOpacity
                    style={{ ...styles.shadow }}
                    onPress={() => DModalRemove()}
                    className='flex items-center justify-center p-2 bg-white rounded-md'
                  >
                    <Icon.ChevronDown
                      stroke='black'
                      strokeWidth={2.5}
                      height={18}
                      width={18}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView style={{ height: 550 }} className='mt-4'>
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
          </SafeAreaView>
        </Modal>
        {/* Done */}

        {/* Pending  start*/}
        <Modal className='dshow' visible={PshowModal} animationType='slide'>
          <SafeAreaView className='flex-1 p-4  bg-slate-300'>
            <View>
              <View className='flex flex-row justify-between w-full '>
                <Text style={styles.font} className='text-3xl font-semibold'>
                  Pending
                </Text>
                <View className='flex gap-3'>
                  <TouchableOpacity
                    style={{ ...styles.shadow }}
                    onPress={() => PModalRemove()}
                    className='flex items-center justify-center p-2 bg-white rounded-md'
                  >
                    <Icon.ChevronDown
                      stroke='black'
                      strokeWidth={2.5}
                      height={18}
                      width={18}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView style={{ height: 550 }} className='mt-4'>
                {pending.length > 0 ? (
                  <View className='flex flex-col gap-4 '>
                    {pending.map((item, index) => (
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
          </SafeAreaView>
        </Modal>
        {/* Done */}

        <View
          className={` bg-white absolute w-full p-5 bottom-0 left-0 ${
            loading === true ? '' : ''
          } flex flex-row justify-between gap-4 `}
        >
          {loading === true ? (
            <></>
          ) : (
            <>
              {pages.map((page, i) => (
                <View
                  key={page.id}
                  className='flex items-center justify-center gap-2 '
                >
                  <TouchableOpacity
                    onPress={() => {
                      HandleSetActive(page)
                    }}
                    className={`rounded-full ${
                      active === page.id
                        ? 'bg-activ'
                        : loading === true
                        ? 'bg-person'
                        : 'bg-person'
                    } flex justify-center items-center   p-4`}
                  >
                    <Text>{page.icon}</Text>
                  </TouchableOpacity>

                  <Text className='font-semibold text-gray-500'>
                    {page.text}
                  </Text>
                </View>
              ))}
            </>
          )}
        </View>
      </Animated.View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 18,
    color: 'gray'
  },
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
