import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './src/TopBar/TopBar';
import Body from './src/Body/Body';
// TODO: Hacer icono de la Home
// TODO: Hacer icono user/avatar
// TODO: Comprobar font-family

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TopBar />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
