import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';


function StartGameScreen() {
    return (
        <View style={styles.inputContaine}>
            <TextInput
                placeholder='Enter NUmber'
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='node'
                autoCorrect={false}
            />

            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>

        </View>


    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContaine: {
        padding: 16,
        marginTop: 100,
        backgroundColor: '#4e0329',
        marginHorizontal: 24,
        borderRadius: 10,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 6,
        shadowOpacity: 0.2567

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



    }
})