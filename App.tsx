import { StyleSheet, Text, View } from 'react-native';
import TopBar from './src/TopBar/TopBar';
import Body from './src/Body/Body';

// TODO: Quitar logo home y hamburger, este ultimo cambiarlo por el texto FET
// TODO: Comprobar font-family
// TODO: Hacer enlace directo con el incono de la UA, nombre: SocUB

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
