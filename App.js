import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function App() {

  const [investment, setInvestment] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");

  const EMIFetch = () => {
    fetch('http://208.109.8.100:49264/emi_calculator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        total_investment: investment,
        interest: interest,
        years: years,
      })
    })
      .then(response => response.json())
      .then((responseJson) => {
        console.log('EMIFetch response', responseJson)
      })
      .catch(error => console.log(error))
  }

  const SIPFetch = () => {
    fetch('http://208.109.8.100:49264/sip_calculator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        monthly_investment: investment,
        expected_return_rate: interest,
        time_period: years,
      })
    })
      .then(response => response.json())
      .then((responseJson) => {
        console.log('SIPFetch response', responseJson)
      })
      .catch(error => console.log(error))
  }

  const GETAPI = async () => {
    try {
      const response = await fetch(
        'https://reactnative.dev/movies.json'
      );
      const json = await response.json();
      console.log('GETAPI response', json.movies)
    } catch (error) {
      console.error(error);
    }
  };

  // fetch("http://208.109.8.100:49264/emi_calculator")
  //   .then(response => response.json())
  //   .then((responseJson) => {
  //     console.log('getting data from fetch', responseJson)
  //   })
  //   .catch(error => console.log(error))

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./img/logo.png")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Total Investment"
          placeholderTextColor="#003f5c"
          onChangeText={(txt) => setInvestment(txt)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Interest"
          placeholderTextColor="#003f5c"
          onChangeText={(txt) => setInterest(txt)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Years"
          placeholderTextColor="#003f5c"
          onChangeText={(txt) => setYears(txt)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => EMIFetch()}>
        <Text style={styles.loginText}>EMIFetch</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => SIPFetch()}>
        <Text style={styles.loginText}>SIPFetch</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => GETAPI()}>
        <Text style={styles.loginText}>GETAPI</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 150,
    height: 150,
  },

  inputView: {
    backgroundColor: "#ff693a38",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontWeight: 'bold'
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#ff693adb",
  },

  loginText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1
  },

});