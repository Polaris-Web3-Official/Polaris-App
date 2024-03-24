import { View } from "react-native";
import React from "react";
import GlobalStyle from "../../../style/Global";
import NavigationNFTsTop from "../../../navigation/NavigationTopBooton/NavigationMarketTop/NavigationNFTsTop";

const style = GlobalStyle();

export default function NFTCryptoScreen() {
  return (
    <View
      style={{
        backgroundColor: style.mainBackgroundColor,
        flex: 1,
        width: "100%",
      }}>
      <NavigationNFTsTop />
    </View>
  );
}
