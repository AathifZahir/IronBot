import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function LaunchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Set the status bar content to white */}
      <StatusBar style="light" />

      {/* Background Image */}
      <Image
        source={{
          uri: "https://storage.googleapis.com/a1aa/image/5UbKVrMidUIOKt12S6I0lhJn75dDX2KWIwp0gefQ6XccC23TA.jpg",
        }}
        style={styles.backgroundImage}
      />

      {/* Bottom-to-Top Gradient Overlay */}
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"]}
        style={styles.gradientOverlay}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
      />

      {/* Content Overlay */}
      <View style={styles.content}>
        {/* Logo */}
        <Image
          source={{
            uri: "https://storage.googleapis.com/a1aa/image/f7xeDzWTjfKrAoTcMboAolYEz4MQt53bFxRTMpDNHyz2EsvnA.jpg",
          }}
          style={styles.logo}
        />

        {/* Title */}
        <Text style={styles.title}>IronBot</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Unleash Your Potential with IronBot, Your Fitness Companion!
        </Text>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Signup Prompt */}
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
    height: "100%",
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
  },
  button: {
    backgroundColor: "#d7ff00",
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
    color: "#d7ff00",
    fontFamily: "DMSans-SemiBold",
  },
});
