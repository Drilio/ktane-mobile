import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useIsFocused} from "@react-navigation/native";
import {useCallback, useEffect, useState} from "react";
import {SafeAreaComponent} from "../../SafeAreaComponent";
import {SYMBOL} from "../../utils";
import {symbolsToPick} from "./SymbolsToPick";
import {ButtonSymbols} from "./ButtonSymbols";

export const ModuleSymbols = ()=>{
    const [pickedSymbols, setPickedSymbols] = useState([]);
    const [rightSequence, setRightSequence] = useState([]);
    const isFocused = useIsFocused();

    useEffect(()=>{
        setPickedSymbols([]);
        setRightSequence([]);
    },[isFocused]);

    const handlePickingSymbol= useCallback((newSymbol)=>{
        console.log(newSymbol);
        setPickedSymbols(currentSymbols => {
            const isSymbolIncluded = currentSymbols.some(symbol => symbol.name === newSymbol.name);
            if (isSymbolIncluded) {
                return currentSymbols.filter(symbol => symbol.name !== newSymbol.name);
            } else {
                return [...currentSymbols, newSymbol];
            }
        });
    },[]);


    const handleRightSequence = useCallback(()=>{
        const rightSequence = symbolsToPick(pickedSymbols)
        console.log('rightSequence',rightSequence)
        setRightSequence([...rightSequence]);
    },[pickedSymbols]);



    return(
        <SafeAreaComponent children={
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Choisissez les 4 symboles présent :</Text>
                <View style={styles.imageContainer}>
                    {
                        SYMBOL.map((symbol,index)=>(
                                <ButtonSymbols
                                    key={index}
                                    handlePickingSymbol={handlePickingSymbol}
                                    symbol={symbol}
                                />
                            )
                        )
                    }
                </View>
                    <Button title='Valider' onPress={handleRightSequence}/>
                <View style={styles.resultContainer}>
                    {rightSequence.length > 0 &&(
                        <Text>Votre résultat</Text>
                    )}
                    <View style={styles.rightSequenceContainer}>
                        {rightSequence.length > 0 && rightSequence.map((symbol,index)=>(
                            <View key={index}>
                                <Image
                                    style={styles.symbols}
                                    source={symbol.logo}
                                    alt={symbol.alt}
                                />
                            </View>
                        ))
                        }
                    </View>
                </View>

            </ScrollView>}
        />


    )
}

const styles = StyleSheet.create({

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
        flexDirection:"column",
        gap:100
    },
    symbols:{
        width:50,
        height:50,
    },
    resultContainer:{
        flexDirection:"column",
        gap:10,
    },
    rightSequenceContainer:{
      flexDirection:"row",
      gap:10,
    }
})
