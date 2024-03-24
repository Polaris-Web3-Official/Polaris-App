import { View } from "react-native-animatable";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";
import GlobalStyle from "../style/Global";

const styles = GlobalStyle()

function TextLayout({height, width, style}) {
  return (
    <View animation={"fadeIn"}>
    <LinearGradient
      colors={["rgba(245,245,245,0.1)", "rgba(245,245,245,0.0001)"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        height: height,
        width: width,
        borderRadius: 10,
        padding: 5,
        ...style
      }}></LinearGradient>

    </View>
  );
}

export default React.memo(TextLayout)
