import React from 'react'
import Comming from '../../../../components/Comuns/Comming'
import * as Animatable from "react-native-animatable";
import { Dimensions } from 'react-native';

import GlobalStyle from '../../../../style/Global'
const style =  GlobalStyle()
const height = Dimensions.get("screen").height

export default function KabilaApp() {
  return (
    <Animatable.View
      animation="fadeIn"
      duration={2000}
      style={{
        flex: 1,
        height: height - 200,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: style.mainBackgroundColor
      }}>
      <Comming />
    </Animatable.View>
  )
}