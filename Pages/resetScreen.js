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

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  const navigation = useNavigation();

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      alert("Passwords do not match. Please try again.");
      return;
    }
    console.log("Password successfully reset!");
    navigation.navigate("Login"); // Navigate to Login screen after reset
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
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>
              Enter your new password below to reset it.
            </Text>
            {/* Password Field */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#fff"
                secureTextEntry={securePassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
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
            {/* Confirm Password Field */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                secureTextEntry={secureConfirmPassword}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
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
              onPress={handleResetPassword}
            >
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>Back</Text>
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
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
    fontFamily: "DMSans-Regular",
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
  },
  passwordContainer: {
    position: "relative",
    marginBottom: 10,
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
  backButton: {
    marginTop: 20,
    alignSelf: "center",
  },
  backText: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: "DMSans-Regular",
  },
});
