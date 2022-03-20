import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import { color } from "../config/color";
import { Screen } from "../components/Screen";
import {Details} from "../components/Details";

export const RequestNameScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.redBackGround} />
      <View style={styles.container}>
      <Details/>

      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" },
  redBackGround: {
    width: "100%",
    height: "33%",
    position: "absolute",
    backgroundColor: color.primiry,
    top: 0,
    zIndex: -1,
  },
  container: {
    width: "90%",
    backgroundColor: "white",
    height: "100%",
    marginTop: 100,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 20,
    paddingHorizontal:20
  },
});
