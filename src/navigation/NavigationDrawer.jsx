import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NavigationTab from "./NavigationTab";
import MenuDrawerNavigation from "./NavigationTopBooton/MenuDrawer/MenuDrawerNavigation";
import QusoftShopScreen from "../screens/DrawerNavigator/QusoftShopScreen";
import Sponsors from "../screens/DrawerNavigator/SponsorsScreen";
import NavigationStackWelcome from "./NavigationStackWelcome";
import { useWindowDimensions } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const [firstLaunch, setFirstLaunch] = useState(false);

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  async function checkIfFirstLaunch() {
    try {
      const hasLaunched = await AsyncStorage.getItem("alreadyLaunchedPolaris");
      console.log(hasLaunched);
      if (hasLaunched === null) {
        // If "alreadyLaunched" doesn't exist in AsyncStorage
        await AsyncStorage.setItem("alreadyLaunchedPolaris", "true"); // Set "alreadyLaunched" to true in AsyncStorage
        setFirstLaunch(true); // Show welcome message
      }
    } catch (error) {
      console.error("Error al obtener el valor de AsyncStorage:", error);
    }
  }

  useEffect(() => {
    checkIfFirstLaunch();
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuDrawerNavigation {...props} />}
      initialRouteName={
        firstLaunch ? "NavigationStackWelcome" : "NavigationTab"
      }
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        swipeEnabled: false,
      }}>
      <Drawer.Screen
        name="NavigationStackWelcome"
        component={NavigationStackWelcome}
      />
      <Drawer.Screen name="NavigationTab" component={NavigationTab} />
      <Drawer.Screen name="QusoftShopScreen" component={QusoftShopScreen} />
      <Drawer.Screen name="Sponsors" component={Sponsors} />
    </Drawer.Navigator>
  );
}
