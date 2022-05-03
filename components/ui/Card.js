import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';



function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>

    )
}


export default Card;



const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 10,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 6,
        shadowOpacity: 0.2567,
        alignItems: 'center',
        justifyContent: 'center',


    },
})