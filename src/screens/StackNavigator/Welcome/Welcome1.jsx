import { View, Image, Dimensions } from "react-native";
import Texto from "../../../components/Comuns/Text";
import React from "react";
import GlobalStyle from "../../../style/Global";
import Header from "../../../components/Comuns/Header";
import BottonNavigation from "../../../components/Comuns/BottonNavigation";

const style = GlobalStyle();

export default function Welcome1({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: style.mainBackgroundColor,
        gap: 20, 
      }}>
      <View
        style={{
          marginBottom: 70,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height * 0.45,
          }}
          source={require("../../../../assets/welcome/backgroundWelcome1.png")}
        />
        <View style={{ flexDirection: "row", gap: 3, 
            marginBottom: 10 }}>
          <Texto
            style={{ color: style.paragraphColor }}
            fontSize={3.5}
            text={"Bienvenido a "}
          />
          <Texto
            style={{ color: style.ButtonColor }}
            fontSize={3.5}
            text={"Polaris"}
          />
        </View>
        <Texto
          style={{
            color: style.paragraphColor,
            backgroundColor: style.mainBackgroundColor2,
            padding: 10,
            borderRadius: 10,
          }}
          fontSize={1.3}
          text={"Version Alpha 1.0"}
        />
      </View>

      <BottonNavigation
        width={"90%"}
        height={40}
        text="Continuar"
        borderRadius={10}
        onPress={() => navigation.navigate("welcome2")}
        styles={{
          position: "absolute",
          bottom: 60,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 30,
          flexDirection: "row",
          gap: 10,
        }}>
        <View
          style={{
            width: 45,
            height: 10,
            borderRadius: 20,
            backgroundColor: style.ButtonColor,
          }}></View>
        <View
          style={{
            width: 45,
            height: 10,
            borderRadius: 20,
            backgroundColor: style.mainBackgroundColor2,
          }}></View>
        <View
          style={{
            width: 45,
            height: 10,
            borderRadius: 20,
            backgroundColor: style.mainBackgroundColor2,
          }}></View>
      </View>
    </View>
  );
}
