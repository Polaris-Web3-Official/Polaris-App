import { View } from "react-native";
import React from "react";
import NavigationCryptoTop from "../../../navigation/NavigationTopBooton/NavigationMarketTop/NavigationCryptoTop";
import GlobalStyle from "../../../style/Global";

const style = GlobalStyle();

export default function CryptoScreen() {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        backgroundColor: style.mainBackgroundColor,
      }}>
      <NavigationCryptoTop />
    </View>
  );
}
