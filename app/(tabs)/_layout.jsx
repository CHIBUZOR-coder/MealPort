import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout () {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarPosition: 'top',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute'
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='house.fill' color={color} />
          ),
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }}
      />
      <Tabs.Screen
        name='restaurant'
        options={{
          title: 'Restaurant',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }}
      />
      <Tabs.Screen
        name='OrderPreparing'
        options={{
          title: 'OrderPreparing',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }}
      />
      
      <Tabs.Screen
        name='Delivery'
        options={{
          title: 'Delivery',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }}
      />
    </Tabs>
  )
}
