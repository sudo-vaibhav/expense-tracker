import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./AppComponents/Navbar"
import ExpenditureList from "./AppComponents/ExpenditureList"
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ExpenditureList />
       
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    }
})
