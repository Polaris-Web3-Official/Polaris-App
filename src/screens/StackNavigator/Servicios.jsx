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
              description="Servicio de Tutoría Personalizada en Programación"
              price={40}
              descuent={5}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult1.png"}
            />

            <Products
              description="Servicio de Consultoría en Desarrollo de Aplicaciones Móviles"
              price={60}
              descuent={13}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult2.png"}
            />

            <Products
              description="Servicio de Asesoramiento en Innovación Tecnológica"
              price={100}
              descuent={17}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult3.png"}
            />

            <Products
              description="Servicio de Implementación de Sistemas (CMS)"
              price={140}
              descuent={13}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult4.png"}
            />

            <Products
              description="Servicio de Desarrollo Web a Medida"
              price={250}
              descuent={35}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult5.png"}
            />

            <Products
              description="Servicio de Optimización de SEO y Marketing Digital"
              price={250}
              descuent={21}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult6.png"}
            />

            <Products
              description="Servicio de Creacion y Desarrollo de Bots para Redes Sociales"
              price={350}
              descuent={27}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult6.png"}
            />

            <Products
              description="Servicio de Pruebas de Calidad y Optimización para Aplicaciones Móviles"
              price={500}
              descuent={28}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult7.png"}
            />

            <Products
              description="Servicio de Desarrollo de Plataformas de E-Commerce"
              price={440}
              descuent={33}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult1.png"}
            />

            <Products
              description="Servicio de Diseño de Interfaces de Usuario y Experiencia de Usuario"
              price={500}
              descuent={37}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult8.png"}
            />

            <Products
              description="Servicio de Desarrollo de Juegos Personalizados"
              price={840}
              descuent={21}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult10.png"}
            />

            <Products
              description="Servicio de Creacion de Aplicaciones Empresariales"
              price={1300}
              descuent={21}
              img={"https://cusoft.tech/wp-content/uploads/2024/02/adult12.png"}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default React.memo(Servicios);
