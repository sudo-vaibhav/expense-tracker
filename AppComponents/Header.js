import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function(){
	return(<View style={styles.header}>
		<Text style={styles.text}>
			Expense Tracker
		</Text>
	</View>)
}


    
const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: 'black',
    justifyContent: "center",
    height: 75,
    padding: 30,
    marginTop:30
    },
  text: {
	color:"white"
  }
})
