 import {View ,Text} from 'react-native';
 export default function Greet({name}){
    return (     <View style={{ flex: 1, backgroundColor: "green", padding: 60 }}>

         <Text>Hello ,{name}</Text>
    </View>)
 }