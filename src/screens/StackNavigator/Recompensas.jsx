import { View, Text } from 'react-native'
import React from 'react'
import Headers from '../../components/Comuns/Header'
import BottonNavigation from '../../components/Comuns/BottonNavigation'

export default function Recompensas({navigation}) {
  return (
    <View>
        <Headers />
      <Text>Recompensas</Text>
      <BottonNavigation width={80} height={40} onPress={()=> navigation.goBack()}/>
    </View>
  )
}