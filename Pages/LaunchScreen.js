import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../assets/colors";

export default function LaunchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={require("../assets/Imgs/bg1.png")} // Local image
        style={styles.backgroundImage}
      />

      <LinearGradient
        colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"]}
        style={styles.gradientOverlay}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
      />

      <View style={styles.content}>
        <Image
          source={require("../assets/Imgs/Logo.png")} // Local image
          style={styles.logo}
        />

        <Text style={styles.title}>IronBot</Text>

        <Text style={styles.subtitle}>
          Unleash Your Potential with IronBot, Your Fitness Companion!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don’t have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "110%",
    resizeMode: "cover",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 200,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontFamily: "DMSans-Bold",
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "DMSans-Regular",
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "DMSans-SemiBold",
    color: "#000",
    fontSize: 18,
  },
  signupText: {
    fontFamily: "DMSans-Regular",
    color: "#fff",
    marginTop: 20,
    fontSize: 14,
  },
  signupLink: {
    color: colors.primary,
    fontFamily: "DMSans-SemiBold",
  },
});
