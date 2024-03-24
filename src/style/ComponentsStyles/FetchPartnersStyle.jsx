import { StyleSheet } from 'react-native'
import GlobalStyle from '../Global'

const style = GlobalStyle()

const FetchPartnersStyle = StyleSheet.create({
  posterImage: {
    width: "100%",
    resizeMode: "cover",
    borderRadius: 20,
    margin: 0,
    marginBottom: 10,
  },
  posterContainer1: {
    borderRadius: 20,
    backgroundColor: style.mainBackgroundColor2,
    alignItems: "center",
  },
  posterContainer2: {
    width: "100%",
    height: 40,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default FetchPartnersStyle