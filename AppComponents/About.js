import React from 'react';
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image} from 'react-native';


export default function About({navigation}) {
  return (
    <View style={styles.MainContainer}>
        <Text style={styles.text}> Expanse tracker which keeps the track of your day to day expenses! </Text>
        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('./categoryImages/ranking.png')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Let's Get Started </Text>
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