import { View, StyleSheet, Text, Image } from "react-native";
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
                <Image
                    style={{
                        width: 165,
                        height: 165,
                        borderRadius: 165 / 2,
                    }}
                    source={require('./../../../../../assets/avatar.png')}
                />
                <View style={{ position: 'absolute' }}>
                    <View style={styles.boxText}>
                        <Text style={styles.text}>Puja la teva foto!</Text>
                        <Text style={{ ...styles.text, fontWeight: 'bold' }}>ub.edu/fotoub</Text>
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
        width: 170,
        height: 170,
        borderRadius: 170 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(211,211,211,255)',
        fontFamily: 'Prospera Book'
    },
    boxText: {
        marginTop: hp('1%'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: hf('2%')
    }
})

export default Photo;