import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import React, { useState, useRef } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  signInWithPhoneNumber,
  User,
  createUserWithEmailAndPassword,
  linkWithPhoneNumber,
} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { app, authantication, db } from "../firebase/firebase-config";
import { Screen } from "../components/Screen";
import { AppInput } from "../components/AppInput";
import { AppPicker } from "../components/AppPicker";
import { Appmodal } from "../components/Appmodal";
import { AppButton } from "../components/AppButton";
import { doc, setDoc } from "firebase/firestore";

export const RegisterScreen = () => {
  const recaptchaVerifier = useRef(null);

  const [accept, setAccept] = useState(false);
  const [visible, setVisible] = useState(false);

  const [phoneNumber, setPhoneNumper] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [user, setUser] = useState();

  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();

  const [type, setType] = useState();
  console.log(verificationId);
  console.log(phoneNumber);
  const auth = getAuth();
  console.log("user", user);

  return (
    <Screen style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        attemptInvisibleVerification={true}
      />
      {/* {!verificationId ? ( */}
      <>
        <View style={styles.inputContainer}>
          <AppInput
            placeholder="رقم الجوال"
            onChangeText={(val) => setPhoneNumper(val)}
          />
        </View>
        <View style={styles.inputContainer}>
          <AppInput
            placeholder="كلمة المرور"
            onChangeText={(val) => setPassword(val)}
          />
        </View>
        <View style={styles.inputContainer}>
          <AppInput placeholder="الاسم" onChangeText={(val) => setName(val)} />
        </View>
        <View style={styles.inputContainer}>
          <AppInput
            placeholder="البريد الالكتروني"
            onChangeText={(val) => setEmail(val)}
          />
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
          <AppButton
            title={"التسجيل"}
            // onPress={async () => {
            //   try {
            //     const phoneProvider = new PhoneAuthProvider(auth);
            //     const verificationId = await phoneProvider.verifyPhoneNumber(
            //       phoneNumber,
            //       recaptchaVerifier.current
            //     );
            //     setVerificationId(verificationId);
            //   } catch (err) {
            //     console.log(err);
            //   }
            // }}
            onPress={() => {
              const auth = getAuth();
              createUserWithEmailAndPassword(auth, email, password)
                .then((val) => {
                  setUser(val.user);
                  setDoc(doc(db, "users", val.user.uid), {
                    email,
                    name,
                    phoneNumber,
                  }).then(() => console.log("Document updated"));
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />
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
      {/* ) : (
      <View style={styles.inputContainer}>
        <AppInput
          onChangeText={(val) => setVerificationCode(val)}
          placeholder="رقم الجوال"
        />
        <Button
          title="Confirm Verification Code"
          disabled={!verificationId}
          onPress={async () => {
            try {
              const credential = PhoneAuthProvider.credential(
                verificationId,
                verificationCode
              );
              await signInWithCredential(auth, credential);
            } catch (err) {
              console.log("err", err);
            }
          }}
        />
      </View>
      )} */}
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
