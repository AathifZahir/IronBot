import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler"; // Ensure this is at the top

import LaunchScreen from "./pages/launchScreen";
import LoginScreen from "./pages/loginScreen";
import RegisterScreen from "./pages/registerScreen";
import VerifyScreen from "./pages/verifyScreen";
import InfoScreen from "./pages/infoScreen";
import ForgotScreen from "./pages/forgotScreen";
import VerifyCodeScreen from "./pages/verifyCodeScreen";
import ResetScreen from "./pages/resetScreen";
import HomeScreen from "./pages/homeScreen";
import ChatScreen from "./pages/chatScreen";

const Stack = createStackNavigator();

export default function App() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Light": require("./assets/fonts/DMSans-Light.ttf"),
    "DMSans-SemiBold": require("./assets/fonts/DMSans-SemiBold.ttf"),
  });

  // Display a loading spinner until fonts are ready
  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <ActivityIndicator size="large" color="#d7ff00" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Launch"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Launch" component={LaunchScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="VerifyPin" component={VerifyCodeScreen} />
        <Stack.Screen name="Reset" component={ResetScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
