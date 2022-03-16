import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import {authanticatopn} from '../firebase/firebase-config'
// import { signInWithPhoneNumber } from "firebase/auth";

import { Screen } from "../components/Screen";
import { AppInput } from "../components/AppInput";
import { AppPicker } from "../components/AppPicker";
import { Appmodal } from "../components/Appmodal";
import { AppButton } from "../components/AppButton";

export const RegisterScreen = () => {
  const [accept, setAccept] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState();
  const [code, setCode] = useState();
  const [otpInput, setOtpInput] = useState(false);
  console.log(accept);
  return (
    <Screen style={styles.container}>
      {!otpInput ? (
        <>
          <View style={styles.inputContainer}>
            <AppInput placeholder="رقم الجوال" />
          </View>
          <View style={styles.inputContainer}>
            <AppInput placeholder="كلمة المرور" />
          </View>
          <View style={styles.inputContainer}>
            <AppInput placeholder="الاسم" />
          </View>
          <View style={styles.inputContainer}>
            <AppInput placeholder="البريد الالكتروني" />
          </View>
          <View style={styles.typeContainer}>
            <Text style={styles.textType}>اختر فصيلة الدم</Text>
            <AppPicker items={bloodType} onPick={setType} type={type} />
          </View>
          <View style={styles.checkContainer}>
            <View style={styles.check}>
              <BouncyCheckbox
                size={35}
                onPress={() =>
                  accept === false ? setAccept(true) : setAccept(false)
                }
                fillColor="white"
                ImageComponent={() => (
                  <Image source={require("../assets/ok.png")} />
                )}
                iconStyle={{ borderColor: "#ED4A4A" }}
                style={styles.checkBox}
              />
              <Text>أوافق على الشروط والأحكام</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <Text style={styles.conditionsbtnText}>الشروط والأحكام</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <AppButton title={"التسجيل"} />
          </View>
          <Appmodal visible={visible} onPress={() => setVisible(false)}>
            <AppButton
              disabled
              style={styles.modalBtn}
              title={"الشروط و الأحكام"}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ height: 350, width: 250 }}
            >
              <TouchableWithoutFeedback touchSoundDisabled disabled>
                <Text style={styles.modalText}>
                  الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و
                  الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام
                  الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و
                  الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام
                  الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و
                  الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام
                  الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و
                  الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام
                  الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و
                  الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام
                  الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و
                  الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام
                  الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و
                  الأحكام الشروط و الأحكام الشروط و الأحكام الشروط و الأحكام
                  الشروط و الأحكام
                </Text>
              </TouchableWithoutFeedback>
            </ScrollView>
          </Appmodal>
        </>
      ) : (
        <View style={styles.inputContainer}>
          <AppInput placeholder="رقم الجوال" />
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: { marginBottom: 25, width: "80%" },
  typeContainer: { width: "100%", alignItems: "center", padding: 20 },
  textType: {
    fontSize: 18,
    alignSelf: "flex-end",
    marginBottom: 30,
    marginRight: "10%",
  },
  checkContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    paddingRight: 30,
    marginBottom: 40,
  },
  check: { flexDirection: "row-reverse", alignItems: "center" },
  checkBox: { marginLeft: 5 },
  btnContainer: { width: "80%" },
  conditionsbtnText: { color: "#FF2B59" },
  modalBtn: { width: "80%", marginVertical: 30 },
  modalText: { lineHeight: 40 },
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
