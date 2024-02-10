import { View } from "react-native";
import SectionPhoto from "./components/SectionLogo/SectionPhoto";
import Timer from "./components/Timer";

const Body = () => {
    return (
        <View>
            <SectionPhoto />
            <Timer />
        </View>
    );
};

export default Body;