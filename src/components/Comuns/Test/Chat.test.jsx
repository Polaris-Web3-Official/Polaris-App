//Chat para Feed back

{/*import React, { useState, useEffect } from "react";
import { View, TextInput, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { collection, addDoc, orderBy, query, onSnapshot } from "firebase/firestore";
import { database } from "../../../config/firebase";
import GlobalStyle from "../../style/Global";
import { Connected } from "../Portafolio/ConectButton";
import Loading from "./Loading";
import Texto from "./Text";
import formatStr from "../../utils/FormatStr";
import Balance from "../Portafolio/getBalance";

const style = GlobalStyle();

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const conect = Connected();
  const idUserWallet = conect[1];

  useEffect(() => {
    const colectionRef = collection(database, "chats");
    const q = query(colectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        _id: doc.id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
      }));
      setMessages(newMessages);
    });
    return unsubscribe;
  }, []);

  const handleSend = async () => {
    if (newMessage.trim() !== "") {
      const createdAt = new Date();
      await addDoc(collection(database, "chats"), {
        createdAt,
        text: newMessage,
        user: idUserWallet,
      });
      setNewMessage("");
    }
  };

  const renderMessages = () => {
    return messages.map((message) => (
      <View key={message._id} style={styles.cardMassage}>
        <Text>{message.text}</Text>
      </View>
    ));
  };

  const usuarios = {
    _id: idUserWallet,
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        {renderMessages()}
      </ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10 }}
          placeholder="Escribe tu mensaje aquí..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleSend}>
          <Text style={{ color: style.primaryColor }}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles  = StyleSheet.create({
  cardMassage: {
    width: '90%',
    marginLeft: 10,
    marginVertical: 5,
    backgroundColor: style.paragraphColor,
    minHeight: 50,
    padding: 10,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 15,
  }
})
*/}