import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../config/color";
import CircularProgress from "react-native-circular-progress-indicator";

export const Details = ({ title, subTitle, numper, progress, target ,style}) => {
  return (
    <View style={[styles.container,style]}>
      <Text>{title}</Text>
      {subTitle && (
        <View style={styles.typecontainer}>
          <Text style={styles.type}>{subTitle}</Text>
        </View>
      )}
      {progress && (
        <CircularProgress
          value={numper}
          radius={25}
          duration={2000}
          textColor={"black"}
          maxValue={target}
          textStyle={{ bottom: 6, right: 7, fontSize: 16 }}
          subtitle={`/`}
          title={target}
          activeStrokeColor={color.primiry}
          activeStrokeWidth={2}
          inActiveStrokeWidth={0}
          subtitleStyle={styles.subtitleStyle}
          titleStyle={styles.titleStyle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: color.lightGray,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 40,
    justifyContent: "space-between",
  },

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
});
