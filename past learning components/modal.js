<Modal visible ={isModalVisible } animationType="slide" presentationStyle="pageSheet">
<View style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
      <Text style={{ color: "white" }}>This is the start of new era you dull creature!</Text>
      <Button title="Next" onPress={() => setIsModalVisible(false)} color ="red"></Button>
  </View> 

</Modal>