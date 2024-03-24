import { View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import FetchTokensBitcoin from "../../../../Layout/Crypto/FetchTokensBitcoin";
import GlobalStyle from "../../../../style/Global";

const style = GlobalStyle();

export default function MarketCryptoScreen() {
  return (
    <View
      style={{
        backgroundColor: style.mainBackgroundColor,
        flex: 1,
        
      }}>
      <Animatable.View
        animation="fadeIn"
        duration={1000}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <FetchTokensBitcoin />
      </Animatable.View>
    </View>
  );
}
