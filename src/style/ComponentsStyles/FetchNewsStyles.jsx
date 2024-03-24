import { StyleSheet} from 'react-native'
import GlobalStyle from '../Global'

const style = GlobalStyle()

const fetchNewsStyles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: style.mainBackgroundColor,
  },
  btn: {
    flexDirection: "row",
    width: "95%",
    marginHorizontal: "2.5%",
    marginVertical: 4,
    backgroundColor: style.mainBackgroundColor2,
    borderRadius: 10,
    padding: 5,
  },
  container1: {
    width: "65%",
    paddingLeft: 10,
    paddingTop: 5,
  }
})


export default fetchNewsStyles