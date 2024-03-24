import { View, Text, Pressable, Linking, TouchableOpacity } from 'react-native';
import ButtonStyle from '../../style/ButtonStyle';

let buttonStyle = ButtonStyle();

//const handlePress = (articleUrl) => {
//  Linking.openURL(articleUrl);
//};
export default function ButtonNews({ text="Leer Mas", url}) {
  return (
    <View style={buttonStyle.btnContainer}>
        <TouchableOpacity style={buttonStyle.btnChildren} onPress={()=>{
          Linking.openURL(url)
        }}>
          <Text style={buttonStyle.btn}>{text}</Text>
        </TouchableOpacity>
    </View>)
}