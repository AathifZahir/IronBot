import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { colors } from "../assets/colors";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "bot",
      text: "Hi, I’m FitBot! I can help you create a personalized workout plan. Let’s get started. What’s your primary fitness goal?",
    },
  ]);
  const [input, setInput] = useState("");

  const navigation = useNavigation(); // Initialize navigation

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      type: "user",
      text: input,
    };
    setMessages([...messages, userMessage]);

    // Clear input field
    setInput("");

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "Thanks for sharing! I’ll create a workout plan tailored to your goal.",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const renderMessage = ({ item }) => {
    if (item.type === "bot") {
      return (
        <View style={styles.messageRow}>
          <Image
            source={require("../assets/Imgs/Avtr.png")} // Local bot avatar image
            style={styles.avatar}
          />
          <View style={styles.robotMessage}>
            <Text style={styles.robotMessageText}>{item.text}</Text>
          </View>
        </View>
      );
    }
    return (
      <View
        style={[
          styles.messageRow,
          { justifyContent: "flex-end", alignItems: "center" },
        ]}
      >
        <View style={styles.userMessage}>
          <Text style={styles.userMessageText}>{item.text}</Text>
        </View>
        <Image
          source={require("../assets/Imgs/avtruser.jpg")} // Local user avatar image
          style={styles.avatar}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
        >
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Custom Workouts</Text>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="clock" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Image
          source={require("../assets/Imgs/bg1.png")} // Local background image
          style={styles.backgroundImage}
        />
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          style={styles.chatContainer}
        />
      </View>

      <View style={styles.footer}>
        <TextInput
          placeholder="Write something"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={handleSendMessage} // Handle enter key
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.iconButton}>
          <FontAwesome name="paper-plane" size={24} color="#84cc16" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    height: 90,
    paddingHorizontal: 16,
    backgroundColor: "#1a1a1a",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.5,
  },
  chatContainer: {
    width: "90%",
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 32,
    marginHorizontal: 8, // Adjust spacing
  },
  robotMessage: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 16,
    maxWidth: "80%",
  },
  robotMessageText: {
    color: "#000",
    fontSize: 16,
    lineHeight: 22,
  },
  userMessage: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    maxWidth: "80%",
    alignSelf: "flex-end",
  },
  userMessageText: {
    color: "#000",
    fontSize: 16,
    lineHeight: 22,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginRight: 8,
    paddingVertical: 8,
  },
  iconButton: {
    padding: 8,
    backgroundColor: "transparent",
    borderRadius: 50, // Circular button
    justifyContent: "center",
    alignItems: "center",
  },
});
