import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { MenuProvider } from "react-native-popup-menu";
import { AppDrawer } from "./src/navigation/AppDrawer";

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </MenuProvider>
  );
}
