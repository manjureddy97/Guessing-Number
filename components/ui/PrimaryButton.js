import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {


    // function pressHandler() {
    //     console.log('Pressed');
    // }


    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable
                android_ripple={{ color: Colors.primary2 }}
                style={({ pressed }) =>
                    pressed ?
                        [styles.buttonInnerContainer, styles.pressed]
                        :
                        styles.buttonInnerContainer
                }

                onPress={onPress}

            >

                <Text style={styles.buttonText}>{children}</Text>

            </Pressable>
        </View>




    )

}


export default PrimaryButton;



const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        margin: 5,
        overflow: 'hidden',

    },

    buttonInnerContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 20,
        elevation: 2,
        margin: 4

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }


})

