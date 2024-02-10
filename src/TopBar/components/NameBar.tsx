import { View, Text, StyleSheet } from "react-native";

const NameBar = () => {
    return (
        <View style={styles.topBar}>
            <Text style={styles.text}>RAFAEL GARCÍA PÉREZ</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '28%',
        backgroundColor: 'blue'
    },
    text: {
        fontSize: 18,
        marginLeft: 30,
        color: 'white',
        fontWeight: '400',
    }
    
});

export default NameBar;