import { Ionicons } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { usePathname, useRouter } from "expo-router";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();

  const handleVisible = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <StatusBar backgroundColor="#252A34" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          <Text style={styles.cineTitle}>Cine</Text>
          <Text style={styles.finderTitle}>Finder</Text>
        </Text>

        <TouchableOpacity onPress={handleVisible} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#ffffff" />
        </TouchableOpacity>

        {/* Modal for dropdown menu */}
        <Modal
          transparent={true}
          visible={menuVisible}
          animationType="fade"
          onRequestClose={handleVisible}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={handleVisible}
          >
            <View style={styles.menuDropdown}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  if (pathName !== "/") {
                    router.push("/");
                  }
                }}
              >
                <Text style={styles.menuItemText}>Filmes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  router.push("/Serie");
                }}
              >
                <Text style={styles.menuItemText}>Séries</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
};
