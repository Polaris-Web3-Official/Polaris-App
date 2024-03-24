import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/StackNavigator/HomeScreen";
import Materiales from "../screens/StackNavigator/Materiales";
import Productos from "../screens/StackNavigator/Productos";
import Recompensas from "../screens/StackNavigator/Recompensas";
import Servicios from "../screens/StackNavigator/Servicios";
import Cursos from "../screens/StackNavigator/Cursos";
import Trabajos from "../screens/StackNavigator/Trabajos";
import Comunidad from "../screens/StackNavigator/Comunidad";
import Mercado from "../screens/StackNavigator/Mercado";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "pop",
        presentation: "modal",
      }}>
      <Stack.Screen name="Home" component={Home} />

      {/*Screens con las cuales saldra la veta disponible*/}
      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="Servicios" component={Servicios} />

      {/*Estas Screens se sumaran en la version Alpha*/}
      <Stack.Screen
        name="Materiales"
        component={Materiales}
        options={{ presentation: "transparentModal" }}
      />
      <Stack.Screen
        name="Cursos"
        component={Cursos}
        options={{ presentation: "transparentModal" }}
      />
      <Stack.Screen
        name="Trabajos"
        component={Trabajos}
        options={{ presentation: "transparentModal" }}
      />
      <Stack.Screen
        name="Comunidad"
        component={Comunidad}
        options={{ presentation: "transparentModal" }}
      />
      <Stack.Screen
        name="Mercado"
        component={Mercado}
        options={{ presentation: "transparentModal" }}
      />

      {/*Screen Adicional*/}
      <Stack.Screen name="Recompensas" component={Recompensas} />
    </Stack.Navigator>
  );
}
