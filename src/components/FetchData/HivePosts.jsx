import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { debounce } from "lodash";
import { Icon } from "react-native-elements";
import GlobalStyle from "../../style/Global";
import Texto from "../Comuns/Text";
import Loading from "../Comuns/Loading";
const style = GlobalStyle();
import Headers from "../Comuns/Header";
import Error from "../Comuns/Error";
import FlotingBotton from "../Comuns/FlotingBotton";
import GetBasicInfoForUser from "../Hive/GetBasicInfoForUser";
import { getPosts } from "../Hive/Functions/getPosts";

function HivePosts({ navigation, limit = 30 }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("hive");
  const [author, setAuthor] = useState();
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    getPosts(search, limit).then((posts) => {
      if (posts === null) {
        setError(posts);
      }
      setPosts(posts);
      setLoading(false);
    });
  }, [search]);

  const debouncedSearch = debounce((text) => setSearch(text), 3000);

  if (loading) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: style.mainBackgroundColor,
        }}>
        <Headers
          navigation={() => navigation.openDrawer()}
          name={"Cargando "}
          name2={"Hive"}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -30,
          }}>
          <Loading />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: style.mainBackgroundColor,
        }}>
        <Headers
          navigation={() => navigation.openDrawer()}
          name={"Upp"}
          name2={"sss"}
        />
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Error component={() => setSearch("hive")} />
        </View>
      </View>
    );
  }

  const Item = React.memo(({ item, navigation }) => {
    const json = JSON.parse(item.json_metadata);

    //Contando la catidad de botos positivos y negativos
    let positiveVotes = 0;
    let negativeVotes = 0;

    // Recorremos los votos activos para determinar la cantidad total
    item.active_votes.forEach((vote) => {
      if (vote.percent > 0) {
        positiveVotes++;
      } else if (vote.percent < 0) {
        negativeVotes++;
      }
    });
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate("HivePostDetails", { post: item })}
        style={{ width: "95%", marginHorizontal: "2.5%" }}>
        <View style={styles.container1}>
          <View style={styles.cimg}>
            <Image
              source={{
                uri: json.image
                  ? json.image[0]
                  : "https://cusoft.tech/wp-content/uploads/2024/03/306754557_392081286421605_252443144491227308_n.png",
                priority: "high",
              }}
              style={styles.img}
            />
          </View>

          <View style={styles.container2}>
            <View>
              <Texto
                style={styles.title}
                fontSize={2.5}
                text={`${item.title}.`}
              />
            </View>

            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                width: "100%",
                flexWrap: "wrap",
              }}>
              {json?.tags?.map((tag, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      padding: 3,
                      paddingHorizontal: 5,
                      backgroundColor: style.borderColor,
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      maxHeight: 25,
                      minWidth: 40,
                    }}
                    onPress={() => setSearch(tag)}>
                    <Texto
                      fontSize={1.8}
                      style={{ color: style.paragraphColor }}
                      text={tag}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 14,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 10,
              }}>
              <Texto
                fontSize={2.0}
                style={styles.pay}
                text={item.total_payout_value}
              />
              <Icon
                name="gift"
                type="ant-design"
                size={15}
                color={show ? style.ButtonColor : style.borderColor}
              />
            </View>
          </View>

          <View
            style={styles.iSection}
            onLayout={() => {
              setShow(true);
            }}>
            <View style={styles.sec1}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 15,
                  marginLeft: 10,
                }}>
                <View style={styles.sec1i}>
                  <Icon
                    name="caretup"
                    type="ant-design"
                    size={20}
                    color={style.testColor2}
                  />
                  <Texto
                    fontSize={1.8}
                    style={styles.textSecl1}
                    text={positiveVotes}
                  />
                </View>

                <View style={styles.sec1i}>
                  <Icon
                    name="caretdown"
                    type="ant-design"
                    size={20}
                    style={{ marginTop: -5 }}
                    color={style.testColor}
                  />
                  <Texto
                    fontSize={1.8}
                    style={styles.textSecl1}
                    text={negativeVotes}
                  />
                </View>

                <View style={styles.sec1i}>
                  <Icon
                    name="wechat"
                    type="ant-design"
                    size={20}
                    color={style.paragraphColor}
                  />
                  <Texto
                    fontSize={1.8}
                    style={styles.textSecl1}
                    text={item.children}
                  />
                </View>
              </View>

              <TouchableOpacity
                style={styles.btnLock}
                onPress={() => {
                  setModal(true);
                  openModal();
                  setAuthor(item.author);
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                  }}>
                  <Texto
                    fontSize={2.3}
                    style={{
                      textTransform: "capitalize",
                      color: style.paragraphColor,
                    }}
                    text={item.author.slice(0, 10)}
                  />
                </View>
                <Icon
                  name="user"
                  type="ant-design"
                  size={20}
                  color={style.ButtonColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  const keyExtractor = (item, index) => "key" + index;
  const renderItem = ({ item }) => <Item item={item} navigation={navigation} />;
  const openModal = () => {
    modalRef?.current?.present();
  };

  return (
    <View style={{ backgroundColor: style.mainBackgroundColor }}>
      <Headers
        navigation={() => navigation.openDrawer()}
        name2={"Publications"}
        name={"Last "}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 5,
        }}>
        <View style={{ width: "60%" }}>
          <TextInput
            placeholder="What are we looking for today at Hive ?"
            placeholderTextColor={style.borderColor}
            cursorColor={style.ButtonColor}
            selectionColor={style.ButtonColor}
            inputMode="search"
            onChangeText={(text) => debouncedSearch(text)}
            style={{
              width: "100%",
              height: 35,
              alignItems: "center",
              marginLeft: 10,
              borderBottomWidth: 1,
              borderColor: style.ButtonColor,
              color: style.paragraphColor,
            }}
          />
        </View>

        <View
          style={{
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TouchableOpacity
            onPress={() => setSearch("hivecuba")}
            style={{
              backgroundColor: style.ButtonColor,
              borderRadius: 15,
              width: "100%",
              flexDirection: "row",
              gap: 5,
              height: 30,
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Texto
              style={{ color: style.paragraphColor }}
              fontSize={1.9}
              text={"Hive Cuba"}
            />
            <Image
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                objectFit: "contain",
              }}
              source={{
                uri: "https://cusoft.tech/wp-content/uploads/2024/03/512c7db0-2c2c-4735-ac74-2feb6595bce8.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlotingBotton
        icons={{
          icon1: {
            action: () =>
              Alert.alert(
                "Uppppppsss",
                "Los anuncios de la Comunidad en Hive estan temporalmente desabilitados hasta la fase Beta de Polaris."
              ),
            name: "notification",
          },
          icon2: {
            action: () =>
              Alert.alert(
                "Uppppppsss",
                "El algoritmo de Hive esta temporalmente desabilitado hasta la fase Beta de Polaris."
              ),
            name: "gift",
          },
          icon3: {
            action: () =>
              Alert.alert(
                "Uppppppsss",
                "La busqueda por usuario esta temporalmente desabilitada hasta la fase Beta de Polaris."
              ),
            name: "search1",
          },
        }}
      />

      <FlatList
        contentContainerStyle={{
          gap: 15,
          marginTop: 10,
          minWidth: "100%",
          minHeight: "100%",
          paddingBottom: 150,
        }}
        data={posts}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        removeClippedSubviews={true}
        windowSize={10}
        max
        render
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />

      {modal && <GetBasicInfoForUser user={author} ref={modalRef} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: "100%",
    backgroundColor: style.mainBackgroundColor2,
    borderRadius: 15,
  },
  container2: {
    padding: 5,
  },
  cimg: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    color: style.paragraphColor,
  },
  text: {
    color: style.paragraphColor,
    textAlign: "center",
  },
  iSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  sec1: {
    width: "94%",
    marginHorizontal: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sec1i: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  textSecl1: {
    color: style.borderColor,
    marginTop: 5,
  },
  btnLock: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  pay: {
    color: style.paragraphColor,
  },
});

export default React.memo(HivePosts);
