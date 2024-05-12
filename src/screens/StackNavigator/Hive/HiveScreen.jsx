import { View, Text } from "react-native";
import React from "react";
//import NavigationStackHive from "../../../navigation/NavigationStack/NavigationStackHive";
import GlobalStyle from "../../../style/Global";
import FetchNews from "../../../components/News/FetchNews";
import Header from "../../../components/Comuns/Header";

const style = GlobalStyle();

export default function HiveScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: style.mainBackgroundColor,
      }}>
      <Header 
        name={'Latest '}
        name2="News"
      />
      <FetchNews />
    </View>
  );
}
