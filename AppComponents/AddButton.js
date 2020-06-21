import React,{useState} from "react"
import {Button} from 'react-native-elements'
import ModalDropdown from 'react-native-modal-dropdown'
import {TextInput,View,StyleSheet,ScrollView} from "react-native"

import categories from "./categories"
import modes from "./modes"


export default function AddButton(props){
	const [transactionDescription,setTransactionDescription] = useState("")
	const [transactionAmount,setTransactionAmount] = useState("0")
	// const [transactionAmount,setTransactionAmount] = useState(0)
	const [categoryIndex,setCategory] = useState(0)
	const [modeIndex,setMode] = useState(0)
	const transAmtHandler = (transAmt)=>{
		// setTransactionAmount(parseFloat(transAmt))
		setTransactionAmount(transAmt)
	} 
	const transDescHandler= (transDesc)=>{
		setTransactionDescription(transDesc)
	}
	
	const categoryDropdownHandler = (selectedIndex)=>{
		setCategory(selectedIndex)
	}

	const modeDropdownHandler = (selectedMode)=>{
		console.log(selectedMode)
		setMode(selectedMode)
	}
	
	const addButtonPressHandler = ()=>{
		props.onAddExpense({name: transactionDescription,amount: -parseFloat(transactionAmount),category: categoryIndex, mode:modeIndex})
		setTransactionAmount("")
		setTransactionDescription("")
		setCategory(-1)
		setMode(-1)
	}
	return (
		    <ScrollView>
			<View style={styles.addButtonView}>
				<View style={{width:"100%",paddingRight:20,paddingLeft:20,paddingTop:60,flexDirection:"column"}}>
					<TextInput style={{borderBottomWidth:2,borderBottomColor:"#ED6D93",margin:10,height:"20%",color:"white"}} placeholder="Transaction Description" value= {transactionDescription} onChangeText={transDescHandler}>
					</TextInput>
					<ModalDropdown defaultIndex={categoryIndex} onSelect={(index)=>categoryDropdownHandler(index)} dropdownTextStyle={{fontSize: 20}} dropdownStyle={{width:"100%"}} textStyle={{color:"white",borderBottomWidth:2,fontSize:15,margin:10,borderBottomColor:"#ED6D93"}} style={{marginTop:10,height:"20%"}} options={categories} />
					<ModalDropdown defaultIndex={modeIndex} onSelect={index=>modeDropdownHandler(index)} dropdownTextStyle={{fontSize: 20}} dropdownStyle={{width:"100%"}} textStyle={{color:"white",borderBottomWidth:2,fontSize:15,margin:10,borderBottomColor:"#ED6D93"}} style={{marginTop:10,height:"30%"}} options={modes} />

				</View>
		                

				<View style={{width:"60%",alignItems:"center",paddingBottom:30, flexDirection:"row",paddingRight:100}}>	
					<TextInput style={{borderBottomWidth:2,borderBottomColor:"#ED6D93",margin:10,width:"100%",height:"30%",color:"white"}} keyboardType={'phone-pad'} placeholder="Amount" value={transactionAmount} onChangeText={transAmtHandler}>
					</TextInput>					
					<Button  titleStyle={{
						   justifyContent:"center",
							alignItems:"center",
						   fontSize: 35
					   }}  title="+" onPress={addButtonPressHandler} buttonStyle={{backgroundColor: "#ED6D93",width:60,height:60,marginBottom:20,borderRadius: 50}}>
					</Button>
				</View>
			</View>
			</ScrollView>
			)
}

const styles= StyleSheet.create({
	addButtonView:{
		height:"100%",
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#010A43"
	}
})