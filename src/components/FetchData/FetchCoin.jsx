import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";

import Loading from "../Comuns/Loading";
import GlobalStyle from "../../style/Global";
import formatNumber from "../../utils/FormatNumer";
import formatStr from "../../utils/FormatStr";
import Texto from "../Comuns/Text";
import Error from "../Comuns/Error";
import FormatStrPerPoint from "../../utils/FormatStrPerPoint";

const style = GlobalStyle();

function FetchCoin({
  target,
  calUrl = `https://api.coingecko.com/api/v3/coins/${target}`,
}) {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await fetch(calUrl);
      const data = await response.json();
      setCryptoData(data);
      setError(null);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Loading />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Error component={fetchCryptoData} imgWidth={50} imgHeight={50} />
      </View>
    );
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}>
      <View>
        <Texto
          fontSize={2}
          style={{
            color: style.borderColor,
          }}
          text={cryptoData.symbol ? cryptoData.symbol.toUpperCase() : ""}
        />
      </View>
      <View>
        {cryptoData.market_data && cryptoData.market_data.current_price && (
          <Texto
            fontSize={2.8}
            style={{
              color: style.ButtonColor,
            }}
            text={FormatStrPerPoint(
              formatNumber(cryptoData.market_data.current_price.usd)
            )}
          />
        )}
      </View>
      <View>
        {cryptoData.market_data &&
          cryptoData.market_data.price_change_percentage_24h && (
            <Texto
              fontSize={1.6}
              style={{
                color: cryptoData.market_data.price_change_percentage_24h
                  .toString()
                  .startsWith("-")
                  ? style.testColor
                  : style.testColor2,
              }}
              text={
                "$" +
                " " +
                FormatStrPerPoint(
                  formatStr(
                    formatNumber(
                      cryptoData.market_data.price_change_percentage_24h
                    ),
                    10
                  )
                )
              }
            />
          )}
      </View>
    </View>
  );
}

export default React.memo(FetchCoin);
