import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { colors } from "../assets/colors";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [securePassword, setSecurePassword] = useState(true);

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Login button pressed");
    navigation.navigate("Home");
  };

  const handleSignUp = () => {
    console.log("Sign Up button pressed");
    navigation.navigate("Register"); // Navigate to Register screen
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password button pressed");
    navigation.navigate("Forgot"); // Navigate to Forgot screen
  };

  const togglePasswordVisibility = () => {
    setSecurePassword((prev) => !prev);
  };

  return (
    <ImageBackground
      source={require("../assets/Imgs/bg2.png")}
      style={styles.backgroundImage}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formContainer}>
            <View style={styles.logContainer}>
              <Text style={styles.title}>Login</Text>
              <View style={styles.signUpTextContainer}>
                <Text style={styles.subtitle}>Don’t have an account? </Text>
                <TouchableOpacity onPress={handleSignUp}>
                  <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={securePassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={togglePasswordVisibility}
                >
                  <Icon
                    name={securePassword ? "eye-off" : "eye"}
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    height: "110%",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.secondary,
    height: "70%",
    width: "100%",
    paddingHorizontal: 40,
    paddingVertical: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,

    // Shadow for Android
    elevation: 5,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 10,
    fontFamily: "DMSans-Bold",
  },
  signUpTextContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "DMSans-Regular",
  },
  signUpText: {
    fontSize: 16,
    color: colors.primary, // Primary color for Sign Up text
    fontFamily: "DMSans-Bold",
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
    fontFamily: "DMSans-Regular",
    borderWidth: 1,
    borderColor: "#fff",
    bottom: 10,
  },
  passwordContainer: {
    position: "relative",
    marginBottom: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: colors.primary,
    textAlign: "right",
    marginTop: 5,
    padding: 0,
    fontFamily: "DMSans-Regular",
  },
  logContainer: {
    marginBottom: 140,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    marginHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    color: "#252525",
    fontFamily: "DMSans-Bold",
  },
});
