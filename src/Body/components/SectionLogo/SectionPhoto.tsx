import { View, StyleSheet } from "react-native";
import Logo from "./components/Logo";
import Photo from "./components/Photo";

import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
  } from "react-native-responsive-screens";

const SectionPhoto = () => {
    return (
        <View style={styles.container}>
            <View style={{width: wp('22%'), height: hp('29%')}}></View>
            <Photo />
            <Logo />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: hp('29%'),
    },
});

export default SectionPhoto;