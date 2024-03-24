import React, { useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Share,
} from "react-native";
import BottonMenuDrawer from "./BottonMenuDrawer";
import GlobalStyle from "../../../style/Global";
import { Icon } from "react-native-elements";
import Texto from "../../../components/Comuns/Text";
import url from "./ImportantUrl";
import * as Animatable from "react-native-animatable";

const style = GlobalStyle();

export default function MenuDrawerNavigation({ navigation }) {
  let copyraigth = "by: () => { Qsoft Development Team }";
  const [showLinks, setShowLinks] = useState(true);

  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: style.mainBackgroundColor,
      }}>
      <View
        style={{
          width: "100%",
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            gap: 20,
            width: "100%",
          }}>
          <Image
            style={{
              width: "95%",
              height: 60,
              borderRadius: 10,
              objectFit: "contain",
            }}
            source={require("../../../../assets/build.png")}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            backgroundColor: style.ButtonColor,
            padding: 5,
            marginHorizontal: 50,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 9,
              color: style.mainBackgroundColor,
            }}>
            {copyraigth}
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={{ gap: 5, marginTop: 10 }}>
          <View>
            <BottonMenuDrawer
              text={"Casa"}
              onPress={() => navigation.navigate("NavigationTab")}
              icon="home"
              type={"ant-design"}
            />
          </View>

          <View>
            <BottonMenuDrawer
              text={"Patrocinadores"}
              onPress={() => navigation.navigate("Sponsors")}
              icon="hearto"
              type={"ant-design"}
            />
          </View>

          <View>
            <BottonMenuDrawer
              text={"Compartir con amigos"}
              onPress={() =>
                Share.share({
                  message:
                    "¡Hola! he estado probando Polaris, una app mobile para estar al pendiente de todo el ecosistema Web3 Hispano. Te invito a echarle un vistazo tambien 🐋 : https://polarisweb3.org",
                  url: "https://polarisweb3.org",
                })
              }
              icon="rocket1"
              type={"ant-design"}
            />
          </View>

          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => setShowLinks(!showLinks)}>
            <View
              style={{
                width: "90%",
                marginHorizontal: "5%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5%",
                flexDirection: "row",
                borderRadius: 10,
                backgroundColor: style.mainBackgroundColor2,
                height: 40,
              }}>
              <Texto
                fontSize={2}
                style={{
                  color: style.ButtonColor,
                }}
                text={!showLinks ? "¿ Te gusta " : "¡ Cuentanos tu "}
              />
              <Texto
                fontSize={2}
                style={{
                  color: style.paragraphColor,
                }}
                text={!showLinks ? "Polaris ?" : "Opinion !"}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Animatable.View
          animation={showLinks ? "fadeInDown" : "fadeInUp"}
          duration={100}
          style={{ gap: 5, marginTop: 20 }}>
          {showLinks &&
            url.map((item, index) => (
              <BottonMenuDrawer
                key={index}
                text={item.text}
                onPress={item.onPress}
                icon={item.name}
                type={item.type}
              />
            ))}
        </Animatable.View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: 20,
          gap: 40,
          marginTop: 20,
          marginBottom: 50,
        }}>
        <View>
          <Icon
            name="discord"
            type="fontisto"
            color={style.ButtonColor}
            size={40}
            onPress={() => Linking.openURL("https://discord.gg/kTJkWawehY")}
          />
        </View>

        <View style={{ marginTop: -3 }}>
          <Icon
            name="twitter-square"
            type="font-awesome"
            color={style.ButtonColor}
            size={45}
            onPress={() => Linking.openURL("https://x.com/@PolarisWeb3")}
          />
        </View>

        <View>
          <Icon
            name="linkedin-square"
            type="ant-design"
            color={style.ButtonColor}
            size={40}
            onPress={() =>
              Linking.openURL("https://cu.linkedin.com/company/qsoft-tech")
            }
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
