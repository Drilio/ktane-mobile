import {StyleSheet, Text, TouchableOpacity} from "react-native";

export const ButtonComponent = ({content, color,handleClick})=>{
    const buttonStyle = {
        ...styles.button,
        backgroundColor: color,
    }
    return(
        <TouchableOpacity onPress={handleClick} style={buttonStyle}>
            <Text style={styles.text}>{content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    }

})
