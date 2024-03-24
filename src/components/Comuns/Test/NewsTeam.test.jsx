//Noticias del equipo

{/*import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Booton from "../Comuns/Booton";
import GlobalStyle from "../../style/Global";
import { LinearGradient } from "expo-linear-gradient";
import Texto from "../Comuns/Text";
import formatStr from "../../utils/FormatStr";
import { Icon } from "react-native-elements";
import { useState } from "react";
import Liked from "../Comuns/Liked";

const styles = GlobalStyle();

//testing const
const urlTest = "https://example.com";
const titleTest =
  "Presentamos a nuestra propia Inteligencia Artificial WOW WTF XD XDXDXDXXDXDXDXDXDXDXD";
const descriptionTest =
  "Despues de mas de 2 anacos de espera, el equipo de creacion y desarrollo de software Qsoft, presenta a Poli, una inteligencia artificial especializada en el mundo crypto y con la increible capacidad de ayudarte a la hora de realizar investigaciones sobre colecciones NFTs y robos de Dinero en grandes cantidades";
const headline = "Qsoft Development Team";
const time = "Hace 24 minutos";

function NewsTeam() {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
      <ScrollView>
        <TouchableOpacity onPress={() => Linking.openURL(urlTest)}>
          <View style={style.container}>
            <Image
              style={style.img}
              source={require("../../../assets/NewsImageExample.png")}
            />
            <LinearGradient
              style={style.containerText}
              colors={[styles.ButtonColor, "rgba(245,245,245,0)"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 1, y: 0 }}>
              <Texto text={formatStr(titleTest, 60)} style={style.titleNew} />
              <Texto
                text={formatStr(descriptionTest, 120)}
                style={style.descriptionNew}
              />
              <View style={{ flexDirection: "row", gap: 40 }}>
                <View>
                  <Texto text={headline} style={style.headline} />
                  <Texto text={time} style={style.time} />
                </View>

                <View style={{ flexDirection: "row", marginTop: 25, gap: 40 }}>
                  <Liked 
                    name={["like1", "like2"]} 
                    onPress={() => {
                      return null //Logica para enviar los datos a la database
                    }} 
                  />
                  <Liked 
                    name={["dislike1", "dislike2"]} 
                    onPress={() => {
                      return null //Logica para enviar los datos a la database
                    }} 
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default React.memo(NewsTeam)

const style = StyleSheet.create({
  container: {
    width: "95%",
    height: 400,
    marginHorizontal: "2.5%",
    borderWidth: 1,
    borderColor: styles.borderColor,
    borderRadius: 15,
    marginTop: 10,
    overflow: "hidden",
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  containerText: {
    marginTop: "-25%",
    width: "100%",
    height: "70%",
    bottom: 0,
    padding: 5,
    position: "absolute",
  },
  titleNew: {
    color: styles.paragraphColor,
    fontSize: 30,
    marginTop: 30,
    fontWeight: "700",
  },
  descriptionNew: {
    color: styles.paragraphColor,
    marginTop: 5,
    fontSize: 16,
  },
  headline: {
    marginTop: 20,
    color: styles.paragraphColor,
  },
  time: {
    color: styles.paragraphColor,
  },
});
*/}