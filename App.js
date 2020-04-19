import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./AppComponents/Navbar"
import ExpenditureList from "./AppComponents/ExpenditureList"
import Form from "./AppComponents/Form"

var expenses = [
            {name: `McDonald's`,amount:-250,backgroundColor:"#ff6060",category:"Food"},
            {name: `Mom's medicines`,amount:-100,backgroundColor:"#43bee0",category:"Medical"},
	        {name: 'Ritesh',amount:250,backgroundColor:"#dd66f4",category:"Bills"},
            {name: 'Electricity bill',amount:-1000,backgroundColor:"#ff7200",category:"Bills"},
            {name: 'Internet recharge',amount:-800,backgroundColor:"#dd66f4",category:"Internet"},
            {name: 'Netflix subscription',amount:-450,backgroundColor:"#6cfc86",category:"Entertainment"},
	        {name: `Fridge EMI`,amount:-2500,backgroundColor:"#ff6060",category:"Bills"},
            {name: `Miscellaneous`,amount:-250,backgroundColor:"#43bee0",category:"Bills"},
            {name: 'Wings of Fire',amount:-950,backgroundColor:"#ff7200",category:"Book"}

          ]
var totalSpent = 0;
expenses.forEach(expense=>{
    totalSpent+=expense.amount
})




export default function App() {
  return (
    <View style={styles.container}>
      <Navbar totalSpent={totalSpent}/>
      <ExpenditureList expenses={expenses}/>
      <Form />
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
