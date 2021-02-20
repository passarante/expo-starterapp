import React from 'react';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import screenImage from './assets/image.jpeg';

const App = () => {

  const isLoading = false;
  return (
    <View style={styles.container}>
      {
        isLoading && <ActivityIndicator color="blue" size="large" />
      }

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

});