import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import OpenSea from "../../../screens/TopNavigator/TopTabMarket/NFTsScreens/OpenSea";
import MagicHeden from "../../../screens/TopNavigator/TopTabMarket/NFTsScreens/MagicHeden";
import KabilaApp from "../../../screens/TopNavigator/TopTabMarket/NFTsScreens/Kabila";

import GlobalStyle from "../../../style/Global";
import { Image } from "react-native";
import Texto from "../../../components/Comuns/Text";

const style = GlobalStyle();
const TopTab = createMaterialTopTabNavigator();

export default function NavigationNFTsTop({ navigation }) {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "capitalize",
          fontWeight: "bold",
          letterSpacing: 0.1,
        },
        tabBarStyle: {
          height: 40,
          marginTop: 5,
          borderRadius: 10,
          backgroundColor: style.mainBackgroundColor,
          marginHorizontal: 5,
        },
        tabBarIndicatorStyle: {
          width: "25.5%",
          marginLeft: "3%",
        },
      }}
      initialRouteName="MagicHeden">
      <TopTab.Screen
        options={{
          tabBarLabel: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  marginTop: -10,
                }}>
                <Image
                  style={{ width: 15, height: 15 }}
                  source={require("../../../../assets/MarketPlaces/MElogo.png")}
                />
                <Texto
                  style={{
                    fontSize: 16,
                    color: style.paragraphColor,
                  }}
                  text={"Magic Eden"}
                />
              </View>
            );
          },
        }}
        name="MagicHeden"
        component={MagicHeden}
      />
      <TopTab.Screen
        options={{
          tabBarLabel: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  marginTop: -10,
                }}>
                <Image
                  style={{ width: 16, height: 16 }}
                  source={require("../../../../assets/MarketPlaces/OpenSea_icon.png")}
                />
                <Texto
                  style={{
                    fontSize: 16,
                    color: style.paragraphColor,
                  }}
                  text={"Open Sea"}
                />
              </View>
            );
          },
        }}
        name="OpenSea"
        component={OpenSea}
      />

      <TopTab.Screen
        options={{
          tabBarLabel: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  marginTop: -10,
                }}>
                <Image
                  style={{ width: 15, height: 15 }}
                  source={require("../../../../assets/MarketPlaces/kabila-logo.png.png")}
                />
                <Texto
                  style={{
                    fontSize: 16,
                    color: style.paragraphColor,
                  }}
                  text={"Kabila App"}
                />
              </View>
            );
          },
        }}
        name="KabilaApp"
        component={KabilaApp}
      />
    </TopTab.Navigator>
  );
}
