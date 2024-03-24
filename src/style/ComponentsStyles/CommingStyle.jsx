import { StyleSheet } from "react-native";
import GlobalStyle from "../Global";

const style = GlobalStyle()

const commingStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  img: {
    width: 200,
    height: 200,
    marginLeft: -10,
  },
  text: {
    color: style.paragraphColor,
    marginTop: -40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: style.mainBackgroundColor2
  }
});


export default commingStyles;