import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";

export default function App() {
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

      <View style={[styleMain.lightblueBg, styleMain.box, styleMain.boxShadow]}>
        <Text>Coral box</Text>
      </View>

      <View style={[styleMain.box, styleMain.lightgreenBg]}>
        <Text>Lightgreen box</Text>
      </View>
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