import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

export default function GeneralStatsForUser({ user }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.hive.blog";
    const q = {
      jsonrpc: "2.0",
      method: "condenser_api.get_accounts",
      params: [[user]],
      id: 1,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(q),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => setData(json.result))
      .catch((error) => console.error("Error:", error));
  }, [user]);

  console.log(data);

  return (
    <ScrollView style={{ height: "100%", width: "100%" }}>
      <View>
        {data?.map((item, index) => (
          //<Text key={index}>{JSON.stringify(item)}</Text>
          <View></View>
        ))}
      </View>
    </ScrollView>
  );
}
