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
             color="#ff6060"
             onPress={() => navigation.navigate('Monday')}>
          </Button>
          </View>

          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Tuesday" color="#ff6060" onPress={() => navigation.navigate('Tuesday')}>
          </Button>
          </View>

          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Wednesday" color="#ff6060" onPress={() => navigation.navigate('Wednesday')}>
          </Button>
          </View>
          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Thursday" color="#ff6060" onPress={() => navigation.navigate('Thursday')}>
          </Button>
          </View>
          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Friday" color="#ff6060" onPress={() => navigation.navigate('Friday')}>
          </Button>
          </View>
          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Saturday" color="#ff6060" onPress={() => navigation.navigate('Saturday')}>
          </Button>
          </View>
          <View style={{marginBottom:20, marginTop:20, width:150, marginLeft:120}}>
          <Button  titleStyle={{
               justifyContent:"center",
              alignItems:"center",
               fontSize: 35
             }}  title="Sunday" color="#ff6060" onPress={() => navigation.navigate('Sunday')}>
          </Button>
          </View>
          <View style={{marginTop:40, width:220, marginLeft:85}}>
          <Button 
           title="Weekly Analysis" color="green" onPress={() => navigation.navigate('Analysis')} >
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
