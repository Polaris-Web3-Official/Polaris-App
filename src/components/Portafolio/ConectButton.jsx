import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../Comuns/Text";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";

export const Connected = () => {
  const { isConnected, address } = useWalletConnectModal();
  return [isConnected, address];
};

export const ConnectedButton = ({ ButtonStyle, textStyle }) => {
  const [isConnected, address] = Connected(); // Llamada al componente Connected
  const { provider, open } = useWalletConnectModal();

  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          <TouchableOpacity
            style={{ ...ButtonStyle }}
            onPress={() => provider?.disconnect()}>
            <Texto style={{...textStyle}} text={"Desconectar billetera"} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={{ ...ButtonStyle }} onPress={open}>
            <Texto style={{...textStyle}} text={"Conecte su billetera"} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: "100%",
  },
});
