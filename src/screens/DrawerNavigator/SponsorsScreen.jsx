import { View } from 'react-native'
import React from 'react'
import Headers from '../../components/Comuns/Header'
import GlobalStyle from '../../style/Global'
import FetchPartners from '../../components/Partner/FetchPartners'

const style = GlobalStyle()

export default function CentroDeAyudaScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: style.mainBackgroundColor}}>
      <Headers name={"Sponsors "} name2='Polaris' navigation={()=> navigation.openDrawer()}/>

      <View 
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <FetchPartners />
      </View>
    </View>
  )
}