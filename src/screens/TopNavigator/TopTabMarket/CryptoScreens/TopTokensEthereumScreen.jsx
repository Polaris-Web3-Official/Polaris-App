import { View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import FetchTokensEthereum from "../../../../Layout/Crypto/FetchTokensEthereum";
import GlobalStyle from "../../../../style/Global";

const style = GlobalStyle();

export default function TopTokensEthereumScreen() {
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
        <FetchTokensEthereum />
      </Animatable.View>
    </View>
  );
}
