import { View, Text } from "react-native";
import React from "react";
import Headers from "../../components/Comuns/Header";
import BottonNavigation from "../../components/Comuns/BottonNavigation";
import GlobalStyle from "../../style/Global";
import Comming from "../../components/Comuns/Comming";

const style = GlobalStyle();

export default function Mercado({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
      <Headers
        navigation={() => navigation.openDrawer()}
        name={"Mercado P2P "}
        name2={"Polaris"}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}>
        <Comming />
        <BottonNavigation
          styles={{
            marginTop: -50,
          }}
          text="Volver Atras"
          width={140}
          height={40}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}
