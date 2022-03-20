import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddReqScreen } from "../screens/AddReqScreen";
import { Home } from "../screens/Home";
import { MyRequestsScreen } from "../screens/MyRequestsScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { RequestNameScreen } from "../screens/RequestsDetailsScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="regester" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export const AddReqStack = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="RequestNameScreen"
        component={RequestNameScreen}
        options={{ title: "اسم الطلب" }}
      />
    </Stack.Navigator>
  );
};
export const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => HeaderIcon(navigation),
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "الرئيسية" }}
      />
      <Stack.Screen
        name="RequestNameScreen"
        component={RequestNameScreen}
        options={{ title: "اسم الطلب" }}
      />
    </Stack.Navigator>
  );
};
