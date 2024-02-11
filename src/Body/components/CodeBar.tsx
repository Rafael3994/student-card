import { View, Text, StyleSheet, Image } from "react-native";
import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
} from "react-native-responsive-screens";

const CodeBar = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.codeBar}
                source={require('./../../../assets/barcode.gif')}
            />
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