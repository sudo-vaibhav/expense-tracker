import React from 'react';
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image} from 'react-native';


export default function Screen({navigation}) {
  return (
    <View style={styles.MainContainer}>
        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={() => navigation.navigate('Add')}>
          <Image
            source={require('./categoryImages/add.png')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Add Expenses </Text>
        </TouchableOpacity>
          
        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={() => navigation.navigate('Record')}>
          <Image
            source={require('./categoryImages/register.png')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Weekly Expenses </Text>
        </TouchableOpacity>

        
      </View>

  );
}

const styles = StyleSheet.create({
MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010A43',
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ED6D93',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 80,
    width: 320,
    borderRadius: 5,
    margin: 5,
    marginTop:30,
    marginBottom:40,
  },
  ImageIconStyle: {
    padding: 5,
    margin: 5,
    height: 65,
    width: 65,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 40,
    fontSize: 22,
    paddingLeft:30,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 60,
  },
  text: {
    paddingBottom: 60,
    paddingLeft: 24,
    fontSize: 22,
    color: '#fff',
    fontStyle: 'italic',
  }
});