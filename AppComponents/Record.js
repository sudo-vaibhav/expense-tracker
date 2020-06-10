import React,{useState} from 'react';
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import Navbar from "./Navbar"
import ExpenditureList from "./ExpenditureList"
import AddButton from "./AddButton"

export default function Record({navigation}) {
  return (
    <View style={styles.MainContainer}>
     <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
               alignItems:"center",
               fontSize: 35
             }}  
             title="Monday" 
             buttonStyle={{backgroundColor: "#ED6D93", width:200 ,height:180,marginBottom:60}} 
             onPress={() => navigation.navigate('Monday')}>
          </Button>
          </View>

          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Tuesday" buttonStyle={{backgroundColor: "#ED6D93",width:120,height:180,marginBottom:20}} onPress={() => navigation.navigate('Tuesday')}>
          </Button>
          </View>

          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Wednesday" buttonStyle={{backgroundColor: "#ED6D93",width:120,height:180,marginBottom:20}} onPress={() => navigation.navigate('Wednesday')}>
          </Button>
          </View>
          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Thursday" buttonStyle={{backgroundColor: "#ED6D93",width:120,height:180,marginBottom:20}} onPress={() => navigation.navigate('Thursday')}>
          </Button>
          </View>
          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Friday" buttonStyle={{backgroundColor: "#ED6D93",width:120,height:180,marginBottom:20}} onPress={() => navigation.navigate('Friday')}>
          </Button>
          </View>
          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Saturday" buttonStyle={{backgroundColor: "#ED6D93",width:120,height:180,marginBottom:20}} onPress={() => navigation.navigate('Saturday')}>
          </Button>
          </View>
          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Sunday" buttonStyle={{backgroundColor: "#ED6D93",width:120,height:180,marginBottom:20}} onPress={() => navigation.navigate('Sunday')}>
          </Button>
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
