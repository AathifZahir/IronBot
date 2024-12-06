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
import Icon from "react-native-vector-icons/Feather"; // Import icon library
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

export default function RegisterScreen() {
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  // Use the navigation hook
  const navigation = useNavigation();

  // Function to navigate to VerifyScreen
  const navigateToVerifyScreen = () => {
    console.log("Sign Up button pressed"); // Log the button press
    navigation.navigate("Verify"); // Navigate to the VerifyScreen
  };

  const togglePasswordVisibility = () => {
    setSecurePassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setSecureConfirmPassword((prev) => !prev);
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
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>
              Create your own account to save and manage your information
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#fff"
            />
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
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                secureTextEntry={secureConfirmPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={toggleConfirmPasswordVisibility}
              >
                <Icon
                  name={secureConfirmPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Verify")}
            >
              <Text
                style={styles.buttonText}
                onPress={() => navigation.navigate("Verify")}
              >
                Sign Up
              </Text>
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
    height: "110%", // Adjusted to ensure full screen height
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-end", // Keep the form at the bottom
  },
  formContainer: {
    position: "absolute", // Position the form at the bottom
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
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 40,
    fontFamily: "DMSans-Regular",
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
    fontFamily: "DMSans-Regular",
    borderWidth: 1,
    borderColor: "#fff",
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 25,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#252525",
    fontFamily: "DMSans-Bold",
  },
});
