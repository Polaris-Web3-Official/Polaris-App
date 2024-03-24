import { StyleSheet } from "react-native";
import GlobalStyle from "./Global";

const style = GlobalStyle();

const CardsCoinsMarket = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  cards: {
    width: "100%",
    borderRadius: 15,
    height: 50,
    marginTop: 5,
    padding: 5,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderColor: style.borderColor,
  },
  cardsContainer1: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-evenly",
    height: "95%",
  },
  cardImg: {
    width: 30,
    height: 30,
    borderRadius: 50,
    margin: "auto",
  },
  cardContainerTextCryptoName: {
    height: "50%",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardCryptoSymbol: {
    alignSelf: "flex-end",
    justifyContent: "center",
    marginTop: -5,
    color: style.paragraphColor,
  },
  cardContainerCryptoPrice: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainerLastUpdate: {
    width: "100%",
    height: "50%",
    alignItems: "center",
  },
  cardContainerMarketRanking: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  placeHolder: {
    width: "100%",
    height: 35,
    borderBottomWidth: 0.4,
    borderColor: style.ButtonColor,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    textAlign: "center",
    color: style.paragraphColor,
  },
  placeHolderContainer: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function CardsStyleCoinsMarket() {
  return CardsCoinsMarket;
}
