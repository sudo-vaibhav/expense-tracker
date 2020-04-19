import React from 'react';
import {FlatList,StyleSheet, Text, View } from 'react-native';

import ExpenseItem from "./ExpenseItem"


//<Text style={{height: 150,marginTop:15,marginBottom:15}}>{item.name}</Text>
export default function(props){
	let expenses = props.expenses
	return(
		<View style={expenditureListstyles.expenditureStyles}>
			<FlatList style={{backgroundColor:"#0F164D",width:"95%"}}
          data={expenses}
          renderItem={({item}) => <ExpenseItem data={item}/>}
        />
		</View>
		  )
}


const expenditureListstyles = StyleSheet.create({
  expenditureStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0F164D",
    paddingBottom : 150
    
    }
})
