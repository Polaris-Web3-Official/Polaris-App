import { useEffect, useState, useRef } from "react";
import { StyleSheet, Animated, View, TouchableOpacity } from "react-native";
import GlobalStyle from "../../style/Global";
import { Icon } from "react-native-elements";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";

const style = GlobalStyle();

export default function FlotingBotton({
  icons = {
    icon1: {
      name: "notification",
      action: () => console.log("presionando el boton 1"),
    },
    icon2: {
      name: "user",
      action: () => console.log("presionando el boton 2"),
    },
    icon3: {
      name: "form",
      action: () => console.log("presionando el boton 3"),
    },
  },
}) {
  const [toggle, setToggle] = useState(false);
  const options = [
    {
      id: 1,
      icon: icons.icon1.name,
      action: icons.icon1.action,
      translation: "left",
    },
    {
      id: 2,
      icon: icons.icon2.name,
      action: icons.icon2.action,
      translation: "middle",
    },
    {
      id: 3,
      icon: icons.icon3.name,
      action: icons.icon3.action,
      translation: "top",
    },
  ];

  const animatedValues = {
    animation: useRef(new Animated.Value(0)).current,
  };

  const { animation } = animatedValues;

  useEffect(() => {
    handleAnimated();
  }, [toggle]);

  const handleAnimated = () => {
    Animated.spring(animation, {
      toValue: toggle ? 1 : 0,
      friction: toggle ? 4 : 8,
      useNativeDriver: false,
    }).start();
  };

  const animatedExpand = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 5],
        }),
      },
    ],
  };

  const animatedClose = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setToggle(!toggle)}
        style={[
          styles.itemContainer,
          {
            zIndex: 20,
            backgroundColor: toggle ? "rgba(0,0,0, 0.1)" : style.ButtonColor,
          },
        ]}>
        <Animated.View style={animatedClose}>
          <Icon
            name="plus"
            type="ant-design"
            color={style.paragraphColor}
            size={28}
          />
        </Animated.View>
      </TouchableOpacity>

      {options.map((x) => (
        <Animated.View
          key={x.id}
          style={[
            styles.itemContainer,
            {
              backgroundColor: toggle ? "rgba(0,0,0, 0.1)" : style.ButtonColor,
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      0,
                      x.translation === "left"
                        ? -90
                        : x.translation === "middle"
                        ? -60
                        : 0,
                    ],
                  }),
                },
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      0,
                      x.translation === "top"
                        ? -90
                        : x.translation === "middle"
                        ? -60
                        : 0,
                    ],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity onPress={x.action} style={styles.itemButton}>
            <Icon
              name={x.icon}
              type="ant-design"
              color={style.paragraphColor}
              size={20}
            />
          </TouchableOpacity>
        </Animated.View>
      ))}

      <Animated.View
        style={[
          styles.itemContainer,
          { zIndex: 0, backgroundColor: style.ButtonColor },
          animatedExpand,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 88,
    right: -10,
    zIndex: 1,
  },
  itemContainer: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    right: 25,
    borderRadius: 100,
    zIndex: 10,
  },
  itemButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export function AlertHive({}) {
  return (
    <AlertNotificationRoot theme={theme} colors={[colors, colors]}>
      <View>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: type,
              title: title,
              textBody: body,
              button: textBTN,
            })
          }
          style={{ ...styleBTN }}>
          <Icon
            name={iconName}
            type={iconType}
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
      </View>
    </AlertNotificationRoot>
  );
}
