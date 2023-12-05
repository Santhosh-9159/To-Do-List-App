import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import List from "./components/List";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setinput] = useState();

  const [inputItems, setinputItems] = useState([]);

  const handleText = () => {
    Keyboard.dismiss();
    setinputItems([...inputItems, input]);
    setinput("");
  };
  const deleteItem = (id) => {
    let item = [...inputItems];
    item.splice(id, 1);
    setinputItems(item);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>To-Do-List</Text>
        <View style={styles.items}>
          {inputItems.map((item, id) => {
            return (
              <TouchableOpacity key={id} onPress={() => deleteItem(id)}>
                <List text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.Keyboard}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a text"
          value={input}
          onChangeText={(text) => setinput(text)}
        />

        <TouchableOpacity onPress={() => handleText()}>
          <View style={styles.addText}>
            <Text style={styles.addbtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC",
  },
  body: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  Keyboard: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addText: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addbtn: {
    fontSize: "30px",
    color: "#4d94ff",
  },
});
