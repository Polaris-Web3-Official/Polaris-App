import { StyleSheet } from 'react-native'
import GlobalStyle from '../Global';

const style = GlobalStyle()

const FetchWinnersCoinsStyle = StyleSheet.create({
    cards: {
      width: "98%",
      marginHorizontal: "1%",
      height: 45,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: 0.4,
      borderColor: style.borderColor,
      paddingBottom: 15,
      paddingTop: 10,
    },
    cardImg: {
      width: 29,
      height: 29,
      borderRadius: 50,
      margin: "auto",
    },
    cardCryptoSymbol: {
      alignSelf: "flex-end",
      justifyContent: "center",
      marginTop: -5,
      color: style.paragraphColor,
    },
    cardCryptoPrice: {
      marginLeft: 5,
      textAlign: "center",
      fontSize: 16,
      color: style.paragraphColor,
    },
  });

export default FetchWinnersCoinsStyle