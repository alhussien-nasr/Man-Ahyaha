import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";

import { color } from "../config/color";
import { Screen } from "../components/Screen";
import { Details } from "../components/Details";
import { AppButton } from "../components/AppButton";

export const RequestNameScreen = () => {
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
          <Text>kkkkkk</Text>
          <AppButton style={styles.donationBtn} title="التبرع للمريض" />

          <Details title="فصيلة الدم" subTitle="B+" style={styles.space} />
          <Details
            title="مطلوب ٥ تبرعات دم"
            progress
            target={6}
            numper={1}
            style={styles.space}
          />
          <Details title="مستشفي الاخلاص الدولي" style={styles.space} />
          <Details title="رقم الملف" style={styles.space} />
          <View style={{ width: "100%" }}>
            <Text style={styles.text}>طبيعة المرض ( حالته )</Text>
          </View>
        </View>
        <View style={styles.condationContainer}>
          <Text style={styles.condation}>
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
            طبيعة المرض ( حالته ) طبيعة المرض ( حالته ) طبيعة المرض ( حالته )
          </Text>
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
