import { ActivityIndicator, View } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181C24",
      }}
    >
      <ActivityIndicator size="large" color="#00A3FF" />
    </View>
  );
}
