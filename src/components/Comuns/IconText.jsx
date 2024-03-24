import { View, TouchableOpacity } from "react-native";
import React from "react";
import Texto from "./Text";
import GlobalStyle from "../../style/Global";
import { Icon } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = GlobalStyle();

function IconText({ name, size, text, onPress }) {
  return (
    <View
        style={{
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
        }}
    >
      <TouchableOpacity
        onPress={onPress}
      >
        
        <Icon name={name} type="ant-design" size={size} color={styles.ButtonColor}/>
        <Texto
          style={{
            color: styles.paragraphColor,
            fontSize: RFPercentage(1.5),
            textAlign: "center",
          }}
          text={text}
        />
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(IconText)
