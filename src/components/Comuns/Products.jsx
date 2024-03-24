import { View, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Image } from "react-native";
import Texto from "../Comuns/Text";
import ProductsStyles from "../../style/ComponentsStyles/ProductosStyle";

export default function Products({
  img = "https://cusoft.tech/wp-content/uploads/2024/02/adult11.png",
  description = "Este es un producto muy xd xd xd xd xd xd xd x d xd xd xd xd",
  price = 30,
  url = "https://cusoft.tech/wp-content/uploads/2024/02/adult11.png",
  descuent = 5,
}) {
  return (
    <View style={ProductsStyles.card}>
      <View style={ProductsStyles.cardContent1}>
        <Image style={ProductsStyles.img} source={{ uri: img }} />
      </View>

      <View style={ProductsStyles.cardContent2}>
        <View style={ProductsStyles.container1}></View>
        <View style={ProductsStyles.container2}>
          <View style={{ gap: 15, alignItems: "center", padding: 10 }}>
            <Texto
              fontSize={1.7}
              style={ProductsStyles.description}
              text={description}
            />
            <Texto style={ProductsStyles.price} text={`Precio: $${price}`} />
          </View>

          <View style={{ alignItems: "center", marginTop: -10 }}>
            <Texto
              style={ProductsStyles.descuent}
              text={`Holders: -${descuent}%`}
            />
          </View>

          <View>
            <TouchableOpacity
              style={ProductsStyles.btn}
              onPress={() => Linking.openURL(url)}>
              <Texto style={ProductsStyles.description} text={"Comprar"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
