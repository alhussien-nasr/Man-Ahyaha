import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { color } from "../config/color";
import { Screen } from "../components/Screen";
import { AppDropDown } from "../components/AppDropDown";
import { Card } from "../components/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { useIsFocused } from "@react-navigation/native";

export const Home = ({ navigation }) => {
  const [list, setList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(async () => {
    const docSnap = await getDocs(collection(db, "donation"));

    if (docSnap) {
      setList(docSnap.docs.map((i) => ({ ...i.data(), docId: i.id })));
    } else {
      console.log("No such document!");
    }
  }, [isFocused]);
  console.log(list);
  return (
    <Screen style={styles.container}>
      <View style={styles.redBackGround} />
      <View style={styles.row}>
        <AppDropDown
          color="white"
          style={styles.dropDownOne}
          title="فصيلة الدم"
        />
        <AppDropDown
          color="white"
          style={styles.dropDownTwo}
          title=" المدينة"
        />
      </View>
      {list && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          style={{ width: "100%" }}
          data={list}
          keyExtractor={(item) => item.docId}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <Card
                onPress={() =>
                  navigation.navigate("RequestsDetailsScreen", {
                    docId: item.docId,
                  })
                }
                item={item}
              />
            </View>
          )}
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
  dropDownOne: {
    backgroundColor: "rgba(255,255,255,.3)",
    width: "45%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: 55,
    borderWidth: 0,
  },
  row: {
    marginTop: 90,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  dropDownTwo: {
    backgroundColor: "rgba(255,255,255,.3)",

    width: "45%",
    borderWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: 55,
  },
});
