import * as React from "react";
import {
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalStyle from "../style/Global";
import Booton from "../components/Comuns/Booton";
import Texto from "../components/Comuns/Text";
import IconText from "../components/Comuns/IconText";
import FetchCoin from "../components/FetchData/FetchCoin";
import { Icon } from "react-native-elements";
import ImageSlider from "../components/Comuns/ImageSlider";
import TrendingCrypto from "../components/FetchData/TrendingCoin";
import NavigationTopGainersLosers from "../navigation/NavigationTopBooton/NavigationTopGainersLosers";
import HomeStyles from "../style/LayoutStyles/HomeStyles";

const style = GlobalStyle();

const AutomaticScroll = ({ children }) => {
  const scrollViewRef = React.useRef(null);

  const scrollAutomático = () => {
    const scrollWidth = scrollViewRef.current?.scrollWidth ?? 0;
    const contentWidth = scrollViewRef.current?.contentSize?.width ?? 0;
    const newPosition = Math.max(0, scrollWidth - contentWidth);
    scrollViewRef.current?.scrollTo({ x: newPosition, animated: true });
  };

  React.useEffect(() => {
    const intervalId = setInterval(scrollAutomático, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 10 }}>
        {children}
      </ScrollView>
    </View>
  );
};

export default function HomeLayout({ navigation }) {
  return (
    <View style={HomeStyles.father}>
      <ScrollView>
        <View style={HomeStyles.container}>
          <View style={HomeStyles.containerPromotions}>
            <View style={HomeStyles.containerPromotionsChild1}>
              <View>
                <Texto
                  style={{ color: style.paragraphColor }}
                  text={"Join the best Web3 development community 🚧"}
                />
                <Texto
                  fontSize={1.4}
                  style={{ color: style.borderColor }}
                  text={
                    "Discover all our utilities by joining the Discord community or on our Twitter feed"
                  }
                />
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Booton
                  href="https://discord.gg/kTJkWawehY"
                  text="Discord"
                  width={"47%"}
                  height={30}
                  padding={0}
                  borderRadius={10}
                />
                <Booton
                  href="https://twitter.com/PolarisWeb3"
                  text="Twitter"
                  width={"47%"}
                  height={30}
                  padding={0}
                  borderRadius={10}
                />
              </View>
            </View>

            <View style={HomeStyles.containerPromotionsChild2}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("../../assets/trophey.png")}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL("https://discord.gg/kTJkWawehY")
                  }>
                  <Texto
                    fontSize={1.8}
                    style={{ color: style.ButtonColor, textAlign: "center" }}
                    text={"Get Rewards >"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={HomeStyles.containerRapidIcons}>
            <AutomaticScroll>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    justifyContent: "space-evenly",
                  }}>
                  <IconText
                    name={"shoppingcart"}
                    text={"Products"}
                    onPress={() => navigation.navigate("Productos")}
                  />
                  <IconText
                    name={"customerservice"}
                    text={"Services"}
                    onPress={() => navigation.navigate("Servicios")}
                  />
                  <IconText
                    name={"lock1"}
                    text={"Materials"}
                    onPress={() => navigation.navigate("Materiales")}
                  />
                  <IconText
                    name={"lock1"}
                    text={"Masters"}
                    onPress={() => navigation.navigate("Cursos")}
                  />
                  <IconText
                    name={"lock1"}
                    text={"Works"}
                    onPress={() => navigation.navigate("Trabajos")}
                  />
                  <IconText
                    name={"lock1"}
                    text={"Community"}
                    onPress={() => navigation.navigate("Comunidad")}
                  />
                  <IconText
                    name={"lock1"}
                    text={"P2P Market"}
                    onPress={() => navigation.navigate("Mercado")}
                  />
                </View>
              </View>
            </AutomaticScroll>
          </View>

          <View style={HomeStyles.containerRapidPrice}>
            <View style={HomeStyles.containerContentRapidPrice}>
              <FetchCoin target="bitcoin" />
            </View>

            <View style={HomeStyles.containerContentRapidPrice}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Texto
                  fontSize={1.9}
                  style={{ color: style.paragraphColor }}
                  text={"POLI ~ PASS"}
                />
                <Icon
                  name="rocket1"
                  type="ant-design"
                  color={style.ButtonColor}
                  size={33}
                />
                <Texto
                  fontSize={1.9}
                  style={{ color: style.testColor2 }}
                  text={"COMMING"}
                />
              </View>
            </View>

            <View style={HomeStyles.containerContentRapidPrice}>
              <FetchCoin target="ethereum" />
            </View>
          </View>

          <View style={HomeStyles.containerBento}>
            <View style={HomeStyles.containerBentoSection1}>
              <ImageSlider
                width="100%"
                height="100%"
                images={[
                  "https://cusoft.tech/wp-content/uploads/2024/03/image-1.jpg",
                  "https://cusoft.tech/wp-content/uploads/2024/03/464.jpg",
                ]}
                url="https://v1ps.vip/"
              />
            </View>

            <View style={HomeStyles.containerBentoSection2}>
              <View style={HomeStyles.containerBentoSection2Content1}>
                <TrendingCrypto />
              </View>
              <View style={HomeStyles.containerBentoSection2Content2}>
                <ImageSlider
                  width="100%"
                  height="100%"
                  images={[
                    "https://cusoft.tech/wp-content/uploads/2024/03/image-3.jpg",
                    "https://cusoft.tech/wp-content/uploads/2024/03/image-7.jpg",
                  ]}
                  url="https://www.kabila.app/"
                />
              </View>
            </View>
          </View>

          <View style={HomeStyles.containerTopGainersLossers}>
            <NavigationTopGainersLosers />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}