import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../config/color";

export const Details = () => {
  return (
    <View style={styles.container}>
      <Text>فصيلة الدم</Text>
      <View style={styles.typecontainer}>
        <Text style={styles.type}>B</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: color.lightGray,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 40,
    justifyContent: "space-between",
  },
  typecontainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.midGray,
    justifyContent: "center",
    alignItems: "center",
  },
  type: { color: color.primiry, fontSize: 18 },
});
