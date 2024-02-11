import { View, Text, StyleSheet } from "react-native";

const SectionInfo = () => {
    // Codi de barras = 12 digitos
    // Número de carnet = 16 digitos
    return (
        <View style={{ height: 160, marginTop: 10 }}>
            <View style={{ marginLeft: 18 }}>
                <View style={styles.flexRow}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Codi de barres</Text>
                    </View>
                    <View style={styles.valueBox}>
                        <Text style={styles.value}>123456789123</Text>
                    </View>
                </View>
                <View style={styles.flexRow}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Col·lectiu</Text>
                    </View>
                    <View style={styles.valueBox}>
                        <Text style={styles.value}>Estudiant (cad. 10-2024)</Text>
                    </View>
                </View>
                <View style={styles.flexRow}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Número de carnet</Text>
                    </View>
                    <View style={styles.valueBox}>
                        <Text style={styles.value}>1234 1234 1234 1234</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleBox: {
        borderRadius: 5,
        backgroundColor: 'rgba(0,113,205,255)',
        height: 28,
        width: '36%',
        display: 'flex',
        justifyContent: 'center',
    },
    title: { 
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 9,  
        color: 'white', 
    },
    flexRow: { display: 'flex', flexDirection: 'row', marginTop: 3 },
    valueBox: {
        marginLeft: 15,
        display: 'flex',
        justifyContent: 'center',
    },
    value: {fontWeight: '500'}
})

export default SectionInfo;