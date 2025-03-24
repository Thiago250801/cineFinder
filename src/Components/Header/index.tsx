import { Entypo } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setMenuVisible(!menuVisible);  
  }

  return (
    <View style={styles.header}>
      {/* Nome do Projeto */}
      <Text style={styles.headerTitle}>
        <Text style={styles.pandaTitle}>Panda</Text>
        <Text style={styles.flixTitle}>Flix</Text>
      </Text>

      {/* Botão de Menu  */}
      <TouchableOpacity style={styles.menuButton}>
        <Entypo name="menu" size={24} color="white" onPress={ handleVisible }/>
      </TouchableOpacity>

      {
        menuVisible && (
            <View  style={styles.menuVisible}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Filme</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Série</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Anime</Text>
                </TouchableOpacity>
            </View>
        )
        
    }
    </View>
  );
};
