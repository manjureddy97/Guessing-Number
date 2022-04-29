import { StyleSheet, View, ImageBackground } from 'react-native';
import StartGameScreen from './scresns/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/dice.jpg')}
        resizeMode={'cover'}
        style={styles.rootScreen}
        imageStyle={styles.backImage}
      >
        <StartGameScreen />


      </ImageBackground>



    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  backImage: {
    opacity: 0.15
  }



});
