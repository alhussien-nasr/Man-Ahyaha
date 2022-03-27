import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Image } from "react-native";
import { AddReqScreen } from "../screens/AddReqScreen";
import { Home } from "../screens/Home";
import { MyRequestsScreen } from "../screens/MyRequestsScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { RequestsDetailsScreen } from "../screens/RequestsDetailsScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SettingsScreen } from "../screens/SettingsScreen";
import { color } from "../config/color";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const HeaderIcon = (navigation) => (
  <MaterialCommunityIcons
    onPress={() => navigation.toggleDrawer()}
    style={{ position: "absolute", right: 5 }}
    name="menu"
    size={24}
    color={"black"}
  />
);
export const AuthStack = ({ navigation }) => {
    console.log(navigation)
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: "تسجيل الدخول",
          headerStyle: { backgroundColor: color.primiry },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="regester"
        component={RegisterScreen}
        options={{
          title: "بيانات الحساب",
          headerTransparent: true,
          headerLeft: () => (
            <MaterialIcons
              name="keyboard-arrow-left"
              onPress={() => navigation.navigate('SignInScreen')}
              size={40}
              color={color.primiry}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export const AddReqStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => HeaderIcon(navigation),
        headerTintColor: "white",
        headerStyle: { backgroundColor: color.primiry },
      }}
    >
      <Stack.Screen
        name="MyRequestsScreen"
        component={MyRequestsScreen}
        options={{ title: "طلباتي" }}
      />
      <Stack.Screen
        name="AddReqScreen"
        component={AddReqScreen}
        options={{ title: "اضافة طلب تبرع" }}
      />
    </Stack.Navigator>
  );
};
export const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => HeaderIcon(navigation),
        headerTintColor: "white",
        headerStyle: { backgroundColor: color.primiry },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "الرئيسية",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("SettingsScreen")}
            >
              <Image source={require("../assets/Group3104.png")} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="RequestsDetailsScreen"
        component={RequestsDetailsScreen}
        options={{ title: "اسم الطلب" }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: "حسابي" }}
      />
    </Stack.Navigator>
  );
};
