//Componente del Rastreador

{/*import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import GlobalStyle from "../../style/Global";
import { ScrollView } from "react-native";
import formatStr from '../../utils/FormatStr'

const style = GlobalStyle();

export default function Rastreador() {
  const [title, setTitle] = useState(
    "Wouf Wouf"
  );
  const [error, setError] = useState(null)
  const [wallet, setWallet] = useState("");
  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
        }}>
        <View
          style={{
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}>
          <View
            style={{
              padding: 15,
              borderWidth: 0.4,
              borderColor: style.borderColor,

              borderRadius: 10,
              width: "95%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}>
            <Text
              style={{
                color: style.paragraphColor,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}>
              {formatStr(title, 23)}
              {
            </Text>
            <Image
              style={{
                width: 20,
                height: 13,
              }}
              source={require("../../../assets/dog.gif")}
            />
          </View>
          <View
            style={{
              width: "100%",
              borderWidth: 0.4,
              borderColor: style.borderColor,
              height: 610,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View
              style={{
                width: "100%",
                borderWidth: 0.4,

                borderTopWidth: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,

                borderBottomWidth: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,

                borderColor: style.paragraphColor,
                borderRadius: 10,
                height: "88%",
                marginBottom: "4%",
                padding: 10,
              }}>
              <ScrollView>
                <Text
                  style={{
                    color: style.paragraphColor
                  }}
                >Texto de priueba para el analisis + la billetera que fue rastreada: {wallet}</Text>
              </ScrollView>
            </View>

            <View
              style={{
                width: "95%",
                borderRadius: 10,
                height: "6%",
                flexDirection: "row",
              }}>
              <TextInput
                style={{
                  height: "100%",
                  borderColor: style.paragraphColor,
                  backgroundColor: style.paragraphColor,
                  borderRadius: 10,
                  marginRight: 10,
                  width: "75%",
                  padding: 10,
                }}
                placeholder="0x000000000000000000000000"
                onChangeText={(text) => setWallet(text)}
                value={wallet}
              />
              <TouchableOpacity
                style={{
                  width: "20%",
                  borderRadius: 10,
                  borderWidth: 0.4,
                  borderColor: style.borderColor,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                    setTitle(`Rastreando: ${wallet}`)
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: style.paragraphColor,
                  }}>
                  Enviar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
*/}