import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import "react-native-gesture-handler";
import { forwardRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, { useState, useEffect, useRef } from "react";
import GlobalStyle from "../../style/Global";
import { Image } from "react-native";
import Texto from "../Comuns/Text";
import { LineChart } from "react-native-chart-kit";
import { Icon } from "react-native-elements";
import formatDateHive from "../../utils/FormatDateHive";
import FormatStrPerPoint from "../../utils/FormatStrPerPoint";
import formatNumber from "../../utils/FormatNumer";
import Loading from "../Comuns/Loading";
import ModalStats from "./ModalStats";
import {
  getBasicInfo,
  getPosts,
  getTotalFollowers,
  getTotalFollowing,
} from "./Functions/getInfoModal";
import { TouchableOpacity } from "react-native";

const style = GlobalStyle();

const GetBasicInfoForUser = forwardRef(({ user, navigation }, ref) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const bottomSheetModalRef = useRef(null);
  const [folowers, setFolowers] = useState([]);
  const [folowings, setFolowings] = useState([]);
  const snapPoints = ["53%"];

  useEffect(() => {
    setLoading(true);

    getBasicInfo(user).then((basic) => {
      setData(basic);
    });

    getTotalFollowers(user).then((folowers) => {
      setFolowers(folowers);
    });

    getTotalFollowing(user).then((folowings) => {
      setFolowings(folowings);
    });

    setLoading(false);
  }, [user]);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={ref}
          index={0}
          snapPoints={snapPoints}
          handleIndicatorStyle={{
            backgroundColor: style.ButtonColor,
          }}
          con
          backgroundStyle={{
            flex: 1,
            backgroundColor: style.mainBackgroundColor2,
            borderRadius: 35,
            borderColor: "rgba(166,201,252,0.5)",
            borderWidth: 1,
          }}>
          <View
            style={{
              width: "90",
              marginHorizontal: "5%",
            }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 15,
                alignItems: "center",
              }}>
              <Image
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 70,
                }}
                source={{
                  uri:
                    data?.image !== undefined || data?.image !== null
                      ? data?.image
                      : "https://cusoft.tech/wp-content/uploads/2024/03/306754557_392081286421605_252443144491227308_n.png",
                }}
              />

              <View style={{ justifyContent: "space-evenly" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  <Texto
                    style={{
                      color: style.paragraphColor,
                      marginVertical: 10,
                    }}
                    fontSize={3}
                    text={`@${data?.name?.slice(0, 9)}`}
                  />

                  <Texto
                    style={{
                      color: style.borderColor,
                      marginLeft: 15,
                      height: 35,
                      textAlignVertical: "bottom",
                    }}
                    fontSize={1.6}
                    text={data?.created ? data?.created : "Creada hace :( ??"}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",

                    gap: 15,
                  }}>
                  <View
                    style={{
                      minHeight: 25,
                      minWidth: 50,
                      padding: 5,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: style.borderColor,
                      paddingHorizontal: 8,
                    }}>
                    <Texto
                      style={{ color: style.paragraphColor }}
                      text={
                        data?.balanceHive ? data?.balanceHive : "0.000 HIVE"
                      }
                    />
                  </View>
                  <View
                    style={{
                      minHeight: 25,
                      minWidth: 50,
                      padding: 5,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: style.borderColor,
                      paddingHorizontal: 8,
                    }}>
                    <Texto
                      style={{ color: style.paragraphColor }}
                      text={data?.hbdBalamce ? data?.hbdBalamce : "0.000 HBD"}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View>
              <View
                style={{
                  width: "90%",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  marginVertical: 5,
                  marginHorizontal: "5%",
                }}>
                <Texto
                  fontSize={2.3}
                  style={{ color: style.paragraphColor, textAlign: "center" }}
                  text={
                    data?.description
                      ? data?.description.slice(0, 70) + " ..."
                      : "Un blog normal de una persona, mi vida es mi propia historia."
                  }
                />
              </View>

              <View
                style={{
                  width: "100%",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 10,
                }}>
                <ModalStats stat={folowers} nameStat={"Seguidores"} />
                <ModalStats stat={folowings} nameStat={"Siguiendo"} />
                <ModalStats stat={data?.totalPost} nameStat={"Escritos"} />
                <ModalStats
                  stat={formatNumber(data?.powerVotes)}
                  nameStat={"Poder de Voto"}
                />
                <ModalStats
                  stat={formatNumber(FormatStrPerPoint(data?.rewards))}
                  nameStat={"Recompenzas"}
                />
              </View>
            </View>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,0.7)",
  },
});

export default React.memo(GetBasicInfoForUser);
