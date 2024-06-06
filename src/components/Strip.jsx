import {StyleSheet, View} from "react-native";

export const Strip=({color})=>{
    let stripStyle = styles.container;

    if(color){
        stripStyle={
            ...styles.container,
            backgroundColor:color,
        }
    }

    return(
        <View style={stripStyle}>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'Black',
        borderStyle:'solid',
        width:10,
        height:100,
        backgroundColor:'white',
    }
})
