import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
} from "react-native-responsive-screens";

const Photo = () => {
    return (

        // account
        <View style={styles.container}>
            <View style={styles.boxLogo}>
                <Icon
                    name='account'
                    type='material-community'
                    color='rgba(239,240,242,255)'
                    size={hp('22%')}
                />
                <View style={{position: 'absolute'}}>
                    <View style={styles.boxText}>
                        <Text style={styles.text}>Puja la teva foto!</Text>
                        <Text style={{...styles.text, fontWeight: 'bold'}}>ub.edu/fotoub</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('57%'),
        height: hp('29%'),
    },
    boxLogo: {
        width: wp('50%'),
        height: hp('24%'),
        borderRadius: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(211,211,211,255)',
        fontFamily: 'Prospera Book'
    },
    boxText:{
        marginTop: hp('4.5%'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: hf('2%')
    }
})

export default Photo;