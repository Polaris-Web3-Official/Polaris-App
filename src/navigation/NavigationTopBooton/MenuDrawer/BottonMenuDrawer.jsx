import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import GlobalStyle from "../../../style/Global";

import { useFonts } from "expo-font";
import { Nunito_500Medium } from "@expo-google-fonts/nunito";

const style = GlobalStyle();

export default function BottonMenuDrawer({
  text,
  onPress,
  icon = "home",
  type,
  color = style.ButtonColor,
  size
}) {
  const [fonts] = useFonts({
    Nunito_500Medium,
  });

  if (!fonts) {
    return null;
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
          gap: 10,
          borderRadius: 10,
          marginHorizontal: 10,
        }}>
        <Icon name={icon} type={type} onPress={onPress} color={color} size={size} />
        <Text
          style={{
            fontSize: 16,
            color: style.paragraphColor,
            fontFamily: "Nunito_500Medium",
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

