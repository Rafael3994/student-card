import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from 'react-native-elements'

import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
} from "react-native-responsive-screens";

const HeaderBar = () => {
    return (
        <View style={styles.topBar}>
            <Image
                style={styles.buttom}
                source={require('./../../../assets/home.png')}
            />
            <View style={{ ...styles.title }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Universitat de Barcelona</Text>
            </View>
            <Image
                style={styles.buttomElipsis}
                source={require('./../../../assets/elipsis.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hp('6%'),
    },
    buttom: {
        justifyContent: 'center',
        marginLeft: wp('0.6%'),
        width: wp('13%'),
        height: hp('5%'),
    },
    buttomElipsis: {
        marginTop: hp('0.4%'),
        marginRight: wp('0.6%'),
        width: wp('10%'),
        height: hp('5%'),
        resizeMode: 'contain',
    },
    title: {
        width: wp('70%'),
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HeaderBar;