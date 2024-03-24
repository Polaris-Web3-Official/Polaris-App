import {
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import Texto from "../Comuns/Text";
import GlobalStyle from "../../style/Global";
import { LinearGradient } from "expo-linear-gradient";
import fetchMarketNftsStyles from "../../style/ComponentsStyles/FetchMarketsNFtsStyles";

import formatMarketCap from "../../utils/FormatMarketCap";
import formatStr from "../../utils/FormatStr";

const style = GlobalStyle();

const fetchData = () => {
  return fetch("https://polarisapp.tech/api/polaris/magic_eden")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};

const Item = ({ item }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const animatedHeight = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isDetailsVisible ? 140 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isDetailsVisible]);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <View style={{ width: "50%", padding: 10 }}>
      <TouchableOpacity onPress={() => toggleDetails()}>
        <View
          style={{backgroundColor: style.mainBackgroundColor2, borderRadius: 10,}}>
          <View
            style={fetchMarketNftsStyles.container1}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: item.image
                  ? item.image
                  : "../../../assets/NewsImageExample.png",
              }}
            />
          </View>
          <View
            style={fetchMarketNftsStyles.container2}>
            <Texto
              fontSize={1.8}
              style={{ color: style.paragraphColor }}
              text={isDetailsVisible ? "Ver menos detalles" : "Ver mas detalles"}
            />
          </View>
        </View>
        {isDetailsVisible && (
          <Animated.View
            style={{
              height: animatedHeight,
              width: "100%",
              overflow: "hidden",
              position: "absolute",
            
            }}>
            <LinearGradient
              colors={[style.ButtonColor, "transparent"]} // ajusta los colores según tus necesidades
              style={fetchMarketNftsStyles.container3}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 0.0, y: 0.0 }} // gradiente de abajo hacia arriba
            >
              <View
                style={fetchMarketNftsStyles.container4}>
                <Texto style={{color: style.paragraphColor}} fontSize={1.8} text={formatStr(item.name, 20)} />
              </View>

              <View
                style={fetchMarketNftsStyles.container5}>
                <Texto
                  fontSize={1.5}
                  style={{ color: style.paragraphColor }}
                  text={`Volumen total:  `}
                />
                <Texto
                  fontSize={1.5}
                  style={{ color: style.paragraphColor }}
                  text={`${formatMarketCap(
                    formatStr(item.volumeAll, 50)
                  )}`}
                />
              </View>
            </LinearGradient>
          </Animated.View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const MemoItem = React.memo(Item);

const DataList = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const renderItem = ({ item }) => <MemoItem item={item} />;
  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
      }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.description}
      numColumns={2}
      key={(item) => item.description}
    />
  );
};

const FetchMarketNfts = () => {
  return <DataList />;
};

export default FetchMarketNfts;
