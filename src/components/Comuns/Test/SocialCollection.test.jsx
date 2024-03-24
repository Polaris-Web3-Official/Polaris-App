//Colecciones populares sector hispano + analisis

{/*import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import GlobalStyle from "../../../style/Global";
import Texto from "../../Comuns/Text";
import { Icon } from "react-native-elements";

const style = GlobalStyle();

function SocialCollection({
  profile = {
    img: "https://chaindocs.org/wp-content/uploads/2023/12/cropped-logo-removebg-preview-1.png",
    pricePredict: "0.0",
    coinPrice: "ETH",
    name: "ChainDocs",
    marketPlace: "",
    SocialNetWorks: {
      n1: {
        name: "twitter",
        type: "ant-design",
        color: style.ButtonColor,
        followers: "4000",
        url: "https://example.com",
      },
      n2: {
        name: "discord",
        type: "fontisto",
        color: "#4752c4",
        followers: "1229",
        url: "https://example.com",
      },
      n3: {
        name: "instagram",
        type: "ant-design",
        color: "#b33793",
        followers: "1000",
        url: "https://example.com",
      },
      n4: {
        name: "facebook-square",
        type: "ant-design",
        color: style.paragraphColor,
        followers: "2300",
        url: "https://example.com",
      },
      n5: {
        name: "linkedin-square",
        type: "ant-design",
        color: style.ButtonColor,
        followers: "1098",
        url: "https://example.com",
      },
    },
  },
  description = "Hola",
}) {
  const [active, setActive] = useState(false);
  const heightAnim = new Animated.Value(150);

  const handlePress = () => {
    const toValue = active ? 150 : Dimensions.get('window').height - 230;
    Animated.timing(heightAnim, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setActive(!active);
    });
  };

  return (
    <View style={{ padding: 10, gap: 10 }}>
      <View style={styles.card}>
        <ScrollView horizontal style={{ height: 60 }}>
          <View style={styles.cardPart1}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Image
                style={styles.cardPart1Img}
                source={{
                  uri: profile.img,
                }}
              />
              <View>
                <Texto style={styles.generalText} text={profile.name} />
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <Texto
                    style={styles.generalText}
                    text={"$ " + profile.pricePredict}
                  />
                  <Texto
                    style={{
                      color: style.ButtonColor,
                      fontSize: 18,
                      marginTop: -2,
                    }}
                    text={profile.coinPrice}
                  />
                </View>
              </View>
            </View>

            <View>
              <Icon
                name={
                  profile.SocialNetWorks.n1.name === undefined
                    ? ""
                    : profile.SocialNetWorks.n1.name
                }
                type={
                  profile.SocialNetWorks.n1.type === undefined
                    ? ""
                    : profile.SocialNetWorks.n1.type
                }
                color={
                  profile.SocialNetWorks.n1.color === undefined
                    ? ""
                    : profile.SocialNetWorks.n1.color
                }
              />
              <Texto
                style={styles.generalText}
                text={
                  profile.SocialNetWorks.n1.followers === undefined
                    ? ""
                    : profile.SocialNetWorks.n1.followers
                }
              />
            </View>

            <View>
              <Icon
                name={
                  profile.SocialNetWorks.n2.name === undefined
                    ? ""
                    : profile.SocialNetWorks.n2.name
                }
                type={
                  profile.SocialNetWorks.n2.type === undefined
                    ? ""
                    : profile.SocialNetWorks.n2.type
                }
                color={
                  profile.SocialNetWorks.n2.color === undefined
                    ? ""
                    : profile.SocialNetWorks.n2.color
                }
              />
              <Texto
                style={styles.generalText}
                text={
                  profile.SocialNetWorks.n2.followers === undefined
                    ? ""
                    : profile.SocialNetWorks.n2.followers
                }
              />
            </View>

            <View>
              <Icon
                name={
                  profile.SocialNetWorks.n3.name === undefined
                    ? ""
                    : profile.SocialNetWorks.n3.name
                }
                type={
                  profile.SocialNetWorks.n3.type === undefined
                    ? ""
                    : profile.SocialNetWorks.n3.type
                }
                color={
                  profile.SocialNetWorks.n3.color === undefined
                    ? ""
                    : profile.SocialNetWorks.n3.color
                }
              />
              <Texto
                style={styles.generalText}
                text={
                  profile.SocialNetWorks.n3.followers === undefined
                    ? ""
                    : profile.SocialNetWorks.n3.followers
                }
              />
            </View>

            <View>
              <Icon
                name={
                  profile.SocialNetWorks.n4.name === undefined
                    ? ""
                    : profile.SocialNetWorks.n4.name
                }
                type={
                  profile.SocialNetWorks.n4.type === undefined
                    ? ""
                    : profile.SocialNetWorks.n4.type
                }
                color={
                  profile.SocialNetWorks.n4.color === undefined
                    ? ""
                    : profile.SocialNetWorks.n4.color
                }
              />
              <Texto
                style={styles.generalText}
                text={
                  profile.SocialNetWorks.n4.followers === undefined
                    ? ""
                    : profile.SocialNetWorks.n4.followers
                }
              />
            </View>

            <View>
              <Icon
                name={
                  profile.SocialNetWorks.n5.name === undefined
                    ? ""
                    : profile.SocialNetWorks.n5.name
                }
                type={
                  profile.SocialNetWorks.n5.type === undefined
                    ? ""
                    : profile.SocialNetWorks.n5.type
                }
                color={
                  profile.SocialNetWorks.n5.color === undefined
                    ? ""
                    : profile.SocialNetWorks.n5.color
                }
              />
              <Texto
                style={styles.generalText}
                text={
                  profile.SocialNetWorks.n5.followers === undefined
                    ? ""
                    : profile.SocialNetWorks.n5.followers
                }
              />
            </View>
          </View>
        </ScrollView>

        <Animated.View
          style={{
            height: heightAnim,
            width: "100%",
            padding: 10,
            justifyContent: "center",
            gap: 5,
          }}>
          <View style={styles.cardPart2Content}>
            <ScrollView>
              <View style={{ padding: 5, width: '100%'}}>
                <Texto
                  style={styles.generalText}
                  text={"Analisis: " + description}
                />
              </View>
            </ScrollView>
          </View>

          <View>
            <TouchableOpacity onPress={handlePress}>
              <Texto style={styles.btn} text={active ? "Ocultar" : "Ver Mas"} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('screen').width - 20,
    borderWidth: 0.4,
    borderColor: style.ButtonColor,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardPart1: {
    height: 60,
    width: 440,
    gap: 25,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardPart1Img: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  generalText: {
    color: style.paragraphColor,
  },
  cardPart2Content: {
    width: "100%",
    height: "90%",
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: style.borderColor,
    padding: 5,
  },
  btn: {
    padding: 5,
    backgroundColor: style.ButtonColor,
    textAlign: "center",
    borderRadius: 10,
    color: style.paragraphColor,
    marginBottom: 10,
  },
});


export default React.memo(SocialCollection)*/}