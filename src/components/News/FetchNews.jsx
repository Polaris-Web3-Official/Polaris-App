import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import GlobalStyle from "../../style/Global";
import Loading from "../Comuns/Loading";
import formatStr from "../../utils/FormatStr";
import Error from "../Comuns/Error";
import Texto from "../Comuns/Text";
import fetchNewsStyles from "../../style/ComponentsStyles/FetchNewsStyles";

const style = GlobalStyle();
const apikey = "aeda2c8f01eQF0LJ3ESCZD303DZ4443f9ac4b40918bade78";
const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN&apikey=${apikey}`;

function convertirFecha(fecha) {
  var año = fecha.substring(0, 4);
  var mes = fecha.substring(4, 6);
  var dia = fecha.substring(6, 8);
  return dia + " | " + mes + " | " + año;
}

function FetchNews() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (data.Information === "Thank you for using Alpha Vantage! Our standard API rate limit is 25 requests per day. Please subscribe to any of the premium plans at https://www.alphavantage.co/premium/ to instantly remove all daily rate limits.") {
        throw new Error("Network response was not ok");
      }
      setArticles(data.feed);
    } catch (error) {
      console.log(error);
      setError(error.message);
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
        style={fetchNewsStyles.loading}>
        <Loading width={100} height={100}/>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={fetchNewsStyles.loading}>
        <Error imgWidth={100} imgHeight={100} component={fetchData} />
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{
        paddingBottom: 2,
      }}
      refreshing={refreshing}
      onRefresh={async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
      }}
      data={articles}
      keyExtractor={(item) => item.title}
      renderItem={({ item, index }) => {
        index++
        return (
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <View
              key={index}
              style={fetchNewsStyles.btn}>
              <View
                style={fetchNewsStyles.container1}>
                <View>
                  <Texto
                  fontSize={1.8}
                    style={{color: style.ButtonColor}}
                    text={item.authors}
                  />
                </View>

                <View>
                  <Texto
                  fontSize={1.8}
                    style={{fontWeight: "bold",color: style.paragraphColor}}
                    text={formatStr(item.title, 50)}
                  />
                </View>

                <View>
                  <Texto
                    style={{ fontSize: 14,color: style.borderColor}}
                    text={formatStr(item.summary, 30)}
                  />
                </View>

                <View>
                  <Texto
                    style={{color: style.ButtonColor}}
                    text={convertirFecha(item.time_published)}
                  />
                </View>
              </View>

              <View
                style={{width: "35%"}}>
                <Image
                  source={{ uri: item.banner_image }}
                  style={{ width: "100%", height: 100, borderRadius: 10 }} // Adjust aspect ratio as needed
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

export default React.memo(FetchNews);
