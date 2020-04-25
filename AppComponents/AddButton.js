import React,{useState} from "react"
import {Button} from 'react-native-elements'
import ModalDropdown from 'react-native-modal-dropdown'
import {TextInput,View,StyleSheet} from "react-native"

import categories from "./categories"

export default function(props){
	const [transactionDescription,setTransactionDescription] = useState("")
	const [transactionAmount,setTransactionAmount] = useState(0)
	const [categoryIndex,setCategory] = useState(0)
	const transAmtHandler = (transAmt)=>{
		setTransactionAmount(parseFloat(transAmt))
	} 
	const transDescHandler= (transDesc)=>{
		setTransactionDescription(transDesc)
	}
	
	const categoryDropdownHandler = (selectedIndex)=>{
		setCategory(selectedIndex)
	}
	
	const addButtonPressHandler = ()=>{
		props.onAddExpense({name: transactionDescription,amount: -transactionAmount,category: categoryIndex})
		setTransactionAmount("")
		setTransactionDescription("")
		setCategory(-1)
	}
	return (
			<View style={styles.addButtonView}>
				<View style={{width:"70%",height:"100%",paddingRight:20,paddingLeft:20}}>
					<TextInput style={{borderBottomWidth:2,borderBottomColor:"#ED6D93",margin:10,height:"30%",color:"white"}} placeholder="Transaction Description" value= {transactionDescription} onChangeText={transDescHandler}>
					</TextInput>
					<ModalDropdown defaultIndex={categoryIndex} onSelect={categoryDropdownHandler} dropdownTextStyle={{fontSize: 20}} dropdownStyle={{width:"60%"}} textStyle={{color:"white",borderBottomWidth:2,fontSize:15,margin:10,borderBottomColor:"#ED6D93"}} style={{marginTop:20,height:"30%"}} options={categories} />
					
				</View>
				<View style={{width:"30%",height:"100%",alignItems:"center",justifyContent:"space-between"}}>	
					<TextInput style={{borderBottomWidth:2,borderBottomColor:"#ED6D93",margin:10,width:"100%",height:"30%",color:"white"}} placeholder="amount" value={transactionAmount} onChangeText={transAmtHandler}>
					</TextInput>					
					<Button  titleStyle={{
						   justifyContent:"center",
							alignItems:"center",
						   fontSize: 35
					   }}  title="+" onPress={addButtonPressHandler} buttonStyle={{backgroundColor: "#ED6D93",width:60,height:60,marginBottom:20,borderRadius: 50}}>
					</Button>
				</View>
			</View>
			)
}

const styles= StyleSheet.create({
	addButtonView:{
		height:"25%",
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#010A43"
	}
})
