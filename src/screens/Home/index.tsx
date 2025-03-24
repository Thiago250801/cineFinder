import { Text, View } from "react-native";
import { styles } from "../Styles/styles";
import { Header } from "../../Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";


export const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    )
};
