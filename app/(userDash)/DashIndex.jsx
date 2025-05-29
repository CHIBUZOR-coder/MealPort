import {
  Animated,
  StyleSheet,
  Text,
  View,
  Easing,
  useWindowDimensions,
  TouchableOpacity
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

    console.log('Active', id)
    console.log('Page:', page)

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

                  <Text className='font-semibold text-gray-500'>{page.text}</Text>
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
  }
})
