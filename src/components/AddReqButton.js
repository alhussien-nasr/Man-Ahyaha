import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { color } from "../config/color";

const AddReqButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>اضافة طلب</Text>
      <AntDesign name="pluscircleo" size={24} color={color.primiry} />
    </TouchableOpacity>
  );
};

export default AddReqButton;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 50,
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  text: { color: color.primiry },
});
