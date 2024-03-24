import { StyleSheet } from "react-native";

const alertPortafolioStyle = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    zIndex: 10,
    borderRadius: 10,
  },
  box: {
    height: "auto",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    alignItems: "flex-start",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default alertPortafolioStyle;