import { View, Text, StyleSheet } from "react-native";

const NameBar = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>RAFAEL GARCÍA PÉREZ</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 43,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'cyan',
    },
    text: {
        marginLeft: 30,
        fontSize: 17,
        fontWeight: '400',
    }
});

export default NameBar;