import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";

import { color } from "../config/color";

export const Card = () => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require("../assets/Group8.png")} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text>hussien nasr</Text>
          <Text>2022/3/3</Text>
        </View>
        <View style={styles.locationContainer}>
          <SimpleLineIcons name="location-pin" size={18} color={color.gray} />
          <Text style={{color:color.midGray}} numberOfLines={1}>56 مكة المكرمة فندق الساعه الدور الخامس</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.typecontainer}>
            <Text style={styles.type}>B+</Text>
          </View>
          <View style={styles.DonationsReqContainer}>
            <Text style={styles.num}> ٥</Text>
            <Text >تبرعات صفائح </Text>
          </View>
          <View style={styles.Progress}>

          <CircularProgress
            value={4}
            radius={25}
            duration={2000}
            textColor={"black"}
            maxValue={5}
            textStyle={{ bottom: 6, right: 7, fontSize: 16 }}
            subtitle={`/`}
            title={5}
            activeStrokeColor={color.primiry}
            activeStrokeWidth={2}
            inActiveStrokeWidth={0}
            subtitleStyle={styles.subtitleStyle}
            titleStyle={styles.titleStyle}
          />
          <Text style={{alignSelf:'flex-end'}}>تمت</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 140,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    paddingTop: 25,
    borderColor: color.lightGray,
    paddingHorizontal: 10,
  },
  imgContainer: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.midGray,
    marginLeft: 5,
  },
  detailsContainer: { flex: 1 },
  row: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 8,
  },
  locationContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "70%",
    alignSelf: "flex-end",
    textAlign: "right",
    marginTop: 5,
  },
  locationText: { color: color.gray, fontSize: 10 },
  typecontainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.midGray,
    justifyContent: "center",
    alignItems: "center",
  },
  type: { color: color.primiry, fontSize: 18 },
  DonationsReqContainer: {
    width: 110,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.midGray,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  num: { color: color.primiry },
  subtitleStyle: {
    position: "absolute",
    top: 12,
    fontSize: 20,
    fontWeight: "300",
    right: 7,
  },
  titleStyle: {
    position: "absolute",
    top: 22,
    fontSize: 16,
    right: 0,
    color: color.primiry,
  },
  Progress:{flexDirection:'row-reverse'}
});
