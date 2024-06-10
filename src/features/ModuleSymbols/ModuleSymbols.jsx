import {Button, StyleSheet, Text, View} from "react-native";
import {useIsFocused} from "@react-navigation/native";
import {useCallback, useEffect, useState} from "react";
import {SafeAreaComponent} from "../../SafeAreaComponent";
import {SYMBOL} from "../../utils";
import {symbolsToPick} from "./SymbolsToPick";
import {ButtonSymbols} from "./ButtonSymbols";

export const ModuleSymbols = ()=>{
    const [pickedSymbols, setPickedSymbols] = useState([]);

    const isFocused = useIsFocused();
    useEffect(()=>{},[isFocused]);
    console.log('JAI RELOAD')
    const handlePickingSymbol= useCallback((newSymbol)=>{
        setPickedSymbols(currentSymbols => {
            const isSymbolIncluded = currentSymbols.some(symbol => symbol.name === newSymbol.name);
            if (isSymbolIncluded) {
                console.log('remove', currentSymbols);
                return currentSymbols.filter(symbol => symbol.name !== newSymbol.name);
            } else {
                console.log('add', currentSymbols);
                return [...currentSymbols, newSymbol];
            }
        });
    },[]);


    const handleRightSequence = useCallback(()=>{
        console.log('BEFORE PICKED SYMBOL',pickedSymbols);
        const rightSequence = symbolsToPick(pickedSymbols)
        console.log(rightSequence)
    },[pickedSymbols]);



    return(
        <SafeAreaComponent children={
            <View style={styles.container}>
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
                    <Button title='Valider' onPress={handleRightSequence}/>
                </View>
            </View>}
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
        gap:40
    }
})
