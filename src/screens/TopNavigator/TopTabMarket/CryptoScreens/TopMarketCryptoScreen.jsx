import { View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import FetchMarketCoins from "../../../../Layout/Crypto/FetchMarketCoins";
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
          width: "100%",
          height: '100%',
          justifyContent: "center",
          alignItems: "center",
        }}>
        <FetchMarketCoins />
      </Animatable.View>
    </View>
  );
}
