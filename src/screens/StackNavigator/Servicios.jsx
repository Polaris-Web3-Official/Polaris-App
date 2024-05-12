import { View, ScrollView } from "react-native";
import React from "react";
import Headers from "../../components/Comuns/Header";
import GlobalStyle from "../../style/Global";
import Products from "../../components/Comuns/Products";

const style = GlobalStyle();

function Servicios({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
      <Headers
        navigation={() => navigation.goBack()}
        name={"Servicios "}
        name2={"Qsoft"}
        iconMenu="arrowleft"
        typeIconMenu="ant-design"
      />
      <View style={{ width: "100%", height: "100%" }}>
        <ScrollView>
          <View style={{ gap: 10, marginTop: 10, marginBottom: 75 }}>
            <Products
              description="Custom Web Site Development"
              price={140}
              descuent={5}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult1.png"}
            />

            <Products
              description="Custom Mobile Application Development"
              price={260}
              descuent={13}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult2.png"}
            />

            <Products
              description="Custom Desktop Application Development"
              price={300}
              descuent={17}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult3.png"}
            />

            <Products
              description="Multiplatform Application Development"
              price={390}
              descuent={20}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult4.png"}
            />

            <Products
              description="Custom Video Game Development"
              price={600}
              descuent={35}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult10.png"}
            />

            <Products
              description="Enterprise Application Development Service"
              price={2100}
              descuent={41}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult12.png"}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default React.memo(Servicios);
