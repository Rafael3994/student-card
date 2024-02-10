import { View } from "react-native";
import HeaderBar from "./components/HeaderBar";
import NameBar from "./components/NameBar";
const TopBar = () => {
    return (
        <View style={{marginTop: 25}}>
            <HeaderBar />
            <NameBar />
        </View>
    );
};

export default TopBar;