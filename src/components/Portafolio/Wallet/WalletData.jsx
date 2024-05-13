import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Connected } from "../ConectButton";
import GlobalStyle from "../../../style/Global";
import Texto from "../../Comuns/Text";
import Balance from "../getBalance";
import formatStr from "../../../utils/FormatStr";
import formatNumber from "../../../utils/FormatNumer";
import WalletDataStyle from "../../../style/ComponentsStyles/Portafolio/WalletdataStyles";
import Comming from "../../Comuns/Comming";

const style = GlobalStyle();

export default function WalletData() {
  const conect = Connected();
  const address = conect[1];

  return (
    <View>
      <View>
        <View style={WalletDataStyle.container}>
          <View style={WalletDataStyle.content1}>
            <View style={WalletDataStyle.balanceContainer}>
              <View>
                <Comming />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}