import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export const ListPicker = ({ item, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <Text>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
