import { StyleSheet, View } from "react-native";
import React from "react";
import GlobalStyle from "../../style/Global";
import Header from "../../components/Comuns/Header";
import NavigationNFTsTop from "../../navigation/NavigationTopBooton/NavigationMarketTop/NavigationNFTsTop";
import TrendingNFTs from "../../components/FetchData/FetchTrendingNFTs";

const style = GlobalStyle();

export default function NFTScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={()=>navigation.openDrawer()} name={"NFT "} name2="Market" />

      <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
        <View style={{height: "15%", marginTop: 10, marginBottom: 5 }}>
          <TrendingNFTs />
        </View>

        <View style={{ height: "85%", backgroundColor: style.mainBackgroundColor }}>
          <NavigationNFTsTop />
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
