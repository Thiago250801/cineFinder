import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Serie = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ padding: 16 }}>
        <Text style={{ color: "#fff", fontSize: 18 }}>
          Series Content Coming Soon...
        </Text>
      </View>
    </SafeAreaView>
  );
};
