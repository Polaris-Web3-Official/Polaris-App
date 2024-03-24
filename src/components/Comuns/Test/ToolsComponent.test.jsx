//Herramientas

{/*{import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const CryptoInfoComponent = () => {
  const [coinName, setCoinName] = useState('');
  const [cryptoData, setCryptoData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCryptoData = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}`);
      const coinId = response.data.id;
      const detailedResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      setCryptoData(detailedResponse.data);
      setError(null);
    } catch (error) {
      setError(`Error fetching data from CoinGecko API: ${console.log(error)}`)
      setCryptoData(null);
    }
    setLoading(false); 
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: '100%', height: 700, borderWidth: 5, borderColor: 'red' }}>
        <ActivityIndicator size="small" color="#0000ff"  />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crypto Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter coin name"
        onChangeText={(text) => setCoinName(text)}
      />
      <Button title="Get Info" onPress={fetchCryptoData} />
      {cryptoData && (
        <View style={styles.infoContainer}>
          <Text>Informacion Basica</Text>
          <Text>Name: {cryptoData.name}</Text>
          <Text>Symbol: {cryptoData.symbol}</Text>
          <Text>Current Price: ${cryptoData.market_data.current_price.usd}</Text>
          <Text>Suply total: ${cryptoData.market_data.total_supply}</Text>
          <Text>Suply actual: ${cryptoData.market_data.circulating_supply}</Text>
          <Text>Market Cap: ${cryptoData.market_data.market_cap.usd}</Text>
          <Text>24h Trading Volume: ${cryptoData.market_data.total_volume.usd}</Text>
          <Text>Rank: {cryptoData.market_cap_rank}</Text>
          <Text>Description: {cryptoData.description.en}</Text>
          <Text>Website: {cryptoData.links.homepage[0]}</Text>
          <Text>Twitter: https://x.com/{cryptoData.links.twitter_screen_name}</Text>

          <Text>Analisi de la criptomodena {cryptoData.name}</Text>
          

        </View>
        
      )}

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  infoContainer: {
    width: '95%',
    padding: 20,
    marginHorizontal: 'auto',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'red',
    marginBottom: 10

  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default CryptoInfoComponent;}*/}