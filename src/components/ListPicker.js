import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export const ListPicker = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({});
