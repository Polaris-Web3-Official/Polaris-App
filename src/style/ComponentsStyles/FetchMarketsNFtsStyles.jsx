import { StyleSheet } from "react-native";
import GlobalStyle from "../Global";

const style = GlobalStyle();

const fetchMarketNftsStyles = StyleSheet.create({
  container1: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  container2: {
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    backgroundColor: style.ButtonColor,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container3: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    gap: 5,
  },
  container4: {
    paddingLeft: 10,
    flexWrap: "nowrap",
    overflow: "hidden",
  },
  container5: {
    paddingLeft: 10,
    flexDirection: 'row',
    flexWrap: "nowrap",
    overflow: "hidden",
  }
});

export default fetchMarketNftsStyles;
