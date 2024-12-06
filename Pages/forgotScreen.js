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
import { useNavigation } from "@react-navigation/native";

export default function ForgotScreen() {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const handleSendCode = () => {
    console.log("Code sent to:", email);
    // Add logic to send a reset code here
    navigation.navigate("VerifyPin"); // Navigate to Reset Password screen after sending code
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
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>
              Enter your email address to receive a reset code.
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#fff"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSendCode}>
              <Text style={styles.buttonText}>Send Code</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>Back to Login</Text>
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
    bottom: 10,
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
