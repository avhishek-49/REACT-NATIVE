import { View, Text, Image, ImageBackground, Pressable ,ScrollView,Button } from "react-native";
const myLogoImage = require("./assets/japan.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Text>
        Hello <Text style={{ color: "red" }}>Abishek</Text>
      </Text>
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}
{/* 
      <ImageBackground source={myLogoImage} style ={{flex:1}}>
      <Text style={{ color: "red" }}>Abishek</Text>
      </ImageBackground> */}

<ScrollView>

      <Text>This system allows students to pay their dues through the IMEPay FastConnect API. Users first select their college or school from a list provided by the package info. After selecting the institution, they can enter the student ID to view the due fees. Once the dues are displayed, the payment can be made seamlessly through the IMEPay FastConnect platform.</Text>


<Pressable onPress={() =>alert("Successfully Pressed")}>

<Image
        source={myLogoImage}
        style={{ width: 300, height: 300 }}
      />
</Pressable>



      <Button title="Press me" onPress={() => alert('Successfully Pressed')} color = "midnightblue"></Button>
   </ScrollView>
    </View>
  );
}
