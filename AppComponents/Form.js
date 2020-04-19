import React, {Component} from "react";
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class Form extends Component{
	constructor() {
		super()
		this.state={
			amount: "",
			item: ""
		}

		this.handleChangeText=this.handleChangeText.bind(this)
	}

    handleChangeText(event) {
    	this.setState({
    		[event.target.name]: event.target.value
    	})
    }


	render() {
		return(
			<View style={styles.container}>
			    <Text>Add Items</Text>
                <TextInput defaultValue={this.state.item} onChangeText={this.handleChangeText}/>
                <Text>Amount</Text>
                <TextInput defaultValue={this.state.amount} onChangeText={this.handleChangeText}/>

                <Text>{this.state.item}</Text>
                <Text>{this.state.amount}</Text>

			</View>
			
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0F264D",
    padding: 20
    }
})

