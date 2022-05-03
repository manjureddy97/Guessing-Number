import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './scresns/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './scresns/GameScreen';
import GameOverScreen from './scresns/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)


  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)

  }

  function GameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }




  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/dice.jpg')}
        resizeMode={'cover'}
        style={styles.rootScreen}
        imageStyle={styles.backImage}
      >
        {/* <StartGameScreen /> */}

        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>


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
