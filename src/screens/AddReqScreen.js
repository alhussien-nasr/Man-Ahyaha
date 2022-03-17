import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Screen } from "../components/Screen";
import { AppDropDown } from "../components/AppDropDown";
import { AppPicker } from "../components/AppPicker";
import { AppCounter } from "../components/AppCounter";
import { AppSelector } from "../components/AppSelector";
import { color } from "../config/color";
import { AppButton } from "../components/AppButton";

export const AddReqScreen = () => {
  const [type, setType] = useState();
  const [counter, setCounter] = useState(0);
  console.log(counter);
  console.log(type);

  return (
    <Screen style={styles.container}>
      <View style={styles.row}>
        <AppDropDown style={styles.rowDropDown} title="فصيلة الدم">
          <AppPicker items={bloodType} onPick={(item)=>setType(item)} type={type}/>
        </AppDropDown>
        <AppDropDown
          style={styles.rowDropDown}
          title=" المدينة"
          Option={AppPicker}
        />
      </View>
      <AppDropDown title="اسم المستشفي" style={styles.vSpace} />
      <AppCounter
        style={styles.vSpace}
        counter={counter}
        onDecres={() => setCounter(counter - 1)}
        onIncres={() => setCounter(counter + 1)}
      />
      <View style={styles.row}>
        <AppSelector style={styles.selector} title="تبرع بالدم" />
        <AppSelector style={styles.selector} title="الصفائح الدموية" />
      </View>
      <Text style={{ textAlign: "right", marginBottom: 20, marginTop: 10 }}>
        طبيعة المرض ( حالته )
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} multiline />
      </View>
      <View style={[styles.row]}>
        <Text style={styles.text}>
          اشعار كافة المستخدمين - حاملي الفصيلة الدموية المحددة فقط
        </Text>
        <BouncyCheckbox
          size={30}
          fillColor=""
          ImageComponent={() => <Image source={require("../assets/ok.png")} />}
          iconStyle={{ borderRadius: 10, borderColor: color.primiry }}
        />
      </View>
      <AppButton style={styles.btn} title="اضافة الطلب" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  rowDropDown: { width: "45%" },
  container: { paddingHorizontal: 30 },
  selector: { width: "45%" },
  vSpace: { marginBottom: 17 },
  inputContainer: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 30,
    marginBottom: 40,
  },
  text: { color: color.midGray, width: "80%", textAlign: "right" },
  btn: { marginTop: 30 },
  input: { flex: 1, textAlign: "right", lineHeight: 25 },
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
