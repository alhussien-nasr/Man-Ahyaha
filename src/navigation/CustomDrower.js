import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export const CustomDrower = (props) => {
  return (
    <DrawerContentScrollView style={styles.drower} {...props}>
      <View style={styles.imgContainer}>
        <Image resizeMode='contain' style={styles.img} source={require("../assets/Group3189.png")} />
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drower: { flexDirection: "row-reverse" },
  imgContainer: { marginBottom: 30  },
  img:{width:140,height:170}
});
