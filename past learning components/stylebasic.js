import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Button,
    Modal,
    StyleSheet,
  } from "react-native";
  
  import { useState } from "react";
  
  export default function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
      <View style={styleMain.container}>
        <ScrollView>
          <View style={styleMain.darkMode}>
            <Text style={styleMain.darkModeText}>Style inheritance</Text>
          </View>
  
          <Text style={[styleMain.boldText, styleMain.darkModeText]}>
            Now you see me brother
          </Text>
          <Text style={styleMain.darkModeText}>For you, For all of us!!</Text>
  
          <View
            style={[styleMain.lightblueBg, styleMain.box, styleMain.boxShadow]}
          >
            <Text>Coral box</Text>
          </View>
  
          <View style={[styleMain.box, styleMain.lightgreenBg]}>
            <Text>Lightgreen box</Text>
          </View>
  
          <Modal
            visible={isModalVisible}
            animationType="slide"
            presentationStyle="pageSheet"
          >
            <View style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
              <Text style={{ color: "white" }}>
                This is the start of new era you dull creature!
              </Text>
              <Button
                title="Next"
                onPress={() => setIsModalVisible(false)}
                color="red"
              ></Button>
            </View>
          </Modal>
  
          <Modal
            visible={isModalVisible}
            animationType="slide"
            presentationStyle="pageSheet"
          >
            <View style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
              <Text style={{ color: "white" }}>
                This is the start of new era you dull creature!
              </Text>
              <Button
                title="Next"
                onPress={() => setIsModalVisible(true)}
                color="red"
              ></Button>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
  
  const styleMain = StyleSheet.create({
    darkMode: {
      backgroundColor: "black",
    },
    darkModeText: {
      color: "white",
    },
    boldText: {
      fontWeight: "bold",
    },
    box: {
      width: 250,
      height: 250,
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor: "coral",
      marginHorizontal: 10,
      marginVertical: 20,
      borderWidth: 5,
      borderColor: "green",
      borderRadius: 10,
    },
    container: {
      flex: 1,
      padding: 60,
      backgroundColor: "blue",
    },
    lightblueBg: {
      backgroundColor: "lightblue",
    },
    lightgreenBg: {
      backgroundColor: "lightgreen",
    },
    boxShadow: {
      shadowColor: "#333333",
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 0.6,
      shadowRadius: 4,
    },
  });
  