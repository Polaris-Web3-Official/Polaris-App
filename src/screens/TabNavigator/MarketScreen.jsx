import { StyleSheet, View } from "react-native";
import React from "react";
import GlobalStyle from "../../style/Global";
import Header from "../../components/Comuns/Header";
import NavigationCryptoTop from "../../navigation/NavigationTopBooton/NavigationMarketTop/NavigationCryptoTop";
import TrendingsCoins from "../../components/FetchData/TrendingsCoins";

const style = GlobalStyle();

export default function MarketScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        name={"Crypto "}
        name2="Market"
        navigation={() => navigation.openDrawer()}
      />

      <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
        <View style={{ height: "15%", marginTop: 10, marginBottom: 5 }}>
          <TrendingsCoins />
        </View>

        <View
          style={{ height: "85%", backgroundColor: style.mainBackgroundColor }}>
          <NavigationCryptoTop />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.mainBackgroundColor,
  },
});
