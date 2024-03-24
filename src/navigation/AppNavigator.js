import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigator from './NavigationDrawer'
import { NavigationContainer } from '@react-navigation/native'


export default function AppNavigator() {
  return (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
  )
}