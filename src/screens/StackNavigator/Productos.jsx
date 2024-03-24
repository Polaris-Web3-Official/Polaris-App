import { View, Text, ScrollView } from "react-native";
import React from "react";
import Headers from "../../components/Comuns/Header";
import BottonNavigation from "../../components/Comuns/BottonNavigation";
import GlobalStyle from "../../style/Global";
import Comming from "../../components/Comuns/Comming";
import Products from "../../components/Comuns/Products";

const style = GlobalStyle();

function Productos({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
      <Headers
        navigation={() => navigation.goBack()}
        name={"Productos "}
        name2={"Qsoft"}
        iconMenu="arrowleft"
        typeIconMenu="ant-design"
      />
      <View style={{ width: "100%", height: "100%" }}>
        <ScrollView>
          <View style={{ gap: 10, marginTop: 10, marginBottom: 75 }}>
            <Products
              description="Kit de Aprendizaje de Programación para Niños"
              price={132}
              descuent={10}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/kid.png"}
            />

            <Products
              description="Kit de Aprendizaje de Desarrollo Web y Aplicaciones Móviles"
              price={220}
              descuent={23}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/kid2.png"}
            />

            <Products
              description="Kit de Aprendizaje de Ciencia de Datos y Análisis de Datos"
              price={350}
              descuent={31}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/kid3.png"}
            />

            <Products
              description="Kit de Aprendizaje Completo || BootCamp Full Stack Developer"
              price={1240}
              descuent={42}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/kid4.png"}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default React.memo(Productos);
