import {StyleSheet, Text, View} from "react-native";
import {SafeAreaComponent} from "../SafeAreaComponent";

export const Home = () => {
    return(
        <SafeAreaComponent children={
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Bienvenue dans l'app de triche pour Keep Talking And Nobody Explodes
                </Text>
            </View>
        }/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
