import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import axios from "axios";
import GlobalStyle from "../../../../style/Global";
import Texto from "../../../Comuns/Text";
import formatStr from "../../../../utils/FormatStr";
import Loading from "../../../Comuns/Loading";
import { Connected } from "../../ConectButton";

const style = GlobalStyle();

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const conect = Connected();
  const address = conect[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=9999999999&sort=desc&page=1&offset=200&apikey=8MZWQIUQNPQET9RRTZRFZC52NDTEPP2S7K`
        );
        const transactionsWithEthValue = response.data.result.map(
          (transaction) => ({
            ...transaction,
            value: convertGweiToEth(transaction.value),
            timeStamp: convertUnixTimestampToDateTime(transaction.timeStamp),
          })
        );
        setTransactions(transactionsWithEthValue);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const convertGweiToEth = (gwei) => {
    return gwei / 10 ** 18; // 1 Ether = 10^9 Gwei
  };

  const convertUnixTimestampToDateTime = (timestamp) => {
    const dateTime = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return dateTime.toLocaleString(); // Convert to readable date time format
  };

  const renderItem = ({ item, index }) => {
    index + 1;
    return (
      <View style={styles.card}>
        <Texto
          style={{ color: style.borderColor }}
          text={`Hash: ${formatStr(item.hash, 24)}`}
        />
        <Texto
          style={{ color: style.borderColor }}
          text={`Desde: ${formatStr(item.from, 24)}`}
        />
        <Texto
          style={{ color: style.borderColor }}
          text={`Para: ${formatStr(item.to, 24)}`}
        />

        <View>
          <ScrollView horizontal>
            <View style={{ flexDirection: "row", gap: 15 }}>
              <Texto
                style={{ color: style.ButtonColor }}
                text={`Cantidad (ETH): ${formatStr(item.value, 10)}`}
              />
              <Texto
                style={{ color: style.paragraphColor }}
                text={`Fecha: ${item.timeStamp}`}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };

  if (transactions.length === 0) {
    return (
      <View style={{alignItems: "center"}}>
        <Image
          style={{
            width: 200,
            height: 200,
            marginTop: 50,
          }}
          source={require("../../../../../assets/working.gif")}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}>
      {loading ? (
        <View style={{ marginTop: -20 }}>
          <Loading />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{
            gap: 10,
          }}
          showsVerticalScrollIndicator={false}
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          maxToRenderPerBatch={1}
          initialNumToRender={1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: style.mainBackgroundColor2,
    gap: 3,
    borderRadius: 15,
    padding: 10,
    width: Dimensions.get("screen").width - 35,
  },
  text: {
    color: style.paragraphColor,
  },
});

export default TransactionHistory;
