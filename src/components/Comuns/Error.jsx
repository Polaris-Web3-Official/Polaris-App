import { Image, TouchableOpacity } from "react-native";
import React from "react";

function Error({
  stylesButton,
  component,
  img = require("../../../assets/Logotype/logotypeOnlyBackgroundNoneHDError.png"),
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
