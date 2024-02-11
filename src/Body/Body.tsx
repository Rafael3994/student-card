import { View } from "react-native";
import SectionPhoto from "./components/SectionLogo/SectionPhoto";
import Timer from "./components/Timer";
import SectionInfo from "./components/SectionInfo/SectionInfo";
import CodeBar from "./components/CodeBar";

import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
  } from "react-native-responsive-screens";

const Body = () => {
    return (
        <View style={{height: hp('83%')}}>
            <SectionPhoto />
            <Timer />
            <SectionInfo />
            <CodeBar />
        </View>
    );
};

export default Body;