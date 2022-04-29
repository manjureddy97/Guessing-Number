import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';


function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)

    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        // console.log('Pressed');
        const chooseNumber = parseInt(enteredNumber)

        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            // show alert...
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 to 99',
                [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]
            )

            return;
        }
        console.log('ValidNUmber!');
    }
    return (
        <View style={styles.inputContaine}>
            <TextInput
                placeholder='Enter NUmber'
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='node'
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}

            />

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>

                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>

                </View>
            </View>

        </View>


    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContaine: {
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b021f',
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

    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',

    },
    buttonsContainer: {
        flexDirection: 'row'

    },
    buttonContainer: {
        flex: 1
    }
})