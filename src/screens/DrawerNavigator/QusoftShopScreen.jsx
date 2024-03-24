import { View, Text } from 'react-native'
import React from 'react'
import Headers from '../../components/Comuns/Header'
import GuiasTutorialesLayaout from '../../Layout/GuiasTutorialesLayaout'
import GlobalStyle from '../../style/Global'

const style = GlobalStyle()

export default function CentroDeAyudaScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: style.mainBackgroundColor}}>
      <Headers name={"Tienda "} name2={'Qsoft'} navigation={()=> navigation.openDrawer()}/>
      <GuiasTutorialesLayaout />
    </View>
  )
}