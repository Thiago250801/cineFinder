import { Home } from "./src/screens/Home";
import { Header } from "./src/Components/Header";
import { StatusBar } from "expo-status-bar";
import { styles } from "./src/screens/Styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
      <>
        <StatusBar style="auto"/>
        <Home />
      </>
  );
}
