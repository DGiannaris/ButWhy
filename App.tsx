import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
import { decode, encode } from "base-64";
import { firebaseConfig } from "./config.js";
import { addUser } from "./services/userService.js";

//GAMW THN GOOGLE KAI TA PUSH THS
//atob btoa is missing on the last versions
//waiting for fix

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}



firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Just press it to firebase</Text>
      <Button onPress={() => addUser(db, "google", 88)} title="re"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
