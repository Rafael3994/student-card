import { View, Text, StyleSheet } from "react-native";
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
            <View style={{ ...styles.buttom, 
                backgroundColor: 'pink',
            }}
            ></View>
            <View style={{ ...styles.title }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Universitat de Barcelona</Text>
            </View>
            <Icon
                style={{
                    ...styles.buttom,
                }}
                name='ellipsis-vertical'
                type='ionicon'
                color='black'
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
        width: wp('15%'),
        height: hp('6%'),
    },
    title: {
        width: wp('70%'),
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HeaderBar;