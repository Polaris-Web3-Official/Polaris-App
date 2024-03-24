//Obtenero los pares de Forex

{/*import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import axios from 'axios';

import GlobalStyle from '../../style/Global';
import Error from '../Comuns/Error';
import Loading from '../Comuns/Loading';
import Texto from '../Comuns/Text';

const style = GlobalStyle();
const screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const API_KEY = '74e943e99edaa6927c1a084b';
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const CurrencyPair = ({ pair, rate}) => {
  return (
    <View style={styles.pairContainer}>
      <Texto style={styles.pairText} text={pair}/>
      <Texto style={styles.rateText} text={rate.toFixed(4)}/>
    </View>
  );
};

function FetchParsForex() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.result === 'success') {
          setData(response.data);
        } else {
          throw new Error('Error al obtener los datos de la API');
        }
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

  useEffect(() => {
    fetchData();
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
          component={fetchData}
          img={require("../../../assets/crypto/btc.png")}
          target={"los pares de divisas"}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.entries(data.conversion_rates).slice(0, 200).sort((a, b) => a[1] - b[1])}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <CurrencyPair pair={`${data.base_code} - ${item[0]}`} rate={item[1]} />
        )}
        maxToRenderPerBatch={1}
        initialNumToRender={1}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.mainBackgroundColor,
    paddingTop: 5,
  },
  pairContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 3,
    borderRadius: 15,
    backgroundColor: style.mainBackgroundColor2,
  },
  pairText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: style.paragraphColor,
  },
  rateText: {
    fontSize: 18,
    color: style.ButtonColor,
  },
});


export default React.memo(FetchParsForex)
*/}