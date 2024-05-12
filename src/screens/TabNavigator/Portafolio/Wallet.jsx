import { View } from "react-native-animatable";
import React from "react";
import GlobalStyle from "../../../style/Global";
import { Connected } from "../../../components/Portafolio/ConectButton";
import Welcome from "./Welcome";
import WalletData from "../../../components/Portafolio/Wallet/WalletData";
import Header from "../../../components/Comuns/Header";
//import Comming from "../../../components/Comuns/Comming";

const style = GlobalStyle();

export default function Wallet() {
  const conect = Connected();
  const isConnected = conect[0];
  const address = conect[1];
  return (
    <View style={{
      flex: 1}}>
      <Header name={'Portfolio '} name2="Web3"/>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          
          backgroundColor: style.mainBackgroundColor,
        }}>
        {isConnected ? (
          <View animation={"fadeIn"} style={{flex: 1}}>
            <WalletData />
          </View>
        ) : (
          <View animation={"fadeIn"}>
            <Welcome />
          </View>
        )}
      </View>
    </View>
  );
}
