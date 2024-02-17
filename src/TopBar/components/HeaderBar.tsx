import { View, Text, StyleSheet, Image, Platform } from "react-native";
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
            {Platform.OS === 'android' ?
                <Image
                    style={styles.buttom}
                    source={require('./../../../assets/home.png')}
                />
                : <View style={styles.buttom}></View>
            }
            <View style={{ ...styles.title }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Universitat de Barcelona</Text>
            </View>
            {Platform.OS === 'android' ?
                <Image
                    style={styles.buttomElipsis}
                    source={require('./../../../assets/elipsis.png')}
                />
                :
                <View style={styles.text}>
                    <Text style={{fontSize: wf('5%'), color: 'rgba(7,118,255,255)'}}>Fet</Text>
                </View>
            }
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
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('0.4%'),
        marginRight: wp('3%'),
        width: wp('10%'),
        height: hp('5%'),
    },
    title: {
        width: wp('70%'),
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HeaderBar;