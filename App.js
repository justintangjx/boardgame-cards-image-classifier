import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  // ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [newCardInput, toAdd] = useState("");
  const cardInputHandler = enteredText => {
    toAdd(enteredText);
  };

  const [cards, addCardToList] = useState([]);
  const addCardHandler = () => {
    addCardToList(cards => [
      ...cards,
      { id: Math.random().toString(), value: newCardInput }
    ]);
  };
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TextInput
          placeholder="cards to classify"
          style={styles.textInput}
          onChangeText={cardInputHandler}
          value={newCardInput}
        />
        <Button title="ADD" onPress={addCardHandler} />
      </View>
      <FlatList
        keyExtractor={(card, index) => card.id}
        data={cards}
        renderItem={cardItemData => (
          <View>
            <Text>{cardItemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
