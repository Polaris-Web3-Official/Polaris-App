//Este sera el componente encargado de mostrar las estadisticas de las wallets al usuario

{/*import { View, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import GlobalStyle from "../../../style/Global";
import Texto from "../Text";
import { BarChart, LineChart } from "react-native-chart-kit";

const style = GlobalStyle();

function ExamplesStatics() {
  return (
    <View style={{ padding: 10, gap: 10 }}>
      <View style={styles.card1}>
        <View style={styles.card1Title}>
          <Image
            style={styles.card1TitleImg}
            source={require("../../../../assets/crypto/btc.png")}
          />
          <Texto style={styles.card1TitleText} text={"BTC"} />
          <Texto style={styles.card1TitlePorcentage} text={"25%"} />
          <View>
            <ScrollView horizontal>
              <View>
                <BarChart
                  style={{
                    marginTop: -15,
                    marginLeft: -80,
                  }}
                  data={{
                    datasets: [
                      {
                        data: [
                          1, 3, 5, 3, 2, 6, 4, 3, 2, 3, 4, 5, 3, 5, 3, 2, 6, 4,
                          3, 2, 3, 4, 5,
                        ],
                      },
                    ],
                  }}
                  width={500}
                  height={130}
                  chartConfig={{
                    backgroundGradientFrom: style.mainBackgroundColor,
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: style.mainBackgroundColor,
                    backgroundGradientToOpacity: 0.3,
                    color: () => style.testColor2,
                    barPercentage: 0.5,
                    
                  }}
                  verticalLabelRotation={30}
                  withInnerLines={false}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.card1Chart}>
          <View style={{ width: "100%", height: 220 }}>
            <LineChart
              data={{
                labels: ["", "", "", "", ""], // Etiquetas para el eje X
                datasets: [
                  {
                    data: [12, 78, 50, 87, 50, 20, 49, 40], // Datos para trazar en el gráfico
                  },
                ],
              }}
              width={520} // Ancho del gráfico
              height={430} // Altura del gráfico
              chartConfig={{
                backgroundColor: style.mainBackgroundColor, // Color de fondo del gráfico
                backgroundGradientFrom: style.mainBackgroundColor, // Gradiente de color de fondo (inicio)
                backgroundGradientTo: style.mainBackgroundColor, // Gradiente de color de fondo (fin)
                decimalPlaces: 0, // Número de decimales para mostrar en los valores del gráfico
                color: () => style.ButtonColor, // Color de las líneas del gráfico
                labelColor: () => "transparent", // Color de las etiquetas del gráfico
                style: {
                  // Estilo adicional para el gráfico (por ejemplo, borderRadius)
                  borderRadius: 16,
                },
                propsForDots: {
                  // Propiedades adicionales para los puntos en el gráfico
                  r: "4", // Radio del punto
                  strokeWidth: "1", // Grosor del borde del punto
                  stroke: style.paragraphColor, // Color del borde del punto
                },
              }}
              bezier
              style={{
                marginLeft: -70,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card1: {
    borderWidth: 0.4,
    borderColor: style.ButtonColor,
    width: "100%",
    height: 450,
    borderRadius: 10,
    gap: 5,
    overflow: "hidden",
  },
  card1Title: {
    height: "25%",
    gap: 5,
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  card1TitleImg: {
    width: 25,
    height: 25,
  },
  card1TitleText: {
    color: style.paragraphColor,
    fontSize: 18,
  },
  card1TitlePorcentage: {
    paddingHorizontal: 5,
    backgroundColor: style.testColor2,
    color: style.mainBackgroundColor,
    fontSize: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  card1Chart: {
    height: "75%",
    overflow: "hidden",
  },
});


export default React.memo(ExamplesStatics)*/}