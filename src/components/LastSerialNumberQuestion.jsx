import {Button, StyleSheet, Text, View} from "react-native";

export const LastSerialNumberQuestion = ({handleLastSerialNumber})=>{
    return (
        <View style={styles.mainContainer}>
            <Text>le dernier chiffre du numéro de série est pair ?</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={() => handleLastSerialNumber(true)} title="oui"/>
                <Button onPress={() => handleLastSerialNumber(false)} title="non"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'column',
        gap: 10
    },
    buttonContainer:{
        gap: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    }
})
