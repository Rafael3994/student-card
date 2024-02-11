import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './src/TopBar/TopBar';
import Body from './src/Body/Body';

export default function App() {
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <TopBar />
           <Body />
        <View style={{backgroundColor: 'cyan', height: 80}}>
          <Text>CODE BAR</Text>
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
