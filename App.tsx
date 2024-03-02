import { StyleSheet, Text, View } from 'react-native';
import TopBar from './src/TopBar/TopBar';
import Body from './src/Body/Body';
import { StatusBar } from 'expo-status-bar';

// TODO: Comprobar font-family
// TODO: Hacer enlace directo con el incono de la UA, nombre: SocUB

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor='black' />
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TopBar />
        <Body />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
