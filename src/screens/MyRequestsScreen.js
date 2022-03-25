import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Card } from "../components/Card";
import { color } from "../config/color";
import { Screen } from "../components/Screen";
import AddReqButton from "../components/AddReqButton";

export const MyRequestsScreen = ({ navigation, route }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (route.params?.param) {
      setList((li) => [...li, ...route.params.param]);
      console.log("ss", list);
    }
  }, [route.params?.param]);

  console.log("ss", list);
  return (
    <Screen style={styles.container}>
      <View style={styles.redBackGround} />
      <View style={styles.row}>
        <AddReqButton onPress={() => navigation.navigate("AddReqScreen")} />
        <View>
          <Text style={styles.numstyle}>{list.length}</Text>
          <Text style={styles.text}>طلب</Text>
        </View>
      </View>
      {list && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          style={{ width: "100%" }}
          data={list}
          renderItem={({ item }) => {
            const { city } = item;
            console.log("item", item);
            return (
              <View style={{ alignItems: "center" }}>
                <Card item={item} numper={0} />
              </View>
            );
          }}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  redBackGround: {
    width: "100%",
    height: "33%",
    position: "absolute",
    backgroundColor: color.primiry,
    top: 0,
    zIndex: -1,
  },
  row: {
    marginTop: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 10,
    height: 130,
    backgroundColor: "rgba(255,255,255,.1)",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 60,
  },
  numstyle: { fontSize: 24, color: "white" },
  text: { color: "white" },
});
