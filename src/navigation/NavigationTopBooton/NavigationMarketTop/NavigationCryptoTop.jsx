import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import MarketCryptoScreen from "../../../screens/TopNavigator/TopTabMarket/CryptoScreens/TopMarketCryptoScreen";
import TopTokensBitcoinScreen from "../../../screens/TopNavigator/TopTabMarket/CryptoScreens/TopTokensBitcoinScreen";
import TopTokensEthereumScreen from "../../../screens/TopNavigator/TopTabMarket/CryptoScreens/TopTokensEthereumScreen";
import AnimatedIconCrypto from "../../../components/Comuns/AnimatedIconCrypto";
import GlobalStyle from "../../../style/Global";

const style = GlobalStyle();

const TopTab = createMaterialTopTabNavigator();

export default function NavigationCryptoTop({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
      <TopTab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            width: "20.5%",
            marginLeft: "4.3%",
          },
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
            marginHorizontal: 5,
            backgroundColor: style.mainBackgroundColor,
          },
        }}
        initialRouteName="MarketCryptoScreen">
        <TopTab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="fire"
                color={"rgb(240,100,70)"}
                size={26}
              />
            ),
            tabBarIconStyle: {
              marginTop: -4,
            },
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "bold",
              marginTop: -5,
            },
          }}
          name="MarketCryptoScreen"
          component={MarketCryptoScreen}
        />

        <TopTab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <AnimatedIconCrypto
                src={require("../../../../assets/crypto/btc.png")}
              />
            ),
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "bold",
              marginTop: -5,
            },
          }}
          name="TopTokensBitcoinScreen"
          component={TopTokensBitcoinScreen}
        />

        <TopTab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <AnimatedIconCrypto
                src={require("../../../../assets/crypto/eth.png")}
              />
            ),
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "bold",
              marginTop: -5,
            },
          }}
          name="TopTokensEthereumScreen"
          component={TopTokensEthereumScreen}
        />
      </TopTab.Navigator>
    </View>
  );
}
