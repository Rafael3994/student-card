import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'

import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
} from "react-native-responsive-screens";

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
                {/* <View style={styles.logo}>
                </View> */}
                <Icon
                style={styles.logo}
                name='clock-time-three-outline'
                type='material-community'
                color='rgba(79,79,79,255)'
                size={hp('6%')}
            />
                <View style={styles.boxTimer}>
                    <Text style={styles.timerText}>
                        {currentDate}
                    </Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
         height: hp('18%')
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: hp('10%'),
        width: wp('90%'),
        borderWidth: 1, 
        borderColor: 'grey', 
        backgroundColor: 'whitesmoke', 
        borderRadius: 5,
        shadowColor: 'rgba(199,199,199,255)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    logo: {
        transform: [{ rotate: '270deg'}],
        justifyContent: 'center',
        height: hp('6.5%'),
        width: wp('14%'),
        marginLeft: wp('6%'),
    },
    boxTimer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: hp('8%'),
        marginLeft: hp('3%'),
    },
    timerText: { 
        fontWeight: 'bold',
        fontSize: 15 
    }
});

export default Timer;