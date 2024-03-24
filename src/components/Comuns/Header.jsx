//import { View, Text } from "react-native";
import React, { useState } from "react";
import { Header, Icon } from "react-native-elements";
import { Menu } from "react-native-paper";
import GlobalStyle from "../../style/Global.js";
import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Texto from "./Text.jsx";

import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import formatStr from "../../utils/FormatStr.jsx";
import headerStyles from "../../style/ComponentsStyles/HeaderStyles.jsx";

const style = GlobalStyle();

function Headers({
  navigation,
  name,
  name2 = "",
  image = require("../../../assets/Logotype/logotypeOnlyBackgroundNoneHD.png"),
  iconMenu = "menu",
  typeIconMenu = "",
}) {
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const { isConnected, address, open, provider } = useWalletConnectModal();

  return (
    <Header
      containerStyle={headerStyles.headerContainer}
      leftComponent={{
        icon: iconMenu,
        type: typeIconMenu,
        color: "#fff",
        onPress: navigation,
      }}
      centerComponent={{
        text: () => {
          return (
            <View style={{ flexDirection: "row" }}>
              <Texto text={name} style={headerStyles.centerComponent1} />

              <Texto text={name2} style={headerStyles.centerComponent2} />
            </View>
          );
        },
      }}
      rightComponent={
        <>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            style={headerStyles.menuStyles}
            contentStyle={headerStyles.menuContentStyles}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <Image
                  style={{ width: 25, height: 25, borderRadius: 50 }}
                  source={image}
                />
              </TouchableOpacity>
            }>
            <Menu.Item
              onPress={() => {
                if (isConnected) {
                  Linking.openURL("https://example.com");
                }
              }}
              title={
                isConnected ? (
                  <View style={headerStyles.menuItemContainer}>
                    <Texto style={styles.conect} text={"Documentacion"} />
                    <Icon
                      name="Safety"
                      type="ant-design"
                      size={20}
                      color={style.testColor2}
                    />
                  </View>
                ) : (
                  <View style={headerStyles.menuItemContainer}>
                    <Texto style={styles.conect} text={"Documentacion"} />
                    <Icon
                      name="Safety"
                      type="ant-design"
                      size={20}
                      color={style.testColor}
                    />
                  </View>
                )
              }
            />

            <Menu.Item
              onPress={() => {
                if (isConnected) {
                  Linking.openURL("https://example.com");
                }
              }}
              title={
                isConnected ? (
                  <View style={headerStyles.menuItemContainer}>
                    <Texto style={styles.conect} text={"Manifiesto Droids"} />
                    <Icon
                      name="clouddownloado"
                      type="ant-design"
                      size={20}
                      color={style.testColor2}
                    />
                  </View>
                ) : (
                  <View style={headerStyles.menuItemContainer}>
                    <Texto style={styles.conect} text={"Manifiesto Droids"} />
                    <Icon
                      name="clouddownloado"
                      type="ant-design"
                      size={20}
                      color={style.testColor}
                    />
                  </View>
                )
              }
            />

            <Menu.Item
              onPress={() => {
                if (isConnected) {
                  Linking.openURL("https://example.com");
                }
              }}
              title={
                isConnected ? (
                  <View style={headerStyles.menuItemContainer}>
                    <Texto style={styles.conect} text={"Lista Blanca Droids"} />
                    <Icon
                      name="checkcircleo"
                      type="ant-design"
                      size={17}
                      color={style.testColor2}
                    />
                  </View>
                ) : (
                  <View style={headerStyles.menuItemContainer}>
                    <Texto style={styles.conect} text={"Lista Blanca Droids"} />
                    <Icon
                      name="closecircleo"
                      type="ant-design"
                      size={18}
                      color={style.testColor}
                    />
                  </View>
                )
              }
            />

            <Menu.Item
              titleStyle={headerStyles.menuItemTitle}
              style={{
                alignItems: "center",
              }}
              title={
                isConnected ? (
                  <Texto style={styles.conect} text={formatStr(address, 10)} />
                ) : (
                  <Texto style={styles.conect} text={" 0x000000"} />
                )
              }
            />

            <Menu.Item
              style={headerStyles.menuItemTitle2}
              onPress={() => {
                if (isConnected) {
                  provider?.disconnect();
                } else {
                  open();
                }
              }}
              title={
                <Texto
                  style={styles.conect}
                  text={isConnected ? "Desconectar" : "Canectar Billetera"}
                />
              }
            />
          </Menu>
        </>
      }
    />
  );
}

export default React.memo(Headers);

const styles = StyleSheet.create({
  conect: {
    color: style.paragraphColor,
    fontSize: 15,
  },
});
