import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import * as Icon from 'react-native-feather'
import { themeColors } from '@/theme'
import { useSelector, useDispatch } from 'react-redux'
import { userActions, VerifyUser } from '@/Redux/slices/UserSlice'

const VerifyEmail = () => {
  const { token } = useLocalSearchParams()
  const dispatch = useDispatch()
  const router = useRouter()
  const [Token, setToken] = useState(null)

  useEffect(() => {
    setToken(token)
  }, [])

  useEffect(() => {
    if (Token) {
      console.log('Token', Token)

      HandleVerifyAccount()
    }
  }, [Token])

  // const verifyLoading = useSelector(state => state?.user?.verifyLoading)
  const verificationMessage = useSelector(
    state => state?.user?.verificationData?.message
  )
  const verifyModal = useSelector(state => state?.user?.verifyModal)

  const HandleVerifyAccount = async () => {
    const result = await dispatch(VerifyUser(Token))
    console.log('result', result)

    if (result?.payload?.success === true) {
      // console.log('sucessss:', result.success)

      console.log('Registration Success:', result.data)
      setTimeout(() => {
        dispatch(userActions.hideVerrifyModal())
        router.push({
          pathname: '/Login'
        })
      }, 3000)
    } else {
      setTimeout(() => {
        console.log('Registration Failed:', result?.payload || 'Unknown error')

        dispatch(userActions.hideVerrifyModal())
      }, 4000)
    }
  }

  return (
    <View className='flex-1 bg-primary relative flex flex-row justify-center items-center'>
      {verifyModal ? (
        <Modal visible={verifyModal} transparent={true} animationType='fade'>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              backgroundColor: 'rgba(0,0,0,0.5)' // semi-transparent background
            }}
          >
            <View
              style={{
                width: '80%',
                height: '30%',
                position: 'absolute',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text className='text-gray-500 font-semibold text-xl'>
                {(verificationMessage && verificationMessage) ||
                  'Unknown error'}
              </Text>
            </View>
          </View>
        </Modal>
      ) : (
        <View className=''>
          <Text
            style={{ marginVertical: 20 }}
            className='text-gray-500 text-2xl font-semibold '
          >
            Verifing Email
          </Text>
          <Icon.Loader
            className='animate-spin'
            stroke={themeColors.bgColor(1)}
            width={128}
            height={128}
          />
        </View>
      )}
    </View>
  )
}

export default VerifyEmail
