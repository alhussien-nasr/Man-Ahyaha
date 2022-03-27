import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";

import { color } from "../config/color";

export const Card = ({ item, numper, details, onPress, target }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.card}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require("../assets/Group8.png")} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Text>{item.userName}</Text>
            <Text>{item.date}</Text>
          </View>
          <View style={styles.locationContainer}>
            <SimpleLineIcons name="location-pin" size={18} color={color.gray} />
            <Text style={{ color: color.midGray }} numberOfLines={1}>
              {item.city + " " + item.hospital}
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.typecontainer}>
              <Text style={styles.type}>{item.type}</Text>
            </View>
            {!details ? (
              <>
                <View style={styles.DonationsReqContainer}>
                  <Text style={styles.num}> {numper}</Text>
                  <Text>{item.donationType} </Text>
                </View>
                <View style={styles.Progress}>
                  <CircularProgress
                    value={item.numper}
                    radius={25}
                    duration={2000}
                    textColor={"black"}
                    maxValue={item.target}
                    textStyle={{ bottom: 6, right: 7, fontSize: 16 }}
                    subtitle={`/`}
                    title={item.target}
                    activeStrokeColor={color.primiry}
                    activeStrokeWidth={2}
                    inActiveStrokeWidth={0}
                    subtitleStyle={styles.subtitleStyle}
                    titleStyle={styles.titleStyle}
                  />
                  {item.numper === item.target ? (
                    <Text style={{ alignSelf: "flex-end" }}>تمت</Text>
                  ) : null}
                </View>
              </>
            ) : (
              <View style={styles.phoneNumper}>
                <Text style={styles.phoneNumperText}>{item.phone}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      {details && (
        <View style={styles.details}>
          <Text style={styles.detailsText}>عرض التفاصيل</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    minHeight: 140,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor: color.lightGray,
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: "row-reverse",
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
  Progress: { flexDirection: "row-reverse" },
  details: {
    width: "100%",
    height: 30,
    backgroundColor: "#FF3643",
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "center",
  },
  detailsText: {
    textAlign: "center",
    color: "white",
  },
  phoneNumper: {
    width: 150,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.midGray,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
  },
  phoneNumperText: { color: "#FF3643" },
});
