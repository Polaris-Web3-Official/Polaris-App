import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { ethers } from "ethers";
import { infuraUrl } from "../../../../utils/Infura";
import { Connected } from "../../ConectButton";

const ProfileImage = ({ width = 80, height = 80, trans = true }) => {
  const [realBalance, setRealBalance] = useState(null);

  const conect = Connected();
  const isConnected = conect[0];
  const address = conect[1];

  const checkBalance = async () => {
    if (isConnected && address) {
      const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
      try {
        const balance = await provider.getBalance(address);
        setRealBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("Error al obtener el saldo:", error.message);
      }
    }
  };

  useEffect(() => {
    checkBalance();
  }, [isConnected, address]);

  let profileImage;

  if (isConnected) {
    if (realBalance >= 1) {
      profileImage = require("../../../../../assets/characters/WhaleYelow.png"); // Ruta a la imagen del rey
    } else if (realBalance >= 0.01) {
      profileImage = require("../../../../../assets/characters/whaleBlue.png"); // Ruta a la imagen de la ballena
    } else {
      profileImage = require("../../../../../assets/characters/WhaleRed.png"); // Ruta a la imagen del ataúd
    }
  } else {
    profileImage = require("../../../../../assets/characters/WhaleBlack.png"); // Ruta a la imagen de desconexión
  }

  return (
    <View>
      <Image
        source={profileImage}
        style={{
          width: width,
          height: height,
          transform: trans ? [{ scaleX: -1 }] : [{ scaleX: 1 }],
        }}
      />
    </View>
  );
};

export default ProfileImage;
