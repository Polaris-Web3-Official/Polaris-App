import { View, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Texto from "../../../components/Comuns/Text";
import GlobalStyle from "../../../style/Global";
import { ConnectedButton } from "../../../components/Portafolio/ConectButton";

export default function Welcome({title="Tu portafolio crypto", text="El mejor lugar para hacerle un seguimiento intensivo a tus criptomonedas favoritas"}) {
  return (
    <View>
      <ScrollView>
        <View
    
        style={{
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: 20,
        }}>
          <Image
            style={{
              marginLeft: 30,
              width: 400,
              height: 400,
            }}
            source={require("../../../../assets/phone.png")}
          />

          <Texto style={styles.title} text={title} />
          <Texto
            style={styles.description}
            text={text}
          />

          <ConnectedButton
            textStyle={styles.textButton}
            ButtonStyle={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: GlobalStyle().paragraphColor,
  },
  description: {
    fontSize: 16,

    color: GlobalStyle().borderColor,
  },
  button: {
    backgroundColor: GlobalStyle().ButtonColor,
    width: 320,
    padding: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  textButton: {
    color: GlobalStyle().paragraphColor,
    fontSize: 16,
  },
});
