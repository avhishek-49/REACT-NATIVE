import {View,Text, Stylesheet} from "react-native";

export default function Box(){
    

    return (
        <View style={mainStyle.container}>
            <Text>Box</Text>
        </View>
    )
}


const mainStyle = StyleSheet.create({

    container:{
        height:100,
        width:100,
        backgroundColor:"red"
    }
})