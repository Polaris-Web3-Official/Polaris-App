import { View, TouchableOpacity, Linking } from "react-native";
import Texto from "./Text";
import React from "react";
import GlobalStyle from "../../style/Global";
import { Text } from "react-native";

const style = GlobalStyle();

function Booton({
  text = "Hola Mundo",
  href = "https://www.example.com",
  width = 60,
  height = 20,
  borderRadius = 5,
  padding = 5,
  color = style.paragraphColor,
  fontSice = 16,
  styles,
  textSyile,
  onPress = () => Linking.openURL(href),
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width,
        height: height,
        borderColor: style.ButtonColor,
        borderRadius: borderRadius,
        padding: padding,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: style.ButtonColor,
        ...styles,
      }}>
      <Texto
        style={{
          color: color,
          fontSize: fontSice,
          ...textSyile,
        }}
        text={text}
      />
    </TouchableOpacity>
  );
}

export default React.memo(Booton);
