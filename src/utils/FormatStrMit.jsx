import { View } from 'react-native'
import React from 'react'
import Texto from '../components/Comuns/Text';
import GlobalStyle from '../style/Global';

const style = GlobalStyle()

export default function FormatStrMit({ str, n }) {
  const shortenString = (str, n) => {
    if (typeof str !== 'string' || typeof n !== 'number') {
      return ''; // Manejar valores no válidos de entrada
    }
    if (str.length <= n * 2) {
      return str;
    }
    const prefix = str.substring(0, n);
    const suffix = str.substring(str.length - n);
    return `${prefix}............${suffix}`;
  };

  return (
    <View>
      <Texto style={{color: style.paragraphColor}} text={shortenString(str, n)} />
    </View>
  )
}
