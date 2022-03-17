import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { MenuProvider } from "react-native-popup-menu";
import { SimpleLineIcons } from "@expo/vector-icons";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { SignInScreen } from "./src/screens/SignInScreen";
import { Home } from "./src/screens/Home";
import { CustomDrower } from "./src/navigation/CustomDrower";
import AboutAppScreen from "./src/screens/AboutAppScreen";
import { authantication } from "./src/firebase/firebase-config";
import { MyRequestsScreen } from "./src/screens/MyRequestsScreen";
import { color } from "./src/config/color";
import {AddReqScreen} from './src/screens/AddReqScreen'
export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState();
  useEffect(() => {
    const foo = () =>
      authantication.onAuthStateChanged((user) => setUser(user));
    return foo();
  }, []);
  authantication.onAuthStateChanged((user) => setUser(user));
  console.log(user);
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="sss" component={SignInScreen} />
        <Stack.Screen name="regester" component={RegisterScreen} />
      </Stack.Navigator>
    );
  };
  const AddReqStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="طلباتي" component={MyRequestsScreen} />
        <Stack.Screen name="اضافة طلب تبرع" component={AddReqScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <MenuProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: "right",
            drawerStyle: { right: 0, width: "55%" },
            drawerItemStyle: { flexDirection: "row-reverse" },
            drawerActiveTintColor: color.primiry,
            drawerActiveBackgroundColor: null,
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
            name="طلباتي"
            component={AddReqStack}
            options={{
              headerShown:false,
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
              name="تسجيل الدخول"
              component={AuthStack}
              options={{
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
          <Drawer.Screen
            name="logout"
            component={() => (
              <Button title="logout" onPress={() => authantication.signOut()} />
            )}
          />
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
