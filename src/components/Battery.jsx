import {View, StyleSheet, Text} from "react-native";
import BatteryIcon from '../../assets/battery-full-solid.svg'
export const Battery = ({howMany})=> {
    return(
        <View style={styles.container}>
            <BatteryIcon/>
            <Text>&gt;{howMany}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        height:50,
        width:70,
        gap:10,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-around"
    }
})

