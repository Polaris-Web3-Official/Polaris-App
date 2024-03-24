import React, { useEffect, useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import Loading from "../Comuns/Loading";
import Texto from "../Comuns/Text";
import GlobalStyle from "../../style/Global";
import trendignCoinStyle from "../../style/ComponentsStyles/TrendingCoinStyle";
import formatStr from "../../utils/FormatStr";
import Error from "../Comuns/Error";
import FormatStrPerPoint from "../../utils/FormatStrPerPoint";

const style = GlobalStyle();

function TrendingNFTs() {
  const [trendingCrypto, setTrendingNFTs] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false)

  const fetchTrendingNFTs = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://polarisapp.tech/api/polaris/trending"
      );
      const data = await response.json();
      setTrendingNFTs(data.nfts);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTrendingNFTs();
  }, []);

  if (loading) {
    return (
      <View
        style={trendignCoinStyle.loading}>
        <Loading width={50} height={50} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{width: '100%', height: '100%', justifyContent: "center", alignItems: "center"}}>
        <Error
          imgWidth={80}
          imgHeight={80}
          component={fetchTrendingNFTs}
        />
      </View>
    );
  }

  return (
    <View style={{ height: "100%", marginHorizontal: 10 }}>
      <FlatList
        horizontal
        refreshing={refreshing}
        showsHorizontalScrollIndicator={false}
        onRefresh={async () => {
          setRefreshing(true);
          await fetchTrendingNFTs();
          setRefreshing(false);
        }}
        contentContainerStyle={trendignCoinStyle.containerContent3}
        data={trendingCrypto}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={trendignCoinStyle.card}>
              <View>
                <Image style={trendignCoinStyle.img} source={{ uri: item.thumb }} />
              </View>

              <View>
                <Texto fontSize={2} style={{color: style.paragraphColor}} text={formatStr(item.symbol, 4)} />
              </View>

              <View>
                <Texto
                fontSize={1.9}
                  style={{
                    color: item.floor_price_24h_percentage_change > 0
                      ? style.testColor2
                      : style.testColor
                  }}
                  text={`${FormatStrPerPoint(
                    formatStr(
                      item.floor_price_24h_percentage_change,
                      12
                    )
                  )}%`}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default TrendingNFTs;
