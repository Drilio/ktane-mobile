import {Button, View, StyleSheet, Text} from "react-native";
import {useCallback, useState} from "react";
import {witchWireToCut} from "./wireToCut";
import {WIRE_COLOR} from "../../utils";
import {LastSerialNumberQuestion} from "../../components/LastSerialNumberQuestion";
import {Wire} from "../../components/Wire";
import {SafeAreaComponent} from "../../SafeAreaComponent";

export const ModuleWire = () => {
    const [nbrWire, setNbrWire] = useState(0)
    const [firstWireColor, setFirstWireColor] = useState(WIRE_COLOR.white);
    const [secondWireColor, setSecondWireColor] = useState(WIRE_COLOR.white)
    const [thirdWireColor, setThirdWireColor] = useState(WIRE_COLOR.white)
    const [fourthWireColor, setFourthWireColor] = useState(WIRE_COLOR.white)
    const [fithWireColor, setFithWireColor] = useState(WIRE_COLOR.white)
    const [sixthWireColor, setSixthWireColor] = useState(WIRE_COLOR.white)
    const [wireToCut, setWireToCut] = useState(undefined)
    const [lastSerialNumberIsPair, setLastSerialNumberIsPair] = useState(false)

    const handleNmbrWire = useCallback((nbrWire) => {
        setWireToCut(undefined)
        setNbrWire(nbrWire);
    },[])

    const handleFirstWireColor= useCallback((color)=>{
        setFirstWireColor(color)
    },[])

    const handleSecondWireColor= useCallback((color)=>{
        setSecondWireColor(color)
    },[])

    const handleThirddWireColor= useCallback((color)=>{
        setThirdWireColor(color)
    },[])


    const handleFourthWireColor= useCallback((color)=>{
        setFourthWireColor(color)
    },[])

    const handleFithWireColor= useCallback((color)=>{
        setFithWireColor(color)
    },[])

    const handleSixthWireColor= useCallback((color)=>{
        setSixthWireColor(color)
    },[])

    const handleWitchWireToCut = (wires)=>{
        const wire = witchWireToCut(wires,lastSerialNumberIsPair)
        console.log(wire)
        setWireToCut(wire)
    }

    const handleLastSerialNumber = (bool)=>{
        setLastSerialNumberIsPair(bool)
    }
    return(
        <SafeAreaComponent children={<View>
            <View style={{alignItems:"center", gap:30}}>
                <Text>Combien de fil y a t-il ?</Text>
                <View className='Button-nbrwire-container' style={styles.selectionButtonContainer}>
                    <Button onPress={()=>handleNmbrWire(3)} title="3"/>
                    <Button onPress={()=>handleNmbrWire(4)} title="4"/>
                    <Button onPress={()=>handleNmbrWire(5)} title="5"/>
                    <Button onPress={()=>handleNmbrWire(6)} title="6"/>
                </View>
            </View>
            {nbrWire === 3 && (
                <View style={{alignItems:"center"}}>
                    <Text>De quel couleur sont les fils ?</Text>
                    <View style={styles.threeWireContainer}>
                        <View style={{flexDirection: 'row', gap:40}}>
                            <Wire content={'1'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                            <Wire content={'2'} color={secondWireColor} handleWireColor={handleSecondWireColor}/>
                            <Wire content={'3'} color={thirdWireColor} handleWireColor={handleThirddWireColor}/>
                        </View>
                        <View style={styles.buttonValider}>
                            <Button onPress={()=>handleWitchWireToCut([firstWireColor,secondWireColor,thirdWireColor])} title="Valider"/>
                        </View>
                    </View>
                </View>
            )}
            {nbrWire === 4 && (
                <View style={styles.bigPartFour}>
                    <View>
                        <Text>De quel couleur sont les fils ?</Text>
                    </View>
                    <View style={styles.fourWireContainer}>
                        <Wire content={'1'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                        <Wire content={'2'} color={secondWireColor} handleWireColor={handleSecondWireColor}/>
                        <Wire content={'3'} color={thirdWireColor} handleWireColor={handleThirddWireColor}/>
                        <Wire content={'4'} color={fourthWireColor} handleWireColor={handleFourthWireColor}/>
                    </View>
                    <View>
                        <LastSerialNumberQuestion handleLastSerialNumber={handleLastSerialNumber}/>
                    </View>
                    <View style={styles.buttonValider}>
                        <Button onPress={()=>handleWitchWireToCut([firstWireColor,secondWireColor,thirdWireColor,fourthWireColor])} title="Valider"/>
                    </View>
                </View>
            )}
            {nbrWire === 5 && (
                <View style={{alignItems:"center"}}>
                    <Text>De quel couleur sont les fils ?</Text>
                    <View style={styles.fiveWireContainer}>
                        <Wire content={'1'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                        <Wire content={'2'} color={secondWireColor} handleWireColor={handleSecondWireColor}/>
                        <Wire content={'3'} color={thirdWireColor} handleWireColor={handleThirddWireColor}/>
                        <Wire content={'4'} color={fourthWireColor} handleWireColor={handleFourthWireColor}/>
                        <Wire content={'5'} color={fithWireColor} handleWireColor={handleFithWireColor}/>
                    </View>
                    <View>
                        <LastSerialNumberQuestion handleLastSerialNumber={handleLastSerialNumber}/>
                    </View>
                        <View style={styles.buttonValider}>
                            <Button onPress={()=>handleWitchWireToCut([firstWireColor,secondWireColor,thirdWireColor,fourthWireColor,fithWireColor])} title="Valider"/>
                        </View>
                </View>
            )}
            {nbrWire === 6 && (
                <View style={{alignItems:"center"}}>
                    <Text>De quel couleur sont les fils ?</Text>
                    <View style={styles.sixWireContainer}>
                        <Wire content={'1'} color={firstWireColor} handleWireColor={handleFirstWireColor}/>
                        <Wire content={'2'} color={secondWireColor} handleWireColor={handleSecondWireColor}/>
                        <Wire content={'3'} color={thirdWireColor} handleWireColor={handleThirddWireColor}/>
                        <Wire content={'4'} color={fourthWireColor} handleWireColor={handleFourthWireColor}/>
                        <Wire content={'5'} color={fithWireColor} handleWireColor={handleFithWireColor}/>
                        <Wire content={'6'} color={sixthWireColor} handleWireColor={handleSixthWireColor}/>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <LastSerialNumberQuestion handleLastSerialNumber={handleLastSerialNumber}/>
                    </View>
                    <View style={styles.buttonValider}>
                        <Button onPress={()=>handleWitchWireToCut([firstWireColor,secondWireColor,thirdWireColor,fourthWireColor,fithWireColor,sixthWireColor])} title="Valider"/>
                    </View>
                </View>
            )}
            {wireToCut > 1 && (
                <View style={{alignItems:"center", marginTop:10}}>
                    <Text> le fil qu'il faut couper est le {wireToCut}ème !!!</Text>
                </View>
            )}
            {
                wireToCut === 1 && (
                    <View style={{alignItems:"center", marginTop:10}}>
                        <Text> le fil qu'il faut couper est le premier !!!!</Text>
                    </View>
                )
            }
        </View>}/>
    )
}

const styles = StyleSheet.create({
    threeWireContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection: "column",
        gap: 5,
    },
    fourWireContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexWrap:"wrap",
        flexDirection: "row",
        gap:30
    },
    fiveWireContainer:{
        gap:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: "row",
        flexWrap:"wrap",
    },
    sixWireContainer:{
        gap:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: "row",
        flexWrap:"wrap",
    },
    selectionButtonContainer:{
        gap:50,
        justifyContent:'center',
        flexDirection:"row"
    },
    bigPartFour:{
        flexDirection:'column',
        alignItems:"center"
    },
    buttonValider:{
        alignItems:"center",
        marginTop:10
    }
})
