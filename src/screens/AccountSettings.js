import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

import { Screen } from "../components/Screen";
import { color } from "../config/color";
import { AppInput } from "../components/AppInput";
import { AppPicker } from "../components/AppPicker";
import { AppButton } from "../components/AppButton";

export const AccountSettings = () => {
  const [type, setType] = useState();

  return (
    <Screen style={styles.container}>
      <View style={styles.imgContianer}>
        <Image style={styles.img} source={require("../assets/Group8.png")} />
      </View>
      <View style={styles.inputContainer}>
        <AppInput placeholder="رقم الجوال" />
        <AppInput placeholder="كلمة المرور" />
        <AppInput placeholder="الاسم" />
        <AppInput placeholder="البريد الالكتروني" />
      </View>
      <View style={styles.text}>
        <Text>اختر فصيلة الدم</Text>
      </View>
      <AppPicker items={bloodType} onPick={setType} type={type} />
      <View style={styles.btnContainer}>
        <AppButton title="حفظ التعديلات" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  imgContianer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.midGray,
  },
  img: { width: 70, height: 70 },
  inputContainer: {
    width: "80%",
    height: "43%",
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "space-between",
  },
  text: { alignItems: "flex-end", width: "80%", marginBottom: 20 },
  btnContainer: { width: "90%", marginTop: 20 },
});
const bloodType = [
  {
    name: "A+",
  },
  {
    name: "B+",
  },
  {
    name: "AB+",
  },
  {
    name: "O+",
  },
  {
    name: "A-",
  },
  {
    name: "B-",
  },
  {
    name: "AB-",
  },
  {
    name: "O-",
  },
];
