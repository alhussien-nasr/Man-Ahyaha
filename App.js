import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Screen } from "./src/components/Screen";
import { MenuProvider } from "react-native-popup-menu";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AppPicker } from "./src/components/AppPicker";
import BasicExample from "./src/components/Test";
import { transform } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { AddReqScreen } from "./src/screens/AddReqScreen";
import { AppDropDown } from "./src/components/AppDropDown";
import { AccountSettings } from "./src/screens/AccountSettings";
import { SignInScreen } from "./src/screens/SignInScreen";
import { Home } from "./src/screens/Home";
import { color } from "./src/config/color";
import { CustomDrower } from "./src/navigation/CustomDrower";
import AboutAppScreen from "./src/screens/AboutAppScreen";
export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const MyStack = ()=>(
    <Stack.Navigator>
      <Stack.Screen name="sss" component={SignInScreen}/>
      <Stack.Screen name="regester" component={RegisterScreen} />
    </Stack.Navigator>
  );

  return (
    <MenuProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: "right",
            drawerStyle: { right: 0, width: "55%" },
            drawerItemStyle: { flexDirection: "row-reverse" },
          }}
          drawerContent={(props) => <CustomDrower {...props} />}
        >
          <Drawer.Screen
            options={{
              drawerIcon: ({ color }) => (
                <AntDesign
                  style={{ position: "absolute", right: 5 }}
                  name="home"
                  size={24}
                  color={color}
                />
              ),
            }}
            name="الرئيسية"
            component={Home}
          />
          <Drawer.Screen
            name="عن التطبيق"
            component={AboutAppScreen}
            options={{
              drawerIcon: ({ color }) => (
                <SimpleLineIcons
                  style={{ position: "absolute", right: 5 }}
                  name="info"
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="تسجيل الدخول"
            component={MyStack}
            options={{header:()=>null,
              drawerIcon: ({ color }) => (
                <AntDesign
                  style={{ position: "absolute", right: 5 }}
                  name="login"
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          {/* <Drawer.Screen name="regis" component={MyStack} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
<AntDesign name="logout" size={24} color="black" />;
const styles = StyleSheet.create({
  con: {
    width: 250,
    height: 180,
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
  anchorStyle: {
    shadowOpacity: 0.2,
    shadowRadius: 15,
    marginTop: 10,
    width: 22,
    height: 22,
    left: -60,
  },
});
const arr = [
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
