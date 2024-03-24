import { View, Text } from "react-native";
import React from "react";
import GlobalStyle from "../../../style/Global";
import Texto from "../../../components/Comuns/Text";
import FetchWinnersCoins from "../../../components/FetchData/FetchWinnersCoins";

const style = GlobalStyle();

function GainersScreen() {
  return (
    <View
      style={{
        backgroundColor: style.mainBackgroundColor,
        flex: 1,
        width: "100%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}>
      <FetchWinnersCoins />
    </View>
  );
}

export default React.memo(GainersScreen)