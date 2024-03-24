import { StyleSheet } from "react-native";
import GlobalStyle from "../Global";

const style = GlobalStyle();

const ProductsStyles = StyleSheet.create({
  container1: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: style.mainBackgroundColor2,
  },
  container2: {
    zIndex: 10,
    backgroundColor: style.mainBackgroundColor,
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    width: "95%",
    marginHorizontal: "2.5%",
    height: 180,
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: style.mainBackgroundColor2,
  },
  cardContent1: {
    backgroundColor: style.mainBackgroundColor2,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 25,
  },
  cardContent2: {
    width: "50%",
    backgroundColor: style.mainBackgroundColor,
    position: "relative",
  },
  img: {
    width: 150,
    height: 150,
  },
  description: {
    color: style.paragraphColor,
    textAlign: "center",
  },
  price: {
    color: style.testColor2,
    fontSize: 12,
    marginTop: -5,
    marginVertical: 5,
  },
  descuent: {
    color: style.borderColor,
    fontSize: 14,
  },
  btn: {
    padding: 5,
    backgroundColor: style.ButtonColor,
    borderRadius: 5,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
});

export default ProductsStyles;
