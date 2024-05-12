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
              description="Programming Learning Kit for Children"
              price={322}
              descuent={10}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/kid.png"}
            />

            <Products
              description="Web Development and Mobile Apps Learning Kit"
              price={420}
              descuent={23}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/kid2.png"}
            />

            <Products
              description="Data Science and Data Analytics Learning Kit"
              price={1050}
              descuent={31}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/kid3.png"}
            />

            <Products
              description="BootCamp Full Stack Developer Learning Kit"
              price={3240}
              descuent={52}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/kid4.png"}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default React.memo(Productos);
