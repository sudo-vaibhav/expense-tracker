import React from 'react';

import Food from "./icons/Food"
import Internet from "./icons/Internet"
import Bills from "./icons/Bills"
import Medical from "./icons/Medical"
import Entertainment from "./icons/Entertainment"
import Book from "./icons/Book"

export default function(props){
	let icon = props.icon
	if(icon == "Food"){
		return (<Food />)
	}
	if(icon == "Internet"){
		return (<Internet />)
	}
	if(icon == "Bills"){
		return (<Bills />)
	}
	if(icon == "Medical"){
		return (<Medical />)
	}
	if(icon == "Book"){
		return (<Book />)
	}
	if(icon == "Entertainment"){
		return <Entertainment />
	}
	
}
