//Este sera el componente encargado de hacer el mapa de calor

{/*import { View, Image, Animated, Easing, ScrollView } from "react-native";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import GlobalStyle from "../../../style/Global";
import { manzanas } from "./NFTColections";

const style = GlobalStyle();

export default function ExampleBrach() {
  const pulseAnimation = useRef(new Animated.Value(0)).current;

  const startPulseAnimation = () => {
    Animated.loop(
      Animated.timing(pulseAnimation, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center"}}>
      <ScrollView>
        <View style={styles.container}>
          {manzanas.map((item, index) => {
            return (
              <View key={index} style={styles.card}>
                <Animated.View
                  style={[
                    styles.pulse,
                    {
                      backgroundColor:
                        item.stat === 1
                          ? "rgba(255,100,100,0.8)"
                          : item.stat === 2
                          ? "rgba(255,228,100,0.8)"
                          : "rgba(104,255,100,0.8)",

                      transform: [
                        {
                          scale: pulseAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 40], // Ajusta el valor máximo del rango para una expansión más lenta
                          }),
                        },
                      ],
                    },
                  ]}></Animated.View>
                <Animated.Image
                  onLoad={() => startPulseAnimation()}
                  style={styles.img}
                  source={{ uri: item.url }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 0.4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: style.borderColor,
    position: "relative",
    overflow: "hidden",
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
    position: "absolute",
  },
  pulse: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 5,
  },
});
*/}