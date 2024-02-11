import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = () => {

    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hour = today.getHours();
        const minuts = today.getMinutes();
        const seconds = today.getSeconds();

        return `${date}-${month}-${year} ${hour}:${minuts}:${seconds}`;
      }
    const [currentDate, setCurrentDate] = useState(getDate());

    useEffect(() => {
        const idInterval = setInterval(() => {
            setCurrentDate(getDate()); // dayjs() always gives us the current time
        }, 1000 * 1); // 1 second = 1000 milliseconds
        return () => clearInterval(idInterval);

    }, [currentDate])
    
    return (
        <View style={styles.content}>
            <View style={styles.box}>
                <View style={{backgroundColor: 'grey', height: '100%', width: 60, marginLeft: 25}}>
                </View>
                <View style={styles.boxTimer}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                        {currentDate}
                    </Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: 70, width: '90%',
        borderWidth: 1, borderColor: 'grey', backgroundColor: 'whitesmoke', borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    boxTimer: {
        height: '100%', 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        marginLeft: 35
    },
    timerText: {

    }
});

export default Timer;