import { Text, View, Image, StyleSheet } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onRestartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />

            </View>

            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highligh}>{roundsNumber}</Text> rounds to guess the number {' '}
                <Text style={styles.highligh}>{userNumber}</Text>.
            </Text>

            <PrimaryButton onPress={onRestartNewGame}>Start New Game</PrimaryButton>

        </View>

    )
}



export default GameOverScreen;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: '#525454',
        overflow: 'hidden',
        margin: 38
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24

    },
    highligh: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary
    }

})