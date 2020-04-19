import React from 'react';
import { StyleSheet,Text, View ,Image} from 'react-native';
import IconGetter from "./categoryImages/IconGetter"
import ArrowUp from "./categoryImages/ArrowUp"
import ArrowDown from "./categoryImages/ArrowDown"

var amt=undefined

export default function(props){
		let {name,amount,category} = props.data
		amt = amount
		amount=Math.abs(amount)
		if(amount>999){
			amount = (amount/1000).toString()+"K"
		}
		
		let transactionNatureString = ""
		if(amt>0){
			transactionNatureString = "earned"
		}
		else{
			transactionNatureString = "spent"
		}
		return(
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<View style={styles.imageContainer}>
						<IconGetter icon={category} style={{width:45,height:45}}/>
					</View>
					<View style={styles.textContainer}>
						<Text style={{color:"white",fontSize:18,marginLeft:10,textAlign:"center"}}>{name}</Text>
						<Text style={{backgroundColor: getTransactionNatureColor(amt),...styles.transactionNature}}> {transactionNatureString} {getArrow(amt)}</Text>
					</View>
				</View>
				<View style={styles.rightContainer}>
				<Text style={{color:"#ED6D93", fontWeight:"bold", fontSize: 18}}>&#8377; {amount}
				</Text>
				</View>
			</View>
		)
}






const styles= StyleSheet.create({
	transactionNature:{
					fontWeight:"bold",
					borderRadius:15,
					justifyContent:"center",
					alignItems:"center",
					color: "white",
					padding:5,
					margin:5
					
	},
	container: {
					flex:1,
					flexDirection:"row",
					width:"100%",
					height: "100%",
					margin:5
					
															
				},
	leftContainer:{
					width: "70%",
					height:"100%",
					backgroundColor: "#242F6D",
					flexDirection: "row",
					paddingTop:10,
					paddingBottom:10,
					paddingLeft:10,
					
					paddingRight:25
				  },
	rightContainer:{
						width:"30%",
						height:"100%",
						backgroundColor: "#010A43",
						padding: 25,
						justifyContent: "center",
						alignItems:"center"					
						
					},
	imageContainer: {
						width:"30%",
						height: "100%",
						justifyContent: "center",
						alignItems:"center",
						backgroundColor:"#ED6D93",
						padding:10,
						borderRadius:10
											
					},
	textContainer: {
						width: "70%",
						height: "100%",
						justifyContent: "center",
						alignItems: "center"
					}
})


function getTransactionNatureColor(amount){
	if(amount<0){
		return "red"
	}
	else{
		return "green"
	}
}

function getArrow(amt){
	if(amt<0)
		return <ArrowUp style={{padding:5,width:15,height:15}}/>
	else
		return <ArrowDown style={{padding:5,width:15,height:15}}/>
}
