import {Button, StyleSheet, View, Text, Modal, Pressive, Pressable} from "react-native";
import { Strip } from "./Strip";
import { useCallback, useState } from "react";
import { WIRE_COLOR } from "../utils";

export const Wire = ({ content, color, handleWireColor }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleModal = useCallback(() => {
        setModalVisible(true);
    }, []);

    function textColorBasedOnBg(bgColor) {
        return bgColor === 'white' ? 'black' : 'white';
    }

    const handleCloseModal = useCallback(()=>{
        setModalVisible(false);
    },[])

    return (
        <View style={styles.mainContent}>
            <Text>{content}</Text>
            <Pressable onPress={handleModal} style={styles.button}>
            <Strip color={color} />
            </Pressable>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {Object.values(WIRE_COLOR).map((wireColor) => (
                            <Pressable
                                key={wireColor}
                                onPress={() => {
                                    handleWireColor(wireColor);
                                    handleCloseModal();
                                }}
                                style={[styles.colorButton, { backgroundColor: wireColor }]}
                            >
                                <Text style={[styles.buttonText, { color: textColorBasedOnBg(wireColor)}]}>
                                    {wireColor}
                                </Text>
                            </Pressable>
                        ))}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.buttonText}>Fermer</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContent: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        margin: 10,
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        backgroundColor: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    colorButton: {
        width: 100,
        padding: 10,
        margin: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
});
