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
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

export default function InfoScreen() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);

  // Use the navigation hook
  const navigation = useNavigation();

  // Function to navigate to VerifyScreen
  const navigateToVerifyScreen = () => {
    console.log("Proceed button pressed"); // Log the button press
    navigation.navigate("Verify"); // Navigate to the VerifyScreen
  };

  const navigateToHome = () => {
    console.log("Proceed button pressed"); // Log the button press
    navigation.navigate("Home"); // Navigate to the VerifyScreen
  };

  // Function to increase value
  const increaseValue = (value, setValue, increment) => {
    setValue(parseFloat((value + increment).toFixed(1)));
  };

  // Function to decrease value
  const decreaseValue = (value, setValue, decrement) => {
    setValue(parseFloat((value - decrement).toFixed(1)));
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
            <Text style={styles.title}>Finish Setup</Text>
            <Text style={styles.subtitle}>
              Enter your personal details to create your account
            </Text>

            {/* Height Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Height (cm)</Text>
              <View style={styles.inputContainer}>
                <TouchableOpacity
                  onPress={() => decreaseValue(height, setHeight, 0.1)}
                >
                  <Text style={styles.adjustButton}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder="Height (cm)"
                  placeholderTextColor="#fff"
                  keyboardType="numeric"
                  value={height.toString()}
                  onChangeText={(text) => setHeight(parseFloat(text))}
                />
                <TouchableOpacity
                  onPress={() => increaseValue(height, setHeight, 0.1)}
                >
                  <Text style={styles.adjustButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Weight Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Weight (kg)</Text>
              <View style={styles.inputContainer}>
                <TouchableOpacity
                  onPress={() => decreaseValue(weight, setWeight, 0.1)}
                >
                  <Text style={styles.adjustButton}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder="Weight (kg)"
                  placeholderTextColor="#fff"
                  keyboardType="numeric"
                  value={weight.toString()}
                  onChangeText={(text) => setWeight(parseFloat(text))}
                />
                <TouchableOpacity
                  onPress={() => increaseValue(weight, setWeight, 0.1)}
                >
                  <Text style={styles.adjustButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Age Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Age</Text>
              <View style={styles.inputContainer}>
                <TouchableOpacity onPress={() => decreaseValue(age, setAge, 1)}>
                  <Text style={styles.adjustButton}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder="Age"
                  placeholderTextColor="#fff"
                  keyboardType="numeric"
                  value={age.toString()}
                  onChangeText={(text) => setAge(parseInt(text, 10))}
                />
                <TouchableOpacity onPress={() => increaseValue(age, setAge, 1)}>
                  <Text style={styles.adjustButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={navigateToHome}>
              <Text style={styles.buttonText}>Proceed</Text>
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
    height: "80%",
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
    marginBottom: 80,
    fontFamily: "DMSans-Regular",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "DMSans-Bold",
    marginBottom: 5,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    color: "#fff",
    fontSize: 26,
    fontFamily: "DMSans-SemiBold",
    textAlign: "center",
  },
  adjustButton: {
    fontSize: 44,
    color: colors.tertiary,
    paddingHorizontal: 40,
    fontFamily: "DMSans-Bold",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    bottom: 0, // Adjusted to be 30 from the bottom
    left: 0,
    right: 0, // Center horizontally
    marginHorizontal: "auto", // Horizontal centering
    marginHorizontal: 40,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "#252525",
    fontFamily: "DMSans-Bold",
  },
});
