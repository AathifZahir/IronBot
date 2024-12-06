import React, { useState, useRef } from "react";
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
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

export default function VerifyScreen() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const navigation = useNavigation(); // Initialize the navigation hook

  const handleVerification = () => {
    const enteredCode = code.join(""); // Combine the digits into a single string
    console.log("Verifying code: ", enteredCode);

    // Add your verification logic here

    // Navigate to the Info screen after verification
    navigation.navigate("Info");
  };

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (text.length === 0 && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1].focus();
    } else {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
    }
  };

  const handleResendCode = () => {
    console.log("Resending code...");
    // Add your resend code logic here
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
            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subtitle}>
              Enter the verification code sent to your email to proceed
            </Text>

            <View style={styles.pinContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.pinInput}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace") {
                      handleBackspace(digit, index);
                    }
                  }}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.resendButton}
              onPress={handleResendCode}
            >
              <Text style={styles.resendButtonText}>Resend Code</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleVerification}
            >
              <Text style={styles.buttonText}>Verify</Text>
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
    marginBottom: 20,
    fontFamily: "DMSans-Bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 60,
    fontFamily: "DMSans-Regular",
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 0,
  },
  pinInput: {
    width: 80,
    height: 90,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    color: "#fff",
    fontSize: 55,
    textAlign: "center",
    fontFamily: "DMSans-SemiBold",
    borderWidth: 1,
    borderColor: "#fff",
  },
  resendButton: {
    top: 10,
    marginBottom: 30,
    alignItems: "center",
  },
  resendButtonText: {
    fontSize: 18,
    color: colors.primary,
    fontFamily: "DMSans-SemiBold",
    marginBottom: 150,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 30, // Adjusted to be 30 from the bottom
    left: 0,
    right: 0, // Center horizontally
    marginHorizontal: "auto", // Horizontal centering
    marginHorizontal: 40,
  },

  buttonText: {
    fontSize: 18,
    color: "#252525",
    fontFamily: "DMSans-Bold",
  },
});
