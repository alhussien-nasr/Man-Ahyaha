import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Screen } from "../components/Screen";
import { AppDropDown } from "../components/AppDropDown";
import { AppPicker } from "../components/AppPicker";
import { AppCounter } from "../components/AppCounter";
import { AppSelector } from "../components/AppSelector";
import { color } from "../config/color";
import { AppButton } from "../components/AppButton";
import { ListPicker } from "../components/ListPicker";
import { db, authantication } from "../firebase/firebase-config";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { add } from "react-native-reanimated";

export const AddReqScreen = ({ navigation }) => {
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");
  const [target, setTarget] = useState(1);
  const [bloodDonation, setBloodDonation] = useState(true);
  const [platelets, setPlatelets] = useState(false);
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  const donation = collection(db, "donation");
  const users = collection(db, "users");

  console.log(type);
  console.log(city);
  console.log(hospital);
  console.log(target);
  console.log(platelets);
  console.log(bloodDonation);
  console.log(description);
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let date = `${year}/${month}/${day}`;

  useEffect(async () => {
    const data = await getDocs(users);
    console.log(authantication.currentUser.email);
    data.docs
      .filter((i) => i.data().email === authantication.currentUser.email)
      .forEach((i) => setUser(i.data()));
  }, []);
  console.log(user);
  return (
    <Screen style={styles.container}>
      <View style={styles.row}>
        <AppDropDown val={type} style={styles.rowDropDown} title="فصيلة الدم">
          <AppPicker
            items={bloodType}
            onPick={(item) => setType(item)}
            type={type}
          />
        </AppDropDown>
        <AppDropDown val={city} style={styles.rowDropDown} title=" المدينة">
          <FlatList
            data={cityList}
            renderItem={({ item }) => (
              <ListPicker item={item.name} onPress={() => setCity(item.name)} />
            )}
          />
        </AppDropDown>
      </View>
      <AppDropDown title="اسم المستشفي" style={styles.vSpace} val={hospital}>
        <FlatList
          data={hospitalList}
          renderItem={({ item }) => (
            <ListPicker
              item={item.name}
              onPress={() => setHospital(item.name)}
            />
          )}
        />
      </AppDropDown>
      <AppCounter
        style={styles.vSpace}
        counter={target}
        onDecres={() => setTarget(target - 1)}
        onIncres={() => setTarget(target + 1)}
      />
      <View style={styles.row}>
        <AppSelector
          style={styles.selector}
          title="تبرع بالدم"
          isChecked={bloodDonation}
          disableBuiltInState
          onPress={() => {
            setBloodDonation(true);
            setPlatelets(false);
          }}
        />
        <AppSelector
          style={styles.selector}
          title="الصفائح الدموية"
          isChecked={platelets}
          disableBuiltInState
          onPress={() => {
            setBloodDonation(false);
            setPlatelets(true);
          }}
        />
      </View>
      <Text style={{ textAlign: "right", marginBottom: 20, marginTop: 10 }}>
        طبيعة المرض ( حالته )
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          onChangeText={(val) => setDescription(val)}
        />
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
      <AppButton
        style={styles.btn}
        title="اضافة الطلب"
        onPress={() => {
          addDoc(donation, {
            type,
            city,
            hospital,
            target,
            donationType:
              bloodDonation === true ? "تبرع بالدم" : "الصفائح الدموية",
            description,
            id: authantication.currentUser.uid,
            date,
            userName: user.name,
            phone: user.phoneNumber,
          });
          navigation.navigate("MyRequestsScreen");
        }}
      />
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
const cityList = [
  {
    name: "جدة",
  },
  {
    name: "الدمام",
  },
];

const hospitalList = [
  {
    name: "مدينة الأمير سلطان الطبية العسكرية",
  },
  {
    name: "مستشفي خميس مشيط العسكري    ",
  },
  {
    name: "مستشفى الملك فهد للقوات المسلحة",
  },
  {
    name: "مستشفى الملك فيصل التخصصي ومركز الأبحاث",
  },
  {
    name: "مستشفى الملك فيصل التخصصي ",
  },
  {
    name: "مستشفى الملك فهد التخصصي ",
  },
];
