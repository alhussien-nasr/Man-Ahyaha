import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddReqScreen } from "../screens/AddReqScreen";
import { MyRequestsScreen } from "../screens/MyRequestsScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { SignInScreen } from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
};
