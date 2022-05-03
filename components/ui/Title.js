import { Text, StyleSheet } from 'react-native';


function Title({ children }) {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}


export default Title;






const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ffffff',
        height: 50,
        padding: 10,
        fontFamily: 'open-sans-bold'
    }
})