import React, { useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import Loading from "../Comuns/Loading";
import Texto from "../Comuns/Text";
import GlobalStyle from "../../style/Global";

import formatNumber from "../../utils/FormatNumer";
import formatStr from "../../utils/FormatStr";
import Error from "../Comuns/Error";
import FormatStrPerPoint from '../../utils/FormatStrPerPoint';
import trendignCoinStyle from "../../style/ComponentsStyles/TrendingCoinStyle";

const style = GlobalStyle();

function TrendingCrypto() {
  const [trendingCrypto, setTrendingCrypto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTrendingCrypto = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://polarisapp.tech/api/polaris/trending"
      );
      const data = await response.json();
      if (data.coins.length > 0) {
        setTrendingCrypto(data.coins[0].item);
      } else {
        throw new Error("No hay datos disponibles");
      }
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
      <View style={trendignCoinStyle.loading}>
        <Error
          imgWidth={90}
          imgHeight={90}
          component={fetchTrendingCrypto}
        />
      </View>
    );
  }

  return (
    <View>
      {trendingCrypto && (
        <View style={trendignCoinStyle.container}>
          <View
            style={trendignCoinStyle.containerContent1}>
            <View style={{flexDirection: "row"}}>
              <Texto
              fontSize={1.4}
                style={{color: style.paragraphColor }}
                text={"Trending "}
              />
              <Texto
              fontSize={1.4}
                style={{color: style.ButtonColor }}
                text={"Cryptocurrency"}
              />
            </View>
            <Image
              width={40}
              height={40}
              borderRadius={50}
              source={{ uri: trendingCrypto.large }}
            />
            <View
              style={trendignCoinStyle.containerContent2}>
              <Texto
              fontSize={2.1}
                style={{color: style.ButtonColor}}
                text={trendingCrypto.symbol}
              />
              <Texto
              fontSize={2.1}
                style={{
                  color: trendingCrypto?.data?.price_change_percentage_24h
                    .toString()
                    .startsWith("-")
                    ? style.paragraphColor
                    : style.paragraphColor,
                }}
                text={
                  FormatStrPerPoint(formatNumber(
                    formatStr(
                      trendingCrypto?.data?.price_change_percentage_24h?.usd,
                      12
                    )
                  )) + "%"
                }
              />
            </View>
            <Texto
            fontSize={1.7}
              style={{color: style.borderColor,marginTop: -5}}
              text={
                formatStr(formatNumber(trendingCrypto?.data?.price), 7) +
                "  USDT"
              }
            />
            <ScrollView horizontal>
              <Texto
              fontSize={1.8}
                style={{color: style.paragraphColor,marginTop: -5}}
                text={"Market Cap: "}
              />
              <Texto
              fontSize={1.8}
                style={{color: style.ButtonColor,marginTop: -5}}
                text={formatStr(trendingCrypto?.data?.market_cap, 18)}
              />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
}

export default React.memo(TrendingCrypto);
