import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Background Image */}
        <Image
          source={require("../assets/Imgs/bg1.png")} // Local image
          style={styles.backgroundImage}
        />

        {/* Gradient Overlay */}
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"]}
          style={styles.gradientOverlay}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
        />

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <View style={styles.header}>
            <FontAwesome5 name="bars" size={24} color="#fff" />
            <FontAwesome5 name="clock" size={24} color="#fff" />
          </View>

          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <View>
              <Text style={styles.welcomeText}>Welcome Zach!</Text>
              <Text style={styles.subtitle}>
                Let's see what can I do for you?
              </Text>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/a1aa/image/Sa4yDnWRJS6lARTEaZwsFhtf3sBXs3odaXch8lW3GjOCYH8JA.jpg",
              }}
              style={styles.profileImage}
            />
          </View>

          {/* Personalized Fitness Plan and Other Cards */}
          <View style={styles.cardContainer}>
            {/* Personalized Fitness Plan Card */}
            <TouchableOpacity
              style={styles.personalizedCard}
              onPress={() => navigation.navigate("Chat")}
            >
              <MaterialCommunityIcons
                name="arrow-top-right"
                size={18}
                color="#fff"
                style={styles.cardIcon}
              />
              <View style={styles.cardContent}>
                <FontAwesome5 name="cog" size={46} color="#fff" />
                <Text style={styles.cardText}>
                  Let's Personalize your fitness plan{"\n"}with SmartFit
                </Text>
              </View>
            </TouchableOpacity>

            {/* Regular Cards (2 per row) */}
            <View style={styles.row}>
              {/* Custom Workouts Card */}
              <TouchableOpacity
                style={styles.regularCard}
                onPress={() => navigation.navigate("Chat")}
              >
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={18}
                  color="#fff"
                  style={styles.cardIcon}
                />
                <FontAwesome5 name="dumbbell" size={36} color="#fff" />
                <Text style={styles.cardText}>Custom Workouts</Text>
              </TouchableOpacity>

              {/* Steps Card */}
              <TouchableOpacity
                style={styles.regularCard}
                onPress={() => navigation.navigate("Chat")}
              >
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={18}
                  color="#fff"
                  style={styles.cardIcon}
                />
                <FontAwesome5 name="shoe-prints" size={36} color="#fff" />
                <Text style={styles.stepsNumber}>230</Text>
                <Text style={styles.stepsLabel}>Steps</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              {/* Motivation Card */}
              <TouchableOpacity
                style={styles.regularCard}
                onPress={() => navigation.navigate("Chat")}
              >
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={18}
                  color="#fff"
                  style={styles.cardIcon}
                />
                <FontAwesome5 name="bed" size={36} color="#fff" />
                <Text style={styles.cardText}>Motivation</Text>
              </TouchableOpacity>

              {/* Custom Recipes Card */}
              <TouchableOpacity
                style={styles.regularCard}
                onPress={() => navigation.navigate("Chat")}
              >
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={18}
                  color="#fff"
                  style={styles.cardIcon}
                />
                <FontAwesome5 name="utensils" size={36} color="#fff" />
                <Text style={styles.cardText}>Custom Recipes</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Ask Anything Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate("Chat")}
            >
              Ask Anything
            </Text>
            <FontAwesome5 name="comment-dots" size={18} color="#000" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
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
  scrollContainer: {
    top: 40,
    padding: 20,
    paddingBottom: 40, // Prevents content from touching the bottom edge
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  cardContainer: {
    flexDirection: "column", // Stack the cards vertically
    marginTop: 20,
  },
  row: {
    flexDirection: "row", // Display two cards in a row
    justifyContent: "space-between", // Space the cards evenly
  },
  personalizedCard: {
    height: 220, // Increased height for the personalized card
    backgroundColor: "#333",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  regularCard: {
    width: "48%", // Each card takes up 48% of the container width
    backgroundColor: "#333",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cardIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  stepsNumber: {
    fontSize: 48,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 10,
  },
  stepsLabel: {
    fontSize: 18,
    color: "#fff",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#d0ff00",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    marginRight: 10,
  },
});
