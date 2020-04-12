import React from 'react';
import {FlatList,StyleSheet, Text, View } from 'react-native';
//var {vw, vh} = require('react-native-viewport-units');
import ExpenseItem from "./ExpenseItem"

var expenses = [
            {name: `McDonald's`,backgroundColor:"#ff6060"},
            {name: `Mom's medicines`,backgroundColor:"#43bee0"},
            {name: 'Electricity bill',backgroundColor:"#ff7200"},
            {name: 'Internet recharge',backgroundColor:"#dd66f4"},
            {name: 'Netflix subscription',backgroundColor:"#6cfc86"}
          ]


//<Text style={{height: 150,marginTop:15,marginBottom:15}}>{item.name}</Text>
export default function(){
	return(
		<View style={expenditureListstyles.expenditureStyles}>
			<FlatList style={{backgroundColor:"#e5dede",width:"95%"}}
          data={expenses}
          renderItem={({item}) => <ExpenseItem name={item.name} backgroundColor={item.backgroundColor}/>}
        />
		</View>
		  )
}


const expenditureListstyles = StyleSheet.create({
  expenditureStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e5dede"
    }
})
