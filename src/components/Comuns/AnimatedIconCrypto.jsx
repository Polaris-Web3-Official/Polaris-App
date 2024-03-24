import { Image } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

const AnimatableImage = Animatable.createAnimatableComponent(Image);

function AnimatedIconCrypto({
  src,
  animation,
  width = 20,
  height = 20,
  marginLeft = 0,
  objetFit = "contain",
  margintop = 0,
}) {
  return (
    <AnimatableImage
      style={{
        width: width,
        height: height,
        marginLeft: marginLeft,
        objectFit: objetFit,
        marginTop: margintop,
      }}
      source={src}
      animation={animation}
    />
  );
}

export default React.memo(AnimatedIconCrypto);
