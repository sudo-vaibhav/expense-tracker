import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'
import React,{useState} from 'react';
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import Navbar from "./Navbar"
import ExpenditureList from "./ExpenditureList"
import AddButton from "./AddButton"


import ModalDropdown from 'react-native-modal-dropdown'
export default function Record({navigation}) {
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    function navigationDropdownChangeHandler(index){
        navigation.navigate(days[index])

  }
    return (
    <View style={styles.MainContainer}>
     {/* <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}> */}
         <ModalDropdown defaultIndex={0} onSelect={index=>{navigationDropdownChangeHandler(index)}} 
         dropdownTextStyle = {
             {
                 fontSize: 20
             }
         }
         dropdownStyle = {
             {
                 width: "78%"
             }
         }
         textStyle = {
             {
                 color: "white",
                 borderBottomWidth: 2,
                 fontSize: 15,
                 margin: 10,
                 borderBottomColor: "#ED6D93"
             }
         }
         style = {
             {
                 marginTop: 10,
                 height: "20%",
                 width:"80%",
                 marginLeft:"10%",


             }
         }
         options = {
             days
         }
         ></ModalDropdown>
         <View style={{paddingTop:80, paddingLeft:7}}>
    <VerticalBarGraph
  data={[150, 450, 150, 950, 350, 499, 699]}
  labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
  width={330}
  height={400}
  barRadius={5}
  barWidthPercentage={0.65}
  barColor='#53ae31'
  baseConfig={{
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'left',
      prefix: 'Rs',
    }
  }}
  style={{
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    paddingLeft:20,
    borderRadius: 20,
    backgroundColor: `#dff4d7`,
    width: 380,
  }}
/>
    </View>
    

      </View>
  );
}

const styles = StyleSheet.create({
MainContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#010A43',
  },
});