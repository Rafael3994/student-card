import { View, Text, StyleSheet } from "react-native";
import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
  } from "react-native-responsive-screens";

const NameBar = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>RAFAEL GARCÍA PÉREZ</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        height: hp('5%'),
        justifyContent: 'center',
        backgroundColor: 'rgba(0,113,205,255)',
    },
    text: {
        color: 'white',
        marginLeft: wp('7%'),
        fontSize: 20,
        fontWeight: '400',
    }
});

export default NameBar;