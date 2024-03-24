import React, { useState } from "react";
import { Icon } from "react-native-elements";
import GlobalStyle from "../../style/Global";

const style = GlobalStyle();

function Liked({
  name = ["dislike1", "dislike2"],
  type = "ant-design",
  color = style.paragraphColor,
  onPress,

}) {
  const [liked, setLiked] = useState(false);
  return (
    <Icon
      name={liked ? name[0] : name[1]}
      type={type}
      color={color}
      onPress={() => {
        if (liked) {
          setLiked(false);
        } else {
          setLiked(true);
          onPress();
        }
      }}
    />
  );
}

export default React.memo(Liked)
