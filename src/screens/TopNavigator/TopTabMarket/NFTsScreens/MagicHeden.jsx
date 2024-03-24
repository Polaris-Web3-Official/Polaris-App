import { View } from 'react-native';
import React from 'react'
import * as Animatable from "react-native-animatable";
import GlobalStyle from '../../../../style/Global'
import FetchMarketNfts from '../../../../components/NFTs/FetchMarketNfts';

const style =  GlobalStyle()

export default function MagicHeden() {
  return (
    <View style={{backgroundColor: style.mainBackgroundColor, flex: 1}}>
    <Animatable.View
      animation="fadeIn"
      duration={2000}
      style={{
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: style.mainBackgroundColor
      }}>
      <FetchMarketNfts />
    </Animatable.View>

      
    </View>
  )
}