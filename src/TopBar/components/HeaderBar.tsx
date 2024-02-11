import { View, Text, StyleSheet } from "react-native";

const HeaderBar = () => {
    return (
        <View style={styles.topBar}>
            <View style={{ ...styles.buttom, 
                // backgroundColor: 'powderblue',
            }}
            ></View>
            <View style={{ ...styles.buttom, ...styles.title }}>
                <Text style={{ fontSize: 18 }}>Universitat de Barcelona</Text>
            </View>
            <View style={{
                ...styles.buttom,
                // backgroundColor: 'powderblue',
            }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttom: {
        width: '16.5%',
        height: 55,
        // backgroundColor: 'pink',
    },
    title: {
        width: '67%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HeaderBar;