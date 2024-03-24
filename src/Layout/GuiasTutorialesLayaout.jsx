import { View, Text } from 'react-native'
import React from 'react'
import Comming from '../components/Comuns/Comming'

export default function GuiasTutorialesLayaout() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Comming />
    </View>
  )
}