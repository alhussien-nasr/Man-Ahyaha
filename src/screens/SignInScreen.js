import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { app, authantication } from "../firebase/firebase-config";
import { getAuth, signInWithPhoneNumber ,AdditionalUserInfo} from "firebase/auth";

import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { Appmodal } from "../components/Appmodal";
import { Screen } from "../components/Screen";

export const SignInScreen = ({ navigation }) => {
  console.log(navigation);
  const [visible, setVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const recaptchaVerifier = useRef(null);
  console.log(AdditionalUserInfo)
  
  return (
    <Screen style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        attemptInvisibleVerification={true}
      />

      <Text style={styles.text}>تسجيل الدخول</Text>
      <Image style={styles.img} source={require("../assets/Group3187.png")} />
      <View style={styles.shape} />

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <AppInput
            onChangeText={(val) => setPhoneNumber(val)}
            textAlign="right"
            placeholder="رقم الجوال"
          />
        </View>
        <View style={styles.input}>
          <AppInput textAlign="right" placeholder="كلمة المرور" />
        </View>
        <View style={styles.btn}>
          <AppButton
            onPress={() =>
              signInWithPhoneNumber(
                authantication,
                phoneNumber,
                recaptchaVerifier.current
              )
                .then((confirmationResult) => {
                  console.log(confirmationResult);
                })
                .catch((error) => {
                  console.log('err',error);
                })
            }
            title="تسجيل الدخول"
          />
        </View>
        <TouchableOpacity
          style={styles.forgetPass}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.textRed}>نسيت كلمة المرور ؟</Text>
        </TouchableOpacity>
        <View style={[styles.register, styles.direction]}>
          <TouchableOpacity onPress={() => navigation.navigate("regester")}>
            <Text style={styles.textRed}>سجل الان</Text>
          </TouchableOpacity>
          <Text>ليس لديك حساب ؟</Text>
        </View>
      </View>
      <Appmodal
        visible={visible}
        animationType="fade"
        transparent={true}
        onPress={() => setVisible(false)}
      >
        <Image style={styles.modalImg} source={require("../assets/lock.png")} />
        <View style={styles.modalInput}>
          <AppInput textAlign="right" placeholder="رقم الجوال" />
        </View>
        <View style={styles.modalbtn}>
          <AppButton title="استعادة كلمة المرور" />
        </View>
      </Appmodal>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ED4A4A",
    flex: 1,
    alignItems: "center",
  },
  img: { marginTop: 28, marginBottom: 55 },
  text: { marginTop: 14 },
  inputContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    width: "80%",
    marginBottom: 20,
  },
  btn: { width: "80%", marginTop: 20, marginBottom: 40 },
  register: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  textRed: { color: "red" },
  forgetPass: { marginBottom: 45 },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },
  modalImg: { marginVertical: 40 },
  modalInput: {
    width: "60%",
    marginBottom: 35,
  },
  modalbtn: {
    width: "80%",
  },
  shape: {
    position: "absolute",
    zIndex: 0,
    top: 300,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    transform: [{ scaleX: 5 }, { scaleY: 2 }],
  },
  direction: {
    flexDirection: Platform.OS === "android" ? "row-reverse" : "row",
  },
});
