import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import SvgComponent from "./categoryImages/SvgComponent"
export default function(props){
		return(
			<View style={styles.expenseItem}>
				<View style={{justifyContent:"center",width:"60%",height:"100%",backgroundColor:"white",borderBottomColor:props.backgroundColor,borderBottomWidth:5}}>
					<Text style={{fontSize:20,padding:10}}>{props.name}</Text>
				</View>
				<View style={{width:"40%",height:"100%", backgroundColor: props.backgroundColor, justifyContent:"center",alignItems:"center"}}>					
					<SvgComponent style={{width:"90%",height:"90%"}}/>				
				</View>
			</View>
		)
}

const styles= StyleSheet.create({
	expenseItem: {
					height: 150,
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
					backgroundColor: "yellow",
					marginBottom: 10,
					marginTop: 10,
					flexDirection: "row",
					borderRadius: 10,
					overflow:"hidden"
				 }
})
