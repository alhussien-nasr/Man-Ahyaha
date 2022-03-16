import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export const AppCounter = ({ counter , onIncres,onDecres ,style}) => {
  return (
    <View style={[styles.container,style]}>
      <TouchableOpacity onPress={counter===0? null :onDecres}>
        <AntDesign name="minuscircle" size={35} color="#ED4A4A" />
      </TouchableOpacity>
      {counter ? (
        <Text>{counter}</Text>
      ) : (
        <Text style={styles.text}>عدد التبرعات المطلوبة</Text>
      )}
      <TouchableOpacity onPress={onIncres}>
        <AntDesign name="pluscircle" size={35} color="#ED4A4A" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    borderColor: "#EFEFEF",
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 35,
    height: 35,
    backgroundColor: "#ED4A4A",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "#A8A8A8" },
});
