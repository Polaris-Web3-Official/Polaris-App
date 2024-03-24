import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import GlobalStyle from "../../style/Global";
import HivePosts from "../../components/FetchData/HivePosts";
import HivePostDetails from "../../components/FetchData/HivePostDetails";

const Stack = createStackNavigator();
const style = GlobalStyle();

export default function NavigationStackHive() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: style.mainBackgroundColor,
      }}>
      <Stack.Navigator
        initialRouteName="HivePosts"
        screenOptions={{
          headerShown: false,
          animationTypeForReplace: "pop",
          presentation: "modal",
        }}>
        <Stack.Screen name="HivePosts" component={HivePosts} />
        <Stack.Screen name="HivePostDetails" component={HivePostDetails} />
      </Stack.Navigator>
    </View>
  );
}
