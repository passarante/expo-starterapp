import React from 'react';
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, StyleSheet, Text, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {

  const handlePress = () => Alert.alert("Opacity Clicked")
  const active = false;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Touchables</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress} >
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} underlayColor="#345212" onPress={handlePress}>
        <Text style={styles.text}>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Text style={{ backgroundColor: active ? 'brown' : 'red' }}>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>

    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "pink",
    height: 80,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10

  },
  text: {
    fontSize: 18,
    color: 'brown',
    fontWeight: "normal"
  }
});
