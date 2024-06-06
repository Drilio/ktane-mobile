import {StyleSheet, Text, View} from "react-native";

export const SecondPage = () => {
    return(
        <View style={styles.container}>
            <Text>TOTO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
