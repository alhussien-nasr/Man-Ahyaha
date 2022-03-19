import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { MenuProvider } from "react-native-popup-menu";
import { authantication } from "./src/firebase/firebase-config";
import { AppDrawer } from "./src/navigation/AppDrawer";

export default function App() {
  const Drawer = createDrawerNavigator();
  const [user, setUser] = useState();

  useEffect(() => {
    const foo = () =>
      authantication.onAuthStateChanged((user) => setUser(user));
    return foo();
  }, []);
  console.log(user);

  return (
    <MenuProvider>
      <NavigationContainer>
        {/* <Drawer.Navigator
          screenOptions={({ navigation }) => ({
            headerLeft: () => null,
            headerRight: () => (
              <MaterialCommunityIcons
                onPress={() => navigation.toggleDrawer()}
                style={{ position: "absolute", right: 5 }}
                name="menu"
                size={24}
                color={"black"}
              />
            ),
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
            component={Home}
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
        </Drawer.Navigator> */}
        <AppDrawer />
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
