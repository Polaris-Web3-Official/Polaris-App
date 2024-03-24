import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Linking, Image } from "react-native";
import Headers from "../Comuns/Header";
import GlobalStyle from "../../style/Global";
import Markdown, { RenderRule } from "react-native-markdown-display";
import { Icon } from "react-native-elements";
import Texto from "../Comuns/Text";
import { getComments } from "../Hive/Functions/getCommets";

const style = GlobalStyle();

export default function HivePostDetails({ navigation, route }) {
  const { post } = route.params;
  const json = JSON.parse(post.json_metadata);

  const markdownStyles = {
    body: { color: "white", borderRadius: 15, lineHeight: 24 },
    heading1: { color: style.ButtonColor, borderRadius: 15 },
  };

  const rules = {
    blockquote: (node, children, parent, styles) => {
      return (
        <View
          style={{
            backgroundColor: style.mainBackgroundColor2,
            borderRadius: 15,
            padding: 10,
            marginVertical: 5,
            color: style.borderColor,
          }}>
          {children}
        </View>
      );
    },

    link: (node, children, parent, styles) => {
      return (
        <Text
          key={node.key}
          style={{
            backgroundColor: style.ButtonColor,
            letterSpacing: 1,
          }}
          onPress={() => Linking.openURL(node.attributes.href)}>
          {node.children[0].content}
        </Text>
      );
    },

    table: (node, children, parent, styles) => {
      return (
        <View
          style={{
            backgroundColor: style.mainBackgroundColor2,
            borderRadius: 15,
          }}>
          {children}
        </View>
      );
    },

    hr: (node, children, parent, styles) => {
      return (
        <View
          style={{
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
          }}
        />
      );
    },
  };

  const commentsRules = {
    ...rules,
    image: (node, children, parent, styles) => {
      return (
        <Image
          key={node.key}
          style={{
            width: "98%",
            height: 100,
            objectFit: "cover",
            marginHorizontal: "1%",
            borderRadius: 10,
          }}
          source={{ uri: node.attributes.src }}
        />
      );
    },
  };

  const [comments, setComments] = useState(null);

  useEffect(() => {
    getComments(post.author, post.permlink)
      .then((fetchedComments) => setComments(fetchedComments))
      .catch((error) => console.error(error));
  }, [post.author, post.permlink]);

  return (
    <View
      style={{
        backgroundColor: style.mainBackgroundColor,
        borderRadius: 15,
        paddingBottom: 70,
      }}>
      <Headers
        navigation={() => navigation.goBack()}
        name2={post.title.slice(7, 14) + " ..."}
        name={post.title.slice(0, 7)}
        iconMenu="arrowleft"
        typeIconMenu="ant-design"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: "100%", borderRadius: 15, padding: 10 }}>
        <Markdown style={markdownStyles} rules={rules}>
          {post.body}
        </Markdown>

        <View
          style={{
            width: "100%",
            borderRadius: 15,
            marginVertical: 20,
          }}>
          <ScrollView
            horizontal
            style={{
              width: "100%",
              flexDirection: "row",
              gap: 10,
            }}>
            {json?.tags.map((tag, index) => {
              return (
                <Texto
                  style={{
                    padding: 5,
                    marginHorizontal: 5,
                    backgroundColor:
                      index === 0 ? style.ButtonColor : style.borderColor,
                    borderRadius: 7,
                    color: style.paragraphColor,
                  }}
                  text={"#" + tag}
                />
              );
            })}
          </ScrollView>
        </View>

        <View
          style={{
            width: "100%",
            height: 3,
            borderRadius: 5,
            backgroundColor: style.ButtonColor,
          }}></View>

        {/* Comentarios del post */}
        {comments && comments.length > 0 ? (
          <View
            style={{
              gap: 10,
              marginVertical: 20,
            }}>
            {comments.map((comment, index) => {
              return (
                <View
                  key={index + String(Math.random())}
                  style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 40, height: 40, borderRadius: 40 }}
                    source={{
                      uri: `https://images.hive.blog/u/${comment.author}/avatar`,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                      backgroundColor: style.mainBackgroundColor2,
                      borderRadius: 15,
                      padding: 10,
                      width: "82%",
                    }}>
                    <Text
                      style={{
                        color: style.ButtonColor,
                        fontSize: 18,
                        textTransform: "capitalize",
                      }}>
                      {comment.author}
                    </Text>
                    <Markdown style={markdownStyles} rules={commentsRules}>
                      {comment.body}
                    </Markdown>

                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: 10,
                      }}>
                      <Icon
                        name="like2"
                        type="ant-design"
                        size={20}
                        color={style.testColor2}
                      />
                      <Text
                        style={{
                          color: style.borderColor,
                          marginTop: 5,
                          fontSize: 14,
                        }}>
                        {comment.net_votes}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
