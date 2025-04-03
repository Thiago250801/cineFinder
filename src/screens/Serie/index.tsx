import { Header } from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";
import ListSerie from "../../components/ListSerie";


export const Serie = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ListSerie />
    </SafeAreaView>
  );
};
