import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

export const AppPicker = ({items,onPick , type}) => {

  return (
    <View style={styles.container}>
      <FlatList
      scrollEnabled={false}
        data={items}
        numColumns={4}
        ItemSeparatorComponent={() => <View style={styles.separetor} />}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={()=>onPick(item.name)}
            >
              <View
                style={[
                  styles.list,
                  type === item.name ? styles.selected : null,
                ]}
              >
                <Text
                  style={[
                    styles.text,
                    type === item.name ? styles.textSelected : null,
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#A2A2A2",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal:5
  },
  text: {
    color: "#A2A2A2",
    fontSize: 14,
  },
  separetor: { height: 20 },
  selected: { backgroundColor: "#ED4A4A" },
  textSelected: { color: "white" },
  container:{height:130 }
});
