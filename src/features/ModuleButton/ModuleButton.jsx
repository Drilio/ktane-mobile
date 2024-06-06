import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ButtonComponent} from '../../components/ButtonComponent'
import {Battery} from '../../components/Battery'
import {BUTTON_COLOR, BUTTON_TEXT, STRIP_COLOR} from "../../utils";
import {Strip} from "../../components/Strip";
import {useCallback, useState} from "react";
import {SafeAreaComponent} from "../../SafeAreaComponent";
import {useIsFocused} from "@react-navigation/native";
import {useEffect} from 'react'

export const ModuleButton = () => {
    const [simpleClick,setsimpleClick,] = useState(false);
    const [otherClick,setotherClick] = useState(false);
    const [blueStrip, setBlueStrip]= useState(false);
    const [yellowStrip, setYellowStrip]= useState(false);
    const [otherStrip ,setOtherStrip ] = useState(false);
    const isFocused = useIsFocused();

    const resetAllState = ()=>{
        setsimpleClick(false);
        setotherClick(false);
        setBlueStrip(false);
        setYellowStrip(false);
        setotherClick(false);
        setOtherStrip(false);
    }
    useEffect(()=>{
        resetAllState()
    },[isFocused])

    const handlesimpleClick = useCallback(()=>{
        resetAllState()
        setsimpleClick(true)
    },[simpleClick])

    const handleOtherClick = useCallback(()=>{
        setotherClick(true)
        setsimpleClick(false)
    },[])

    const handleBlueStrip = useCallback(()=>{
        setBlueStrip(true)
        setYellowStrip(false)
        setOtherStrip(false)
    },[])

    const handleYellowStrip = useCallback(()=>{
        setBlueStrip(false)
        setYellowStrip(true)
        setOtherStrip(false)
    },[])

    const handleOtherStrip = useCallback(()=>{
        setBlueStrip(false)
        setYellowStrip(false)
        setOtherStrip(true)
    },[])

    return(
        <>
            <SafeAreaComponent children={
                <View style={styles.mainContent}>
                    <Text>Choisissez vote cas</Text>
                    <View className='first-choice-content' style={styles.firstChoiceContent}>
                        <View style={styles.firstChoiceButton}>
                            <View className="red-button">
                                <ButtonComponent content={BUTTON_TEXT.hold} color={BUTTON_COLOR.red} handleClick={handlesimpleClick}/>
                            </View>
                            <TouchableOpacity onPress={handlesimpleClick} style={styles.button}>
                                <View>
                                    <Battery howMany={1} />
                                    <Text style={styles.text}>+ CAR</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlesimpleClick} style={styles.button}>
                                <View>
                                    <Battery howMany={2} />
                                    <Text style={styles.text}>+ FRK ALLUME</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Button onPress={handleOtherClick} title="AUTRE">
                            </Button>
                        </View>
                    </View>
                    {
                        simpleClick &&(
                            <View>
                                <Text>CLICK ET RELACHE LE BOUTON TOUT DE SUITE !</Text>
                            </View>
                        )
                    }
                    {
                        otherClick && (
                            <View style={styles.stripsContainer}>
                                <View>
                                    <Text>CLICK ET RESTE APPUYER SUR LE BOUTON PUIS...</Text>
                                </View>
                                <View style={styles.Strips}>
                                    <TouchableOpacity onPress={handleBlueStrip} style={styles.button}>
                                        <View>
                                            <Strip color={STRIP_COLOR.blue} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleYellowStrip} style={styles.button}>
                                        <View>
                                            <Strip color={STRIP_COLOR.yellow} />
                                        </View>
                                    </TouchableOpacity>
                                    <View>
                                        <Button onPress={handleOtherStrip} title="AUTRE">AUTRE</Button>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    {
                        blueStrip && (
                            <View>
                                <Text>RELACHE LORSQUE LE COMPTE A REBOURS AFFICHE 4 N'IMPORTE OU !!!</Text>
                            </View>
                        )
                    }
                    {
                        yellowStrip && (
                            <View>
                                <Text>RELACHE LORSQUE LE COMPTE A REBOURS AFFICHE 5 N'IMPORTE OU !!!</Text>
                            </View>
                        )
                    }
                    {
                        otherStrip && (
                            <View>
                                <Text>RELACHE LORSQUE LE COMPTE A REBOURS AFFICHE 1 N'IMPORTE OU !!!</Text>
                            </View>
                        )
                    }
                </View>}>
            </SafeAreaComponent>
        </>
    )
}

const styles = StyleSheet.create({
    mainContent:{
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        gap:30
    },
    stripsContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems:"center"
    },
    Strips:{
        display: "flex",
        alignItems:"center",
        flexDirection: "row",
        gap:30
    },
    button:{
        borderWidth:1,
        borderColor:'Black',
        borderStyle:'solid',
        padding:10
    },
    firstChoiceContent:{
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'space-between',
        gap:20
    },
    firstChoiceButton:{
        flexDirection: 'row',
        gap:10
    }
})

