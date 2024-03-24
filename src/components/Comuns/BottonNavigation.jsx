import { View, TouchableOpacity, Linking } from "react-native";
import Texto from "./Text";
import React from "react";
import GlobalStyle from "../../style/Global";

const style = GlobalStyle();

function Booton({
  text = "Hola Mundo",
  width = 60,
  height = 20,
  borderRadius = 5,
  padding = 5,
  color = style.paragraphColor,
  fontSice = 16,
  onPress,
  styles
}) {
  return (
    <TouchableOpacity
        onPress={onPress}
      style={{
        width: width,
        height: height,
        borderColor: style.ButtonColor,
        borderWidth: 0.4,
        borderRadius: borderRadius,
        padding: padding,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: style.ButtonColor,
        ...styles
      }}>
      <Texto
        style={{
          color: color,
          fontSize: fontSice,
        }}
        text={text}
        />
    </TouchableOpacity>
  );
}

export default React.memo(Booton)