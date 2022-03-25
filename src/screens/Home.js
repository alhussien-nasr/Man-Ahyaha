import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../config/color";
import { Screen } from "../components/Screen";
import { AppDropDown } from "../components/AppDropDown";
import { Card } from "../components/Card";

export const Home = ({ navigation }) => {
  console.log(navigation)
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
      {/* <Card
        onPress={() => navigation.navigate("RequestNameScreen")}
        type={"A"}
        numper={4}
        city=" مكة المكرمة"
        hospital="56  فندق الساعه الدور الخامس"
        target={4}
      /> */}
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
