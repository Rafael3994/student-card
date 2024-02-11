import { View } from "react-native";
import HeaderBar from "./components/HeaderBar";
import NameBar from "./components/NameBar";

import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
  } from "react-native-responsive-screens";

const TopBar = () => {
    return (
        <View style={{height: hp('14%'), marginTop: hp('3.5%')}}>
            <HeaderBar />
            <NameBar />
        </View>
    );
};

export default TopBar;