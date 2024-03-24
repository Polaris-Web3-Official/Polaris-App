import { View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import GainersScreen from "../../screens/TopNavigator/TopTabGainersLosers/GainersScreen";
import LosersScreen from "../../screens/TopNavigator/TopTabGainersLosers/LosersScreen";
import GlobalStyle from "../../style/Global";
import Texto from "../../components/Comuns/Text";
import { Icon } from "react-native-elements";

const style = GlobalStyle();
const Top = createMaterialTopTabNavigator();

export default function NavigationTopGainersLosers({ navigation }) {
  return (
    <Top.Navigator
      initialRouteName="GainersScreen"
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: style.mainBackgroundColor2,
          borderRadius: 15,
          height: 35,
        },
        tabBarInactiveTintColor: style.borderColor,
        tabBarActiveTintColor: style.paragraphColor,
        tabBarIndicatorStyle: {
          width: "40%",
          marginLeft: "3.5%",
        },
        tabBarLabelStyle: {
          color: style.ButtonColor,
        },
      }}>
      <Top.Screen
        options={{
          tabBarLabel: ({ color }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  marginTop: -15,
                }}>
                <Texto
                fontSize={2.1}
                  style={{
                    color: color,
                  }}
                  text={"Ganadoras"}
                />
                <Icon
                  name="chart-bell-curve-cumulative"
                  type="material-community"
                  size={14}
                  color={color}
                />
              </View>
            );
          },
        }}
        name="GainersScreen"
        component={GainersScreen}
      />
      <Top.Screen
        options={{
          tabBarLabel: ({ color }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  marginTop: -15,
                }}>
                <Texto
                fontSize={2.1}
                  style={{
                    color: color,
                  }}
                  text={"Perdedoras"}
                />
                <Icon
                  name="chart-bell-curve"
                  type="material-community"
                  size={14}
                  color={color}
                />
              </View>
            );
          },
        }}
        name="LosersScreen"
        component={LosersScreen}
      />
    </Top.Navigator>
  );
}
