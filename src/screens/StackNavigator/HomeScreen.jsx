import * as React from "react";
import NewsComponent from "../../components/News/FetchNews";
import Headers from "../../components/Comuns/Header";
import { View } from "react-native";
import GlobalStyle from "../../style/Global";
import HomeLayout from "../../Layout/HomeLayout";

const style = GlobalStyle();

function Home({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: style.mainBackgroundColor,
        flex: 1,
        width: "100%",
      }}>
      <Headers
        name={"Bienvenido "}
        name2={"a Polaris 🐋"}
        icon={"home"}
        navigation={() => navigation.openDrawer()}
      />
      <HomeLayout navigation={navigation}/>
      
    </View>
  );
}

export default React.memo(Home)