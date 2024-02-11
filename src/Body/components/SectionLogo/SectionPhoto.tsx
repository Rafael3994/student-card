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
            {/* <Photo /> */}
            {/* <Logo /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey', 
        height: hp('29%'),
    },
});

export default SectionPhoto;