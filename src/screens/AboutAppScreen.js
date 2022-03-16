import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Screen } from "../components/Screen";

const AboutAppScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.shape} />
      <Image style={styles.img} source={require("../assets/Group3187.png")} />

      <View style={styles.about}>
        <ScrollView style={{ width: "80%" }}>
          <Text>
            عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
            التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن التطبيق عن
          </Text>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default AboutAppScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ED4A4A",
    flex: 1,
    alignItems: "center",
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

  about: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
  img: { marginTop: 38, marginBottom: 90 },
});
