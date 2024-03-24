import { View, Text, ScrollView } from "react-native";
import React from "react";
import GlobalStyle from "../../../style/Global";
import FetchTopLosersCoins from "../../../components/FetchData/FetchLosersCoins";
import { Header } from "react-native-elements";

const style = GlobalStyle();

function LosersScreen() {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
      }}>
      <FetchTopLosersCoins />
    </View>
  );
}

export default React.memo(LosersScreen)
