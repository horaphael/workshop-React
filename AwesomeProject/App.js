import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const handleButtonPress = () => {
    console.log('Bouton pressé');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accueil</Text>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 53,
    color: 'red',
  },
  buttonText: {
    fontSize: 26,
    color: 'blue',
    padding: 10,
    borderWidth: 1,
  },
});
