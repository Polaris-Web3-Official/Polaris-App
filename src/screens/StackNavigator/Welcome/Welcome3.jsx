import { View, Image, Dimensions } from "react-native";
import Texto from "../../../components/Comuns/Text";
import React from "react";
import GlobalStyle from "../../../style/Global";
import Header from "../../../components/Comuns/Header";
import BottonNavigation from "../../../components/Comuns/BottonNavigation";

const style = GlobalStyle();

export default function Welcome3({ navigation }) {
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
          source={require("../../../../assets/welcome/backgroundWelcome3.png")}
        />
        <View style={{ flexDirection: "row", gap: 3, 
            marginBottom: 10 }}>
          <Texto
            style={{ color: style.paragraphColor }}
            fontSize={3.5}
            text={"NFTs "}
          />
          <Texto
            style={{ color: style.ButtonColor }}
            fontSize={3.5}
            text={"Noticias "}
          />
          <Texto
            style={{ color: style.paragraphColor }}
            fontSize={3.5}
            text={"y mas"}
          />
        </View>
        <View style={{width: '90%', alignItems: "center"}}>
        <Texto
          style={{
            color: style.paragraphColor,
            borderRadius: 10,
            textAlign: 'center',
          }}
          fontSize={2}
          text={"Polaris no es una aplicacion, es todo un ecosistema de utilidades que nuestros usuarios podran disfrutar"}
        />
        </View>
      </View>

      <BottonNavigation
        width={"90%"}
        height={40}
        text="Comenzar"
        borderRadius={10}
        onPress={() => navigation.navigate("NavigationTab")}
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
            backgroundColor: style.mainBackgroundColor2,
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
            backgroundColor: style.ButtonColor,
          }}></View>
      </View>
    </View>
  );
}
