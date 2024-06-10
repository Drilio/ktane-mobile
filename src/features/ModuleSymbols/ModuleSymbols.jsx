import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useIsFocused} from "@react-navigation/native";
import {useEffect} from "react";
import {SafeAreaComponent} from "../../SafeAreaComponent";
import {SYMBOL} from "../../utils";

export const ModuleSymbols = ()=>{
    const isFocused = useIsFocused();
    useEffect(()=>{},[isFocused]);

    return(
        <SafeAreaComponent children={
            <View style={styles.container}>
                <Text>Choisissez les 4 symboles présent :</Text>
                <View style={styles.imageContainer}>
                    {
                    SYMBOL.map((symbol,index)=>(
                        <Pressable
                            key={index}
                            onPress={()=>{console.log('I PRESS')}}
                        >
                            <Image
                                style={styles.symbols}
                                source={symbol.logo}
                                alt={symbol.alt}
                            />
                        </Pressable>
                        )
                    )
                }
                </View>
                <Image
                />
            </View>}
        />


    )
}

const styles = StyleSheet.create({
    symbols:{
        width:50,
        height:50,
    },
    imageContainer:{
        width:350,
        height:100,
        gap:20,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:'center',
    },
    container:{
        alignItems:'center',
        gap:40
    }
})
