import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const IconComponent = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: "#ED4A4A",
        }}
      ></View>
    </View>
  );
};
export const AppSelector = ({ style, title , onPress}) => {
  return (
    <BouncyCheckbox
      style={[styles.container, style]}
      onPress={onPress}
      textStyle={{ textDecorationLine: "none", color: "black", fontSize: 13 }}
      text={title}
      size={40}
      fillColor={""}
      iconStyle={{ borderColor: "#ED4A4A" }}
      ImageComponent={() => <IconComponent />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    borderWidth: 1,
    borderColor: "#EFEFEF",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  },
});
