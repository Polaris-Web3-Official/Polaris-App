import { StyleSheet } from 'react-native'
import GlobalStyle from '../Global';

const style = GlobalStyle()

const headerStyles = StyleSheet.create({
	headerContainer: {
		backgroundColor: style.secundaryBackgroundColor,
		borderBottomWidth: 0,
		borderBottomColor: style.borderColor,
	},
  centerComponent1: {
    color: style.ButtonColor,
    marginTop: 0,
    fontSize: 18,
    fontWeight: "600",
  },
  centerComponent2: {
    color: "#fff",
    marginTop: 0,
    fontSize: 18,
    fontWeight: "600",
  },
  menuStyles: {
    marginTop: 22,
    marginLeft: -20,
    alignItems: "center",
  },
  menuContentStyles: {
    backgroundColor: style.mainBackgroundColor,
    borderWidth: 0.4,
    borderColor: style.borderColor,
    borderRadius: 15,
    width: 220,
    padding: 10,
  },
  menuItemContainer: {
    flexDirection: "row", 
    gap: 10,
  },
  menuItemTitle: {
    borderColor: style.borderColor,
    padding: 5,
    borderRadius: 5,
  },
  menuItemTitle2: {
    backgroundColor: style.ButtonColor,
    borderRadius: 10,
    alignItems: "center",
  }
})

export default headerStyles;