import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,

    backgroundColor: '#1A2233',

    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',

    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    zIndex: 10000,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',

    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  pandaTitle: {
    color: '#ffffff',
  },

  flixTitle: {
    color: '#00A3FF',
    fontStyle: 'italic',
  },

  menuButton: {
    backgroundColor: '#00A3FF',
    paddingVertical: 6,
    paddingHorizontal: 9,
    borderRadius: 8,
  },

  // O que mudou ? Novo estilo modalOverlay
  modalOverlay: {
    flex: 1,
    // Define um fundo preto semi-transparente (50% de opacidade) para dar destaque ao menu e escurecer o resto
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 

    // Posiciona o conteúdo (menu) no topo da tela, mantendo-o alinhado verticalmente desde o início
    justifyContent: 'flex-start', 

   // Centraliza o menu horizontalmente, criando um efeito equilibrado e simétrico na tela, pelo menos essa é a intenção
    alignItems: 'center', 
    
  },

  menuDropdown: {
    backgroundColor: '#2A3347',

    width: "97%", // Define uma largura fixa para o menu
    marginTop: 60, // Espaço para não sobrepor o header
    marginHorizontal: 4,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    paddingVertical: 15,
    paddingHorizontal: 10,

    borderRadius: 8,
  },

  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',

    paddingVertical: 10,
    paddingHorizontal: 6,
  },

  menuItemText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
