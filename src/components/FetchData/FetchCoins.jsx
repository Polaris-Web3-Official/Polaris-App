import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import CardsStyleCoinsMarket from "../../style/CardsMarketCoinsStyle";
import Loading from "../Comuns/Loading";
import GlobalStyle from "../../style/Global";
import Error from "../Comuns/Error";
import Texto from "../Comuns/Text";
import formatStr from "../../utils/FormatStr";
import formatNumber from "../../utils/FormatNumer";
import FormatStrPerPoint from "../../utils/FormatStrPerPoint";
import { LineChart } from "react-native-chart-kit";
import formatMarketCap from "../../utils/FormatMarketCap";

const style = GlobalStyle();

const CardsCoinsMarket = CardsStyleCoinsMarket();

function FetchCoins({ calUrl, imgError, target }) {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await fetch(calUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const dataS = await data.slice(0, 11);
      setCryptoData(dataS);
      setError(null);
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  if (loading) {
    return (
      <View>
        <Loading />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Error
          component={fetchCryptoData}
          img={imgError}
          target={target}
          errorText=""
          stylesButton={{ marginTop: -30 }}
        />
      </View>
    );
  }

  const regexFiltering = (coin, searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
    return regex.test(coin.name) || regex.test(coin.symbol);
  };

  return (
    <View
      style={[CardsCoinsMarket.container, { marginTop: 10, marginBottom: 20 }]}>
      <View style={CardsCoinsMarket.placeHolderContainer}>
        <TextInput
          placeholder="Up to 500 cryptocurrencies available in the V1.0"
          style={CardsCoinsMarket.placeHolder}
          placeholderTextColor={style.borderColor}
          onChangeText={(text) => setInputText(text.toLowerCase())}
          editable={false}
        />
      </View>

      <FlatList
        data={cryptoData.filter((coin) => regexFiltering(coin, inputText))}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await fetchCryptoData();
          setRefreshing(false);
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: crypto, index }) => {
          return (
            <View key={index} style={CardsCoinsMarket.cards}>
              <View style={CardsCoinsMarket.cardsContainer1}>
                <View
                  style={{
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                    marginRight: 20,
                  }}>
                  <Texto
                    style={{ fontSize: 10, color: style.borderColor }}
                    text={() => {
                      if (crypto?.market_cap_rank === null) {
                        return ":(";
                      } else {
                        return `${crypto?.market_cap_rank}`;
                      }
                    }}
                  />
                </View>
                <View style={{ width: "9%" }}>
                  <Image
                    source={{ uri: crypto?.image }}
                    style={CardsCoinsMarket.cardImg}
                  />
                </View>
                <View style={{ width: "25%", height: 33 }}>
                  <View style={CardsCoinsMarket.cardContainerTextCryptoName}>
                    <Texto
                      style={CardsCoinsMarket.cardCryptoSymbol}
                      text={formatStr(crypto?.symbol.toUpperCase(), 4)}
                    />
                  </View>

                  <View style={CardsCoinsMarket.cardContainerCryptoPrice}>
                    <Texto
                      style={{
                        marginLeft: 5,
                        textAlign: "center",
                        fontSize: 12,
                        color: style.paragraphColor, // Añade un color por defecto aquí
                      }}
                      text={`$ ${formatNumber(
                        formatStr(
                          crypto?.current_price ? crypto.current_price : 0,
                          6
                        )
                      )}`}
                    />
                  </View>
                </View>

                <View
                  style={{
                    width: "45%",
                    marginTop: -4,
                    overflow: "hidden",
                  }}>
                  <LineChart
                    data={{
                      labels: ["", "", "", ""],
                      datasets: [
                        {
                          data: [
                            crypto?.low_24h ? crypto?.low_24h : 10,
                            crypto?.high_24h ? crypto?.high_24h : 10,
                            crypto?.current_price ? crypto?.current_price : 10,
                            crypto?.current_price
                              ? crypto?.current_price
                              : 5 + crypto?.price_change_24h
                              ? crypto?.price_change_24h
                              : 5,
                          ],
                        },
                      ],
                    }}
                    width={Dimensions.get("screen").width * 0.75}
                    height={35}
                    withHorizontalLines={false}
                    withVerticalLines={false}
                    bezier
                    style={{
                      marginLeft: -80,
                    }}
                    decorator={() => null}
                    chartConfig={{
                      backgroundColor: style.mainBackgroundColor,
                      backgroundGradientFrom: style.mainBackgroundColor,
                      backgroundGradientTo: style.mainBackgroundColor,
                      decimalPlaces: 0,
                      color: () =>
                        crypto?.price_change_percentage_24h
                          ? crypto?.price_change_percentage_24h
                              .toString()
                              .startsWith("-")
                            ? style.testColor
                            : style.testColor2
                          : "#fff",
                      labelColor: () => "transparent",
                      strokeWidth: 1,
                    }}
                  />
                </View>

                <View
                  style={{ width: "15%", gap: 3, height: 33, marginLeft: 10 }}>
                  <View style={CardsCoinsMarket.cardContainerLastUpdate}>
                    <Texto
                      style={{
                        marginLeft: 5,
                        textAlign: "center",
                        fontSize: 12,
                        color: crypto?.price_change_percentage_24h
                          ? crypto?.price_change_percentage_24h
                              .toString()
                              .startsWith("-")
                            ? style.testColor
                            : style.testColor2
                          : "#fff", // Añade un color por defecto aquí
                      }}
                      text={`${FormatStrPerPoint(
                        formatNumber(
                          formatStr(
                            crypto?.price_change_percentage_24h
                              ? crypto?.price_change_percentage_24h
                              : 0,
                            10
                          )
                        )
                      )} %`}
                    />
                  </View>

                  <View style={CardsCoinsMarket.cardContainerMarketRanking}>
                    <Texto
                      style={{ fontSize: 12, color: style.paragraphColor }}
                      text={() => {
                        if (crypto?.market_cap === null) {
                          return ":(";
                        } else {
                          return formatMarketCap(crypto?.market_cap);
                        }
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default React.memo(FetchCoins);
