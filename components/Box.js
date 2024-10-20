import { View, Text, StyleSheet } from "react-native";

export default function Box() {
  return (
    <View style={mainStyle.container}>
      <Text>Box</Text>
    </View>
  );
}

const mainStyle = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: "red",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  container:
  {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  }
});
