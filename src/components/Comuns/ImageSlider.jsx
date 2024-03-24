import React, { useRef, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";

function ImageSlider({
  images = [],
  url = "https://www.example.com",
  width = "100%",
  height = "100%",
}) {
  const scrollViewRef = useRef();
  const screenWidth = Dimensions.get("screen").width;
  const sliderWidth = screenWidth * 0.5;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % images.length; // Actualiza el índice de la imagen
      scrollViewRef.current.scrollTo({
        x: index * sliderWidth,
        animated: true,
      });
    }, 12000); // Cambia la imagen cada 10 segundos

    return () => clearInterval(timer); // Limpia el temporizador cuando el componente se desmonta
  }, []);

  return (
    <View
      style={{
        overflow: "hidden",
        borderRadius: 12,
      }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        style={{ width, height }}>
        {images.map((image, index) => (
          <TouchableOpacity
            onPress={()=> Linking.openURL(url)}
            style={{
              width: sliderWidth,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={index}>
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover" // Cambiado a "contain"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default React.memo(ImageSlider);
