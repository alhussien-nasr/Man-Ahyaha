import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  MenuTrigger,
  MenuOption,
  Menu,
  renderers,
  MenuOptions,
} from "react-native-popup-menu";

export const AppDropDown = ({
  title,
  style,
  children,
  OptionStyles,
  color = "#ED4A4A",
  val,
}) => {
  return (
    <Menu
      style={[styles.container, style]}
      renderer={renderers.Popover}
      rendererProps={{ placement: "bottom", anchorStyle: styles.anchorStyle }}
    >
      <MenuTrigger>
        <View style={[styles.trigger]}>
          <Ionicons name="chevron-down" size={30} color={color} />
          {!val ? (
            <Text style={{ color: color === "white" ? "white" : "#AAAAAA" }}>
              {title}
            </Text>
          ) : (
            <Text>{val}</Text>
          )}
        </View>
      </MenuTrigger>
      <MenuOptions  optionsContainerStyle={[styles.options, OptionStyles]}>
        <MenuOption  >{children}</MenuOption>
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    borderColor: "#EFEFEF",
    borderWidth: 1,
    borderRadius: 40,
  },
  text: { color: "#AAAAAA" },
  trigger: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  anchorStyle: {
    shadowOpacity: 0.2,
    shadowRadius: 15,
    marginTop: 10,
    width: 22,
    height: 22,
    left: -60,
  },
  options: {
    minWidth: 250,
    height: 180,
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
});
