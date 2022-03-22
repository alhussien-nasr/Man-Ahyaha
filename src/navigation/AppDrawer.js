import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AddReqStack, AuthStack, HomeStack } from "./AppStack";

import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Home } from "../screens/Home";
import { CustomDrower } from "./CustomDrower";
import { AboutAppScreen } from "../screens/AboutAppScreen";
import { color } from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { authantication } from "../firebase/firebase-config";

const Drawer = createDrawerNavigator();
export const AppDrawer = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const foo = () =>
      authantication.onAuthStateChanged((user) => setUser(user));
    return foo();
  }, []);
  console.log(user);

  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: { right: 0, width: "55%" },
        drawerItemStyle: { flexDirection: "row-reverse" },
        drawerActiveTintColor: color.primiry,
        drawerActiveBackgroundColor: null,
      })}
      drawerContent={(props) => <CustomDrower {...props} />}
    >
      <Drawer.Screen
        options={{
          title: "الرئيسية",
          drawerIcon: ({ color }) => (
            <AntDesign
              style={{ position: "absolute", right: 5 }}
              name="home"
              size={24}
              color={color}
            />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Drawer.Screen
        name="AboutAppScreen"
        component={AboutAppScreen}
        options={{
          title: "عن التطبيق",
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
        name="AddReqStack"
        component={AddReqStack}
        options={{
          title: "طلباتي",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <AntDesign
              style={{ position: "absolute", right: 5 }}
              name="gift"
              size={24}
              color={color}
            />
          ),
        }}
      />
      {!user && (
        <Drawer.Screen
          name="AuthStack"
          component={AuthStack}
          options={{
            title: "تسجيل الدخول",
            header: () => null,
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
      )}
    </Drawer.Navigator>
  );
};
