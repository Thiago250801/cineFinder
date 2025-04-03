import {Text, StyleSheet, View } from "react-native";
import { Header } from "../components/Header";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>404 - Page Not Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#0A0F1A",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    padding: 24,
  },
});
