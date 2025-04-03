import { Header } from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";
export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};
