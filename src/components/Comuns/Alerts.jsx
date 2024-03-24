import React, { useState, useEffect } from "react";
import { View, Button, TouchableOpacity } from "react-native";
import Texto from "./Text";
import { Icon } from "react-native-elements";
import GlobalStyle from "../../style/Global";
import alertPortafolioStyle from "../../style/ComponentsStyles/AlertPortafolioStyle";

const style = GlobalStyle();

export default function Alerts({ text, type, visible = false }) {
  const [showAlert, setShowAlert] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShowAlert(true);

      // Después de 3 segundos, ocultar la alerta
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <View
      style={[alertPortafolioStyle.container, { opacity: showAlert ? 1 : 0 }]}>
      <View
        style={[
          alertPortafolioStyle.box,
          {
            backgroundColor:
              type === 1
                ? style.ButtonColor
                : type === 2
                ? "rgba(225,240,101,0.8)"
                : type === 3
                ? style.testColor2
                : style.mainBackgroundColor2,
          },
        ]}>
        <View style={alertPortafolioStyle.icon}>
          {type === 1 || type === 2 ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}>
              <Icon
                name={type === 1 ? "check" : "minus"}
                type="ant-design"
                size={15}
                color={style.paragraphColor}
              />
              <Texto style={{ color: style.paragraphColor }} text={text} />
            </View>
          ) : (
            <Icon
              name="exclamationcircleo"
              type="ant-design"
              color={style.ButtonColor}
              size={20}
            />
          )}
        </View>
      </View>
    </View>
  );
}
