import { Image, TouchableOpacity } from "react-native";
import React from "react";

function Error({
  stylesButton,
  component,
  img = require("../../../assets/polaris_brand/150ppi/ICON_V02_PNG150ppi.png"),
  imgWidth = 200,
  imgHeight = 200,
}) {
  return (
    <TouchableOpacity
      style={{
        ...stylesButton,
      }}
      onPress={component}>
      <Image
        style={{
          width: imgWidth,
          height: imgHeight,
        }}
        source={img}
      />
    </TouchableOpacity>
  );
}

export default React.memo(Error);
