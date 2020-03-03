import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
import { decode, encode } from "base-64";
import { firebaseConfig } from "./config.js";
import { addUser } from "./services/userService.js";


const screenWidth = Math.round(Dimensions.get('screen').width);  
const screenHeight = Math.round(Dimensions.get('window').height);  



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
      <View
        style={{
          backgroundColor: "#1565C0",
          width: screenWidth,
          height: screenHeight,

        }}
      >

        <View style={{width:120,height:30,backgroundColor:'red',alignSelf:"center",marginTop:300}}></View>
        <View>
          <Text style={{color:'#CE93D8',fontSize:45,fontWeight:'bold',opacity:0.9,position:'absolute',top:screenHeight*0.37,left:40}}>#ButWhy</Text>
        </View>
        <View
          style={{
            width: screenWidth * 0.9,
            height: screenWidth * 0.9,
            backgroundColor: "#1976D2",
            borderRadius: 300,
            position: "absolute",
            zIndex:1,
            top: -40,
            left: -50,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8
          }}
        />
        <View
          style={{
            width: screenWidth * 0.4,
            height: screenWidth * 0.4,
            backgroundColor: "#1976D2",
            borderRadius: 300,
            position: "absolute",
            zIndex:1,
            bottom: 30,
            right: -50,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 6
          }}
        />

        {/* <Button onPress={() => addUser(db, "google", 88)} title="re"></Button> */}
      </View>
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
