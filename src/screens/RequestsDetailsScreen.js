import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

import { color } from "../config/color";
import { Screen } from "../components/Screen";
import { Details } from "../components/Details";
import { AppButton } from "../components/AppButton";
import { db } from "../firebase/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

export const RequestsDetailsScreen = ({ route, navigation }) => {
  const [list, setList] = useState([]);
  const [donation, setDonation] = useState(list.number);
  const [disabled, setDisabled] = useState(false);

  console.log(donation);
  const { docId } = route.params;
  console.log(docId);
  const docRef = doc(db, "donation", docId);
  useEffect(async () => {
    const res = await getDoc(docRef);
    setList(res.data());
    setDonation(res.data().number);
  }, [donation]);

  useEffect(() => {
    if (list.number < donation) {
      updateDoc(docRef, { number: donation });
      navigation.navigate("Home");
    }
  }, [donation]);

  console.log(docId);
  console.log(donation);
  console.log(list);

  return (
    <Screen style={styles.screen}>
      <View style={styles.redBackGround} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={require("../assets/Group8.png")}
            />
          </View>
          <Text>{list.userName}</Text>
          <AppButton
            style={styles.donationBtn}
            title="التبرع للمريض"
            disabled={disabled}
            onPress={() => {
              list.number === list.target
                ? setDisabled(true)
                : setDisabled(false);
              setDonation((i) => i + 1);

              // navigation.navigate('Home')
            }}
          />

          <Details
            title="فصيلة الدم"
            subTitle={list.type}
            style={styles.space}
          />
          <Details
            title={`مطلوب ${list.target} تبرعات دم`}
            progress
            target={list.target}
            numper={list.number ? list.number : 0}
            style={styles.space}
          />
          <Details title={list.hospital} style={styles.space} />
          <Details title="رقم الملف" style={styles.space} />
          <View style={{ width: "100%" }}>
            <Text style={styles.text}>طبيعة المرض ( حالته )</Text>
          </View>
        </View>
        <View style={styles.condationContainer}>
          <Text style={styles.condation}>{list.description}</Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" },
  redBackGround: {
    width: "100%",
    height: "33%",
    position: "absolute",
    backgroundColor: color.primiry,
    top: 0,
    zIndex: -1,
  },
  container: {
    alignItems: "center",
  },
  scrollContainer: {
    width: "90%",
    backgroundColor: "white",
    height: "100%",
    marginTop: 100,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  imgContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.midGray,
    marginVertical: 15,
  },
  img: { width: 70, height: 70 },
  donationBtn: { width: 130, height: 45, marginVertical: 20 },
  space: { marginBottom: 10 },
  text: {
    textAlign: "right",
    marginVertical: 10,
  },
  condationContainer: {
    width: "100%",
    minHeight: 200,
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 30,
    marginBottom: 40,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  condation: { flex: 1, textAlign: "right", lineHeight: 25 },
});
