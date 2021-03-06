import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


function StartGameScreen({ onPickNumber }) {
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
                'Invalid Number', // TItle
                'Number has to be between 1 to 99',  // Message
                [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]   // Button
            )

            return;
        }
        // console.log('ValidNUmber!');
        onPickNumber(chooseNumber)
    }
    // console.log(confirmInputHandler);
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>

                <InstructionText>Enter Number</InstructionText>
                <TextInput
                    // placeholder='Enter NUmber'
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

            </Card>
        </View>


    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    // inputContaine: {
    //     padding: 16,
    //     marginTop: 36,
    //     backgroundColor: Colors.primary800,
    //     marginHorizontal: 24,
    //     borderRadius: 10,
    //     elevation: 8,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 8 },
    //     shadowRadius: 6,
    //     shadowOpacity: 0.2567,
    //     alignItems: 'center',
    //     justifyContent: 'center',


    // },
    // instructionText: {
    //     color: Colors.primary900,
    //     fontSize: 24

    // },

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