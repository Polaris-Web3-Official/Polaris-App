import { Dimensions, StyleSheet } from "react-native";
import GlobalStyle from "../Global";

const style = GlobalStyle();

const trendignCoinStyle = StyleSheet.create({
  loading: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 10,
    gap: 10,
  },
  containerContent1: {
    alignItems: "center",
    gap: 10,
  },
  containerContent2: {
    flexDirection: "row",
    gap: 10,
  },
  containerContent3: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  card: {
    backgroundColor: style.mainBackgroundColor2,
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
    gap: 2,
    alignItems: "center",
    width: 90,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});

export default trendignCoinStyle;
