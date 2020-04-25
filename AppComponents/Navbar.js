import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function(props){
	let totalSpent = props.totalSpent
	return(<View style={styles.nav}>
		<Text style={styles.text}>
			
			<Text style={{color:"#ED6D93"}}>&#8377; {-totalSpent}</Text> spent today
		</Text>
	</View>)
}


    
const styles = StyleSheet.create({
  nav: {
    width: "100%",
    backgroundColor: 'black',
    justifyContent: "center",
    
    padding: 30,
    marginTop:30
    },
  text: {
	color:"white",
	fontSize:25,
	fontWeight:"bold",
	textAlign: "center"
  }
})
