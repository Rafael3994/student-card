import { View } from "react-native";
import SectionPhoto from "./components/SectionLogo/SectionPhoto";
import Timer from "./components/Timer";
import SectionInfo from "./SectionInfo/SectionInfo";

const Body = () => {
    return (
        <View>
            <SectionPhoto />
            <Timer />
            <SectionInfo />
        </View>
    );
};

export default Body;