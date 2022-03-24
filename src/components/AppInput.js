import { StyleSheet, TextInput } from "react-native";
import React from "react";

export const AppInput = ({ onChangeText, ...rest }) => {
  return (
    <TextInput
      autoCorrect={false}
      autoCapitalize={false}
      autoComplet={false}
      textAlign="right"
      {...rest}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#EFEFEF",
    borderRadius: 30,
    paddingRight: 20,
  },
});
