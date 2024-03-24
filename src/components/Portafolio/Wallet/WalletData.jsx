import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Connected } from "../ConectButton";
import GlobalStyle from "../../../style/Global";
import Texto from "../../Comuns/Text";
import Balance from "../getBalance";
import formatStr from "../../../utils/FormatStr";
import formatNumber from "../../../utils/FormatNumer";
import WalletDataStyle from "../../../style/ComponentsStyles/Portafolio/WalletdataStyles";

const style = GlobalStyle();

export default function WalletData() {
  const conect = Connected();
  const address = conect[1];
  // Estado para almacenar la fecha actual
  const [currentDate, setCurrentDate] = useState(new Date());

  // Función para calcular la diferencia de tiempo
  const calculateTimeDifference = () => {
    const aprilFirst = new Date("2024-04-01");
    const difference = aprilFirst - currentDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    // Actualizar la fecha actual cada segundo
    const timerID = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const timeDifference = calculateTimeDifference();

  return (
    <View>
      <View>
        <View style={WalletDataStyle.container}>
          <View style={WalletDataStyle.content1}>
            <View style={WalletDataStyle.balanceContainer}>
              <View>
                <Texto
                  style={WalletDataStyle.balance}
                  text={
                    Balance(address)
                      ? formatNumber(formatStr(Balance(address), 7))
                      : "0.00"
                  }
                />
              </View>
            </View>

            <View style={WalletDataStyle.content3}>
              <Texto
                style={{ fontSize: 20, color: "#4689c6" }}
                text={`${timeDifference.days}D `}
              />
              <Texto
                style={{ fontSize: 20, color: "#6ea3d4" }}
                text={`${timeDifference.hours}H `}
              />
              <Texto
                style={{ fontSize: 20, color: "#94c1ea" }}
                text={`${timeDifference.minutes}M `}
              />
              <Texto
                style={{ fontSize: 20, color: "#b7dafa" }}
                text={`${timeDifference.seconds}S`}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}