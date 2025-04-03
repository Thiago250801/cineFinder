import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerList: {
        backgroundColor: '#141C2F',
        marginVertical: 15,
        paddingVertical: 10,
        borderRadius: 8
    },

    list: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },

    titleList: {
        color: '#00A3FF',
        fontWeight: 700,
        fontSize: 20,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        textTransform: 'uppercase',
        letterSpacing: 0.3,
        marginLeft: 15,
        marginBottom: 15
    },

    cardItem: {
        width: 140,
        marginRight: 15,
        borderRadius: 8,
        backgroundColor: '#1E2A44',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8
    },

    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },

    cardTitle: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 500,
        textTransform: 'capitalize',
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 15,

        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,

        letterSpacing: 0.3
    
    }

})