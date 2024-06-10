import {Image, Pressable, TouchableHighlight, StyleSheet, View} from "react-native";
import {useCallback, useState} from "react";

export const ButtonSymbols = ({index, handlePickingSymbol, symbol})=>{
    const [isPressed, setIsPressed] = useState(false);

    const handleButtonPressed = useCallback(() => {
        handlePickingSymbol(symbol);
        setIsPressed(!isPressed);
    },[isPressed]);


    return(
        <>
        <Pressable
            key={index}
            onPress={handleButtonPressed}
        >
                <Image
                    style={isPressed ? styles.pickedSymbols : styles.symbols}
                    source={symbol.logo}
                    alt={symbol.alt}
                />
            {isPressed && <View style={styles.blueOverlay} />}
        </Pressable>
        </>
    )
}

let styles = StyleSheet.create({
    btnNormal: {
        borderColor: 'blue',
        borderWidth: 1,
        height: 50,
        width: 50,
    },
    btnPress: {
        borderColor: 'red',
        borderWidth: 1,
        height: 50,
        width: 50,
    },
    symbols:{
        width:50,
        height:50,
    },
    pickedSymbols:{
        width:50,
        height:50,
        opacity:0.5,
},
    blueOverlay: {
        width: '100%',
        height: '50%',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        position: 'absolute',
    },
});
