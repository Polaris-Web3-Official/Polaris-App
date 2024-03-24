import React from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import Welcome1 from "../screens/StackNavigator/Welcome/Welcome1";
import Welcome2 from "../screens/StackNavigator/Welcome/Welcome2";
import Welcome3 from "../screens/StackNavigator/Welcome/Welcome3";
import { View } from "react-native-animatable";
import GlobalStyle from "../style/Global";

const Stack = createStackNavigator();
const style = GlobalStyle()

export default function NavigationStackWelcome() {
  return (
    <View style={{flex: 1, backgroundColor: style.mainBackgroundColor}}>
      <Stack.Navigator
      
        initialRouteName="welcome1"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          cardStyle: {backgroundColor: style.mainBackgroundColor}
        }}>
        <Stack.Screen name="welcome1" component={Welcome1} />
        <Stack.Screen name="welcome2" component={Welcome2} />
        <Stack.Screen name="welcome3" component={Welcome3} />
      </Stack.Navigator>
    </View>
  );
}
