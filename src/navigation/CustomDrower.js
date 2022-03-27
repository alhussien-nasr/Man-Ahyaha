import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";

import { getAuth, signOut } from "firebase/auth";
import { authantication } from "../firebase/firebase-config";
import { AntDesign } from "@expo/vector-icons";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

export const CustomDrower = (props) => {
  const auth = getAuth();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const foo = () =>
      authantication.onAuthStateChanged((user) => setUser(user));
    return foo();
  }, []);

  return (
    <DrawerContentScrollView style={styles.drower} {...props}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require("../assets/Group3189.png")}
        />
      </View>

      <DrawerItemList {...props} />
      {user && (
        <DrawerItem
          style={{ alignItems: "flex-end" }}
          label="logout"
          onPress={() => {
            console.log("dddd");

            signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
              });
          }}
          icon={({ color }) => (
            <AntDesign
              style={{ position: "absolute", right: 5 }}
              name="logout"
              size={24}
              color={color}
            />
          )}
        />
      )}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drower: { flexDirection: "row-reverse" },
  imgContainer: { marginBottom: 30 },
  img: { width: 140, height: 170 },
});
