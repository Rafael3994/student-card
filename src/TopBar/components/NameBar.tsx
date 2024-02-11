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
        backgroundColor: 'rgba(0,113,205,255)',
    },
    text: {
        color: 'white',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: '400',
    }
});

export default NameBar;