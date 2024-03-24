//Obtenero los mercados de Forex

{/*import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle from "../../style/Global";
import Error from "../Comuns/Error";
import Loading from "../Comuns/Loading";
import formatStr from "../../utils/FormatStr";
import { Icon } from "react-native-elements";
import Texto from "../Comuns/Text";

const style = GlobalStyle();
const screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};
const apiKey = "QF0LJ3ESCZD303DZ";
const url =
  "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=" + apiKey;

function FetchMarketsDataForex() {
  const [markets, setMarkets] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get(url);
      const data = await response.data;
      setMarkets(data);
    } catch (e) {
      console.error(e);
      setError(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: screen.height - 200,
        }}>
        <Loading />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: screen.height - 200,
        }}>
        <Error
          component={getData}
          img={require("../../../assets/crypto/btc.png")}
          target={"los mercados de Forex"}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.contentListContainer}
        style={styles.flatList}
        data={markets ? markets.markets : []}
        renderItem={({ item, index }) => {
          index = Math.random() * 1000
          console.log(index);
          return (
            <View key={index} style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.cardContentContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}>
                    <Icon
                      name="bank"
                      type="ant-design"
                      size={20}
                      color={style.ButtonColor}
                    />
                    <Texto
                      style={styles.cardContentContainerTitle}
                      text={"Mercado"}
                    />
                  </View>
                  <Texto
                    style={styles.cardContentContainerText}
                    text={item.region}
                  />
                </View>

                <View style={{ flexWrap: "wrap", width: "100%" }}>
                  <View style={styles.cardContentContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                      }}>
                      <Icon
                        name="creditcard"
                        type="ant-design"
                        size={20}
                        color={style.ButtonColor}
                      />
                      <Texto
                        style={styles.cardContentContainerTitle}
                        text={"Exchange principales"}
                      />
                    </View>
                    <Texto
                      style={styles.cardContentContainerText}
                      text={formatStr(item.primary_exchanges, 20)}
                    />
                  </View>
                </View>

                <View
                  style={{ flexDirection: "row", gap: 20, flexWrap: "wrap" }}>
                  <View style={styles.cardContentContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                      }}>
                      <Icon
                        name="login"
                        type="ant-design"
                        size={20}
                        color={style.ButtonColor}
                      />
                      <Texto
                        style={styles.cardContentContainerTitle}
                        text={"Abre"}
                      />
                    </View>
                    <Texto
                      style={styles.cardContentContainerText}
                      text={item.local_open}
                    />
                  </View>

                  <View style={styles.cardContentContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                      }}>
                      <Icon
                        name="logout"
                        type="ant-design"
                        size={20}
                        color={style.ButtonColor}
                      />
                      <Texto
                        style={styles.cardContentContainerTitle}
                        text={"Cierra"}
                      />
                    </View>
                    <Texto
                      style={styles.cardContentContainerText}
                      text={item.local_close}
                    />
                  </View>
                </View>

                <View style={styles.cardContentContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}>
                    <Icon
                      name="sync"
                      type="ant-design"
                      size={20}
                      color={style.ButtonColor}
                    />
                    <Texto
                      style={styles.cardContentContainerTitle}
                      text={"Estado"}
                    />
                  </View>
                  <Texto
                    style={styles.cardContentContainerText}
                    text={item.current_status}
                  />
                </View>

                <View style={styles.cardContentContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}>
                    <Icon
                      name="flag"
                      type="ant-design"
                      size={20}
                      color={style.ButtonColor}
                    />
                    <Texto
                      style={styles.cardContentContainerTitle}
                      text={"Tipo de mercado"}
                    />
                  </View>
                  <Texto
                    style={styles.cardContentContainerText}
                    text={item.market_type}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 5,
    backgroundColor: style.mainBackgroundColor,
  },
  contentListContainer: {
    gap: 10,
    paddingBottom: 25,
  },
  card: {
    flex: 1,
    width: "95%",

    marginHorizontal: "2.5%",
    gap: 10,
  },
  cardContent: {
    padding: 10,
    gap: 10,
    borderRadius: 10,
    backgroundColor: style.mainBackgroundColor2,
  },
  cardContentContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
  },
  cardContentContainerTitle: {
    borderWidth: 0.4,
    borderColor: style.borderColor,
    padding: 5,
    borderRadius: 5,
    color: style.paragraphColor,
  },
  cardContentContainerText: {
    color: style.paragraphColor,
    padding: 5,
  },
});

export default React.memo(FetchMarketsDataForex);
*/}