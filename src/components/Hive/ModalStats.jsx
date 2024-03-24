import { View, Text } from "react-native";
import React from "react";
import GlobalStyle from "../../style/Global";
import Texto from "../Comuns/Text";

const style = GlobalStyle();

export default function ModalStats({
  stat,
  nameStat,
  styleTitleText,
  styleStatText,
  styles,
  fontSizeTitle = 2.5,
  fontSizeStat = 2,
}) {
  return (
    <View
      style={{
        padding: 10,
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        ...styles,
      }}>
      <Texto
        fontSize={fontSizeStat}
        style={{ color: style.paragraphColor, ...styleStatText }}
        text={stat ? stat : "0"}
      />
      <Texto
        fontSize={fontSizeTitle}
        style={{ color: style.paragraphColor, ...styleTitleText }}
        text={nameStat ? nameStat : "0"}
      />
    </View>
  );
}
