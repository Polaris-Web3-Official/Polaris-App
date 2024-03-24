import {
  View,
  Dimensions,
  StyleSheet,
  Animated,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import GlobalStyle from "../../style/Global";
import PartnerData from "./Data";
import Texto from "../Comuns/Text";
import { Icon } from "react-native-elements";
import FetchPartnersStyle from "../../style/ComponentsStyles/FetchPartnersStyle";

const style = GlobalStyle();
const widthScreen = Dimensions.get("screen").width;
const heigthScreen = Dimensions.get("screen").height;
const ANCHO_CONTENEDOR = widthScreen * 0.8;
const ESPACIO_LATERAL = (widthScreen - ANCHO_CONTENEDOR) / 2;
const ALTURA_BACKDROP = heigthScreen * 0.5;
const ESPACIO = 10;

function BackDrop({ scrollX }) {
  return (
    <View
      style={
        ([
          {
            height: ALTURA_BACKDROP,
            width: widthScreen,
            position: "absolute",
            top: 0,
          },
        ],
        StyleSheet.absoluteFill)
      }>
      {PartnerData.map((item, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const outputRange = [0, 1, 0];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange,
        });

        return (
          <Animated.Image
            key={item.id}
            source={{ uri: item.background }}
            blurRadius={1}
            style={{
              height: ALTURA_BACKDROP,
              width: widthScreen,
              position: "absolute",
              top: 0,
              opacity,
            }}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", style.mainBackgroundColor]}
        style={{
          height: ALTURA_BACKDROP,
          width: widthScreen,
          position: "absolute",
          top: 0,
        }}
      />
    </View>
  );
}

export default function FetchPartners() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View>
      <BackDrop scrollX={scrollX} />
      <Animated.FlatList
        data={PartnerData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: heigthScreen * 0.25,
          paddingHorizontal: ESPACIO_LATERAL,
        }}
        decelerationRate={0}
        snapToInterval={ANCHO_CONTENEDOR}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const outputRange = [0, -50, 0];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          });

          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <Animated.View
                style={[
                  FetchPartnersStyle.posterContainer1,
                  { marginHorizontal: ESPACIO, transform: [{ translateY }] },
                ]}>
                <Image
                  source={{ uri: item.img }}
                  style={[
                    FetchPartnersStyle.posterImage,
                    {
                      height: ANCHO_CONTENEDOR * 1.2,
                    },
                  ]}
                />
                <View style={{ padding: 10, gap: 5 }}>
                  <Texto
                    fontSize={2.3}
                    style={{ color: item.titleColor, textAlign: "center" }}
                    text={item.name}
                  />
                  <Texto
                    fontSize={1.8}
                    style={{ color: item.descriptionColor }}
                    text={item.Description}
                  />
                </View>
                <View
                  style={[
                    FetchPartnersStyle.posterContainer2,
                    {
                      backgroundColor: item.btnColor,
                    },
                  ]}>
                  <Icon
                    name="twitter"
                    type="antdesign"
                    size={25}
                    color={item.btnTextColor}
                  />
                  <Icon
                    name="youtube"
                    type="ant-design"
                    size={25}
                    color={item.btnTextColor}
                  />
                  <Icon
                    name="arrowright"
                    type="ant-design"
                    size={25}
                    color={item.btnTextColor}
                  />
                  <Icon
                    type="antdesign"
                    name="circledown"
                    size={25}
                    color={item.btnTextColor}
                  />
                </View>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
}
