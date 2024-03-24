import { View, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import GlobalStyle from "../../style/Global";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const styles = GlobalStyle();

function Texto({ text, fontSize = 2, style }) {
  const [fontLoaded, setFontLoaded] = useFonts({
    Nunito: require("../../../assets/Fonts/Nunito/static/Nunito-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayaut = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return (
      <Animatable.View animation={"rubberBand"} onLayout={onLayaut}>
        <Text
          style={{
            fontSize: RFPercentage(fontSize),
            ...style,
          }}>
          {text}
        </Text>
      </Animatable.View>
    );
  }

  return (
    <View onLayout={onLayaut}>
      <Text
        style={{
          fontFamily: "Nunito",
          fontSize: RFPercentage(fontSize),
          ...style,
        }}>
        {typeof text === "function" ? text() : text}
      </Text>
    </View>
  );
}

export default Texto;
