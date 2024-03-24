//Informacion sobre un usuario especifico

{
  /*import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Modal,
  ImageBackground,
} from "react-native";
import Headers from "../../../components/Comuns/Header";
import GlobalStyle from "../../../style/Global";
import Texto from "../../../components/Comuns/Text";
import { Icon } from "react-native-elements";
import { getBasicInfo } from "../../../components/Hive/Functions/getInfoModal";
import { getTotalPosts } from "../../../components/Hive/Functions/getPosts";
import ModalStats from "../../../components/Hive/ModalStats";

const style = GlobalStyle();

export default function UsersStats({ navigation }) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("hiveio");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = () => {
    getTotalPosts(search).then((userData) => {
      const userExists = users?.basicInfo?.some(
        (user) => user.name === userData?.basicInfo?.name
      );
      if (!userExists) {
        setUsers([...users, userData]);
      }
      setInputValue("");
      setInputVisible(false);
    });
  };

  const deleteUser = () => {
    setUsers([]);
    setSelectedUser(null);
  };

  useEffect(() => {
    if (search) {
      addUser();
    }
  }, [search]);

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  console.log(users);

  return (
    <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
      <Headers
        iconMenu="arrowleft"
        typeIconMenu="ant-design"
        navigation={() => navigation.goBack()}
        name={"Estadisticas "}
        name2={"Usuario"}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "nowrap",
        }}>
        <View
          style={{
            width: "82%",
            height: "100%",
            padding: 10,
            backgroundColor: style.mainBackgroundColor2,
            gap: 10,
          }}>
          {selectedUser && (
            <View style={{ width: "100%", gap: 10 }}>
              <ImageBackground
                style={{
                  width: "100%",
                  height: 80,
                }}
                imageStyle={{ objectFit: "contain", borderRadius: 15 }}
                source={{
                  uri: selectedUser
                    ? selectedUser.metadataPosting.profile.cover_image
                    : "https://hive.io/opengraph.png",
                }}></ImageBackground>
              <View
                style={{
                  width: "100%",
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center,",
                  flexDirection: "row",
                  gap: 10,
                }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 40 }}
                  source={{
                    uri: selectedUser
                      ? selectedUser.image
                      : "https://cusoft.tech/wp-content/uploads/2024/02/cfea4d2d-e2f7-4825-b4ef-f985441a1b69.jpeg",
                  }}
                />

                <View
                  style={{
                    height: "100%",
                    justifyContent: "center",
                  }}>
                  <Texto
                    fontSize={1.3}
                    style={{
                      color: style.borderColor,
                    }}
                    text={
                      selectedUser
                        ? selectedUser?.created
                        : "Usuario no creado ?"
                    }
                  />
                  <Texto
                    style={{
                      textTransform: "capitalize",
                      color: style.paragraphColor,
                    }}
                    fontSize={2.3}
                    text={
                      selectedUser
                        ? selectedUser?.name.slice(0, 15)
                        : "Usuario sin nombre ?"
                    }
                  />
                </View>
              </View>
            </View>
          )}
        </View>

        <ScrollView
          style={{
            width: "23%",
            height: "100%",
            backgroundColor: style.mainBackgroundColor2,
          }}>
          <View
            style={{
              width: "90%",
              height: "100%",
              marginHorizontal: "5%",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              paddingBottom: 15,
              backgroundColor: style.mainBackgroundColor,
              borderRadius: 10,
              marginTop: 10,
            }}>
            <View
              style={{
                width: "90%",
                height: 30,
                marginHorizontal: "5%",
                marginTop: 5,
              }}>
              <TouchableOpacity
                style={{
                  display: users.length === 0 ? "none" : "flex",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => deleteUser()}>
                <Icon
                  name="minus"
                  type="ant-design"
                  color={style.ButtonColor}
                  size={30}
                />
              </TouchableOpacity>
            </View>
            {users?.basicInfo?.map((user) => (
              <View key={user.name} style={{ position: "relative" }}>
                <TouchableOpacity onPress={() => setSelectedUser(user)}>
                  <Image
                    style={{ width: 40, height: 40, borderRadius: 50 }}
                    source={{
                      uri:
                        user?.image !== undefined || user.image !== null
                          ? user.image
                          : "https://cusoft.tech/wp-content/uploads/2024/02/cfea4d2d-e2f7-4825-b4ef-f985441a1b69.jpeg",
                    }} // Cambiado de user.image a user.profile_image
                  />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity
              style={{
                backgroundColor: style.ButtonColor,
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                borderWidth: 1,
                alignItems: "center",
                marginTop: users.length === 0 ? -40 : 0,

                borderRadius: 10,
              }}
              onPress={() => setInputVisible(true)}>
              <Icon
                name="plus"
                type="ant-design"
                size={25}
                color={style.paragraphColor}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Modal visible={inputVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <View
            style={{
              width: "100%",
              padding: 10,
              flexDirection: "row",
              justifyContent: "center",
              display: users?.basicInfo?.some((x) => x.name === inputValue)
                ? "flex"
                : "none",
            }}>
            <Texto
              fontSize={2.4}
              style={{
                textAlign: "center",
                color: style.paragraphColor,
                backgroundColor: style.borderColor,
                padding: 8,
                borderRadius: 10,
              }}
              text={`${inputValue}`}
            />
            <Texto
              fontSize={2.4}
              style={{
                textAlign: "center",
                color: style.paragraphColor,
                padding: 8,
              }}
              text={` ya ha sido adicionado`}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: 60,
              position: "relative",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}>
            <Icon
              name="close"
              size={30}
              color={style.testColor}
              type="ant-design"
              onPress={() => setInputVisible(false)}
            />
            <TextInput
              value={inputValue}
              cursorColor={style.ButtonColor}
              placeholder="Buscar usuario"
              placeholderTextColor={style.borderColor}
              onChangeText={(text) => setInputValue(text.toLowerCase())}
              onSubmitEditing={addUser}
              style={{
                backgroundColor: "white",
                width: "60%",
                padding: 10,
                height: 40,
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: style.ButtonColor,
                color: style.paragraphColor,
                borderRadius: 10,
              }}
            />

            <Icon
              onPress={() => {
                setInputVisible(false);
                setSearch(inputValue);
              }}
              name="search1"
              type="ant-design"
              size={30}
              color={style.ButtonColor}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
*/
}
