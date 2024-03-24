import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Loading from "../Comuns/Loading";
import Error from "../Comuns/Error";
import Texto from "../Comuns/Text";
import GlobalStyle from "../../style/Global";

import formatNumber from "../../utils/FormatNumer";
import formatStr from "../../utils/FormatStr";
import FormatStrPerPoint from "../../utils/FormatStrPerPoint";
import CardsCoinsMarket from "../../style/ComponentsStyles/FetchLosersStyles";

const style = GlobalStyle();

function FetchTopLosersCoins() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://polarisapp.tech/api/polaris/losers"
      );
      const data = await response.json();
      data?.sort(
        (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
      );
      setData(data?.slice(0, 5));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Loading width={50} height={50} />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={CardsCoinsMarket.error}>
        <Error component={fetchData} imgWidth={150} imgHeight={150} />
      </View>
    );
  }

  return (
    <View style={{ gap: 10, width: "100%", height: 255, marginTop: 10}}>
      {data.map((item, index) => (
        <View key={index} style={CardsCoinsMarket.cards}>
          <Image
            source={{ uri: item.image }}
            style={CardsCoinsMarket.cardImg}
          />
          <Texto
            style={CardsCoinsMarket.cardCryptoSymbol}
            text={item.symbol.toUpperCase()}
          />
          <Texto
            style={CardsCoinsMarket.cardCryptoPrice}
            text={`$ ${formatNumber(formatStr(item.current_price, 11))}`}
          />
          <Texto
            style={CardsCoinsMarket.cardCryptoPorcentaje}
            text={`${FormatStrPerPoint(
              formatNumber(
                formatStr(
                  item.price_change_percentage_24h
                    ? item.price_change_percentage_24h
                    : 0,
                  10
                )
              )
            )} %`}
          />
          <Texto
            style={CardsCoinsMarket.cardCryptoRank}
            text={item.market_cap_rank}
          />
        </View>
      ))}
    </View>
  );
}

export default React.memo(FetchTopLosersCoins);