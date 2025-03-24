import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "rgba(26, 34, 51, 1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  pandaTitle: {
    color: "#FFFFFF",
  },

  flixTitle: {
    color: "rgba(0, 163, 255, 0.62)",
    fontStyle: "italic",
  },

  menuButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 163, 255, 0.62)",
    borderRadius: 5,
  },

  menuVisible: {
    position: "absolute",
    top: 60,
    left: 30,
    right: 10,
    backgroundColor: "#2A3347",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.5)",
  },

  menuText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 700,
  },
});
