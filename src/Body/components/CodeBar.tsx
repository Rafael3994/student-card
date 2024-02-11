import { View, Text, StyleSheet } from "react-native";
import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
  } from "react-native-responsive-screens";

const CodeBar = () => {
    return (
        <View style={styles.container}>
                <View style={styles.codeBar}>

                </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'column-reverse', 
        alignItems: 'center', 
        height: hp('20%')
    },
    codeBar: {
        backgroundColor: 'pink',
        width: 145,
        height: 55, 
        marginBottom: hp('5%'), 
    },
})

export default CodeBar;