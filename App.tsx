import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './src/TopBar/TopBar';

export default function App() {
  return (
    <View>
      <TopBar />
    </View>
    // <View style={styles.container}>
    //   <Text>Student Card</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
