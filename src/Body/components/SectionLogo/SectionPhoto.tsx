import { View, StyleSheet } from "react-native";
import Logo from "./components/Logo";
import Photo from "./components/Photo";

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
        width: '100%',
        height: 210,
        backgroundColor: 'pink'
    },
});

export default SectionPhoto;