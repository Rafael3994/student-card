import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './src/TopBar/TopBar';
import Body from './src/Body/Body';
import {
  widthToDP as wp,
  heightToDP as hp,
  widthToFonts as wf,
  heightToFonts as hf,
} from "react-native-responsive-screens";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TopBar></TopBar>
      <Body />
        {/* <View style={{backgroundColor: 'grey', height: hp('28%')}}></View>
        <View style={{backgroundColor: 'whitesmoke', height: hp('18%')}}></View>
        <View style={{backgroundColor: 'purple', height: hp('18%')}}></View>
        <View style={{backgroundColor: 'pink', height: hp('18%')}}>
          <View></View>
        </View> */}
      {/* <TopBar /> */}
      {/* <View style={{flex: 10, backgroundColor: 'cyan', height: hp('30%')}}></View> */}
      {/* <Body /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
