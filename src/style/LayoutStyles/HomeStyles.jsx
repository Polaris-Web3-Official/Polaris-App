import { StyleSheet } from "react-native";
import GlobalStyle from "../Global";

const style = GlobalStyle();

const HomeStyles = StyleSheet.create({
  /*Padre que contiene a los demas contenedores*/
  father: {
    backgroundColor: style.mainBackgroundColor,
    flex: 1,
  },

  /*Hijo que contiene a los demas contenedores*/
  container: {
    gap: 10,
    paddingBottom: 10,
  },

  /*Contenedor que contiene a la promocion principal*/
  containerPromotions: {
    width: "95%",
    maxHeight: 200,
    marginHorizontal: "2.5%",
    marginTop: 10,
    backgroundColor: style.mainBackgroundColor2,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  containerPromotionsChild1: {
    width: "65%",
    height: "100%",
    gap: 10,
  },
  containerPromotionsChild2: {
    width: "30%",
    height: "100%",
    gap: 10,
  },

  /*Contenedor que contiene a los iconos de acceso rapido*/
  containerRapidIcons: {
    width: "95%",
    height: 50,
    marginHorizontal: "2.5%",
    gap: 5,
  },

  /*Contenedor que contiene los precios rapidos {BTC} {Builders} {ETH}*/
  containerRapidPrice: {
    width: "95%",
    height: 90,
    marginHorizontal: "2.5%",
    gap: 10,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  containerContentRapidPrice: {
    width: "30.33%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: style.mainBackgroundColor2,
    borderRadius: 15,
  },

  /*Contenedor que tiene dentro al bento {tendencia} + {publicidad}*/
  containerBento: {
    width: "95%",
    height: 240,
    marginHorizontal: "2.5%",
    gap: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  containerBentoSection1: {
    width: "48%",
    height: "100%",
    borderWidth: 0.4,
    borderColor: style.borderColor,
    borderRadius: 10,
  },
  containerBentoSection2: {
    width: "48%",
    height: "100%",
    gap: 10,
  },
  containerBentoSection2Content1: {
    width: "100%",
    height: "68%",
    backgroundColor: style.mainBackgroundColor2,
    borderRadius: 10,
  },
  containerBentoSection2Content2: {
    width: "100%",
    height: "28%",
    borderWidth: 0.4,
    borderColor: style.borderColor,
    borderRadius: 10,
  },

  /*Contendor que tiene a las monedas ganadoras y las monedas perdedoras*/
  containerTopGainersLossers: {
    width: "95%",
    height: 300,
    marginHorizontal: "2.5%",
  },

  /*To the Moon*/
  containerToTheMoonFack: {
    width: "100%",
    height: 100,
    marginHorizontal: "2.5%",
    borderColor: style.borderColor,
    borderWidth: 0.4,
    borderRadius: 10,
  },
});

export default HomeStyles;
