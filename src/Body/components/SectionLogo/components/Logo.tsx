import { View, StyleSheet, Image } from "react-native";

import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
} from "react-native-responsive-screens";

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./../../../../../assets/logo-universitat.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        width: wp('22%'),
        height: hp('29%'),
    },
    logo: {
        marginTop: hp('2%'),
        width: wp('10%'),
        height: hp('9%'),
    }
})

export default Logo;