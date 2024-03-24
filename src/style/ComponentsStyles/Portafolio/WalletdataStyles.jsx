import GlobalStyle from "../../Global";
import { StyleSheet } from "react-native";

const style = GlobalStyle()

const WalletDataStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 5,
  },
  content1: {
    width: "100%",
    borderRadius: 15,
  },
  content3: {
    width: "80%",
    height: 70,
    borderRadius: 15,
    marginHorizontal: "10%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: style.mainBackgroundColor2,
  },
  balanceContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  balance: {
    fontSize: 35,
    color: style.paragraphColor,
  },
});


export default WalletDataStyle;