import { Image } from "react-native";
import { View } from "react-native-animatable";
import React from "react";
import Texto from "../Comuns/Text";
import GlobalStyle from "../../style/Global";
import commingStyles from "../../style/ComponentsStyles/CommingStyle";

const style = GlobalStyle();

export default function Comming() {
  return (
    <View
      animation={"fadeIn"}
      style={commingStyles.container}>
      <Image
        style={commingStyles.img}
        source={require("../../../assets/working.gif")}
      />
    </View>
  );
}
