import React, { useEffect, useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import Loading from "../Comuns/Loading";
import Texto from "../Comuns/Text";
import GlobalStyle from "../../style/Global";
import formatStr from "../../utils/FormatStr";
import Error from "../Comuns/Error";
import FormatStrPerPoint from "../../utils/FormatStrPerPoint";
import trendignCoinStyle from "../../style/ComponentsStyles/TrendingCoinStyle";

const style = GlobalStyle();

function TrendingCrypto() {
  const [trendingCrypto, setTrendingCrypto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false)

  const fetchTrendingCrypto = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://polarisapp.tech/api/polaris/trending"
      );
      const data = await response.json();
      setTrendingCrypto(data.coins);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      
    }
    
  };
  useEffect(() => {
    fetchTrendingCrypto();
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
          component={fetchTrendingCrypto}
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
          await fetchTrendingCrypto();
          setRefreshing(false);
        }}
        contentContainerStyle={trendignCoinStyle.containerContent3}
        data={trendingCrypto}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={trendignCoinStyle.card}>
              <View>
                <Image style={trendignCoinStyle.img} source={{ uri: item.item.large }} />
              </View>

              <View>
                <Texto fontSize={2} style={{color: style.paragraphColor}} text={formatStr(item.item.symbol, )} />
              </View>

              <View>
                <Texto
                fontSize={1.9}
                  style={{
                    color: item.item.data.price_change_percentage_24h.usd > 0
                      ? style.testColor2
                      : style.testColor
                  }}
                  text={`${FormatStrPerPoint(
                    formatStr(
                      item.item.data.price_change_percentage_24h.usd,
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

export default TrendingCrypto;
