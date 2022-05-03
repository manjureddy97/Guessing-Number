import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Alert } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';



function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);




    function generateRandomBetween(min, max, exclude) {
        const randNum = Math.floor(Math.random() * (max - min)) + min;

        if (randNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return randNum;
        }
    }

    let minBoundary = 1;
    let maxBoundary = 100;



    function nextGuessHandler(direction) {  // direction => lower, greate

        if (
            (direction === 'lower' && currentGuess < userNumber)
            ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", "You know that this is wrong.....", [
                { text: "Sorry!", style: 'cancel' },
            ])

            return

        }


        if (direction === 'lower') {
            maxBoundary === currentGuess;
            // const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess)
        } else {
            minBoundary === currentGuess + 1;

        }

        // console.log(maxBoundary, minBoundary);
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)

        setCurrentGuess(newRndNumber)


    }
    return (
        <View style={styles.screen}>
            <Title>Oppenen't Guess</Title>

            <NumberContainer>{currentGuess}</NumberContainer>


            {/* GUESS */}

            <View>


                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}> +</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>-</PrimaryButton>
                </View>
                {/* +  - */}
            </View>
            <View>
                <Text>LOG ROUNDS</Text>
            </View>
        </View>

    )
}


export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        height: 50,
        padding: 10
    }
})