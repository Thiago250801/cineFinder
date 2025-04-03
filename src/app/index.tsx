import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/Header";
import ListMovie from "../components/ListMovies";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <ListMovie />
    </View>
  );
}
