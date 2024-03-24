import { Image } from "react-native";
import React from "react";
import GlobalStyle from "../../style/Global";

const style = GlobalStyle();

export default function Loading({ width = 50, height = 50 }) {
  return (
    <Image
      style={{
        width: width,
        height: height,
      }}
      source={require("../../../assets/loading.gif")}
    />
  );
}
