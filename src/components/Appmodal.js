import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
} from "react-native";
import { BlurView } from "expo-blur";

export const Appmodal = ({ children, onPress, visible }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={onPress}>
        <BlurView tint="dark" intensity={20} style={styles.modalContainer}>
          <TouchableWithoutFeedback style={styles.container}>
            <View style={styles.container}>{children}</View>
          </TouchableWithoutFeedback>
        </BlurView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "90%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },
});
