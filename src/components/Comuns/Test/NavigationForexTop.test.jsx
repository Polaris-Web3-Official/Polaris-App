//Navegacion del Forex screens en el top

{/*import { View } from "react-native";
import Texto from "../../../components/Comuns/Text";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import CoinsForexScreen from "../../../screens/TopNavigator/TopTabMarket/ForexScreen/CoinsForexScreen";
import MarketsForexScreen from "../../../screens/TopNavigator/TopTabMarket/ForexScreen/MarketsForexScreen";
import GlobalStyle from "../../../style/Global";
import { Icon } from "react-native-elements";

const style = GlobalStyle();
const TopTab = createMaterialTopTabNavigator();

export default function NavigationForexTop({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
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
            width: "42%",
            marginLeft: "3%",
          },
        }}
        initialRouteName="CoinsForexScreen">
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
                  <Icon
                    name="pay-circle1"
                    type="ant-design"
                    size={16}
                    color={style.ButtonColor}
                  />
                  <Texto
                    style={{
                      fontSize: 16,
                      color: style.paragraphColor,
                    }}
                    text={"Pares Populares"}
                  />
                </View>
              );
            },
          }}
          name="CoinsForexScreen"
          component={CoinsForexScreen}
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
                  <Icon
                    name="bank"
                    type="ant-design"
                    size={16}
                    color={style.ButtonColor}
                  />
                  <Texto
                    style={{
                      fontSize: 16,
                      color: style.paragraphColor,
                    }}
                    text={"Mercados Populares"}
                  />
                </View>
              );
            },
          }}
          name="MarketsForexScreen"
          component={MarketsForexScreen}
        />
      </TopTab.Navigator>
    </View>
  );
}
*/}