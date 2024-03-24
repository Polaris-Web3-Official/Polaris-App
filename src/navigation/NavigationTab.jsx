import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import GlobalStyle from "../style/Global";
import { View } from "react-native-animatable";
import NavigationStack from "./NavigationStack";
import Wallet from "../screens/TabNavigator/Portafolio/Wallet";
import MarketScreen from "../screens/TabNavigator/MarketScreen";
import NFTScreen from "../screens/TabNavigator/NFTScreen";
import HiveScreen from "../screens/StackNavigator/Hive/HiveScreen";

const Tab = createBottomTabNavigator();
const style = GlobalStyle();
export default function NavigationTab() {
  return (
    <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
      <Tab.Navigator
        initialRouteName="NavigationStack"
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: style.tabBar.inactiveColor,
          tabBarActiveTintColor: style.tabBar.activeColor,
          tabBarStyle: {
            backgroundColor: style.mainBackgroundColor,
            height: 60,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="NavigationStack"
          component={NavigationStack}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <CustomTabBarIcon name="home" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MarketScreen"
          component={MarketScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <CustomTabBarIcon name="barchart" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="NFTScreen"
          component={NFTScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <CustomTabBarIcon name="appstore1" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HiveScreen"
          component={HiveScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <CustomTabBarIcon name="book" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <CustomTabBarIcon name="wallet" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const CustomTabBarIcon = ({ name, color, type = "ant-design" }) => (
  <View
    style={{
      backgroundColor: style.mainBackgroundColor,
      width: "100%",
      height: 60,
      marginTop: 20,
    }}>
    <Icon
      type={type}
      name={name}
      size={26}
      color={color}
      style={{ marginTop: 13 }}
    />
  </View>
);
