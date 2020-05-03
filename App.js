import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackAction} from 'react-navigation';
import React from 'react';
import {Stylesheet, Text, View, Button} from 'react-native';
import Screen from "./AppComponents/Screen";
import Navbar from "./AppComponents/Navbar";
import ExpenditureList from "./AppComponents/ExpenditureList";
import AddButton from "./AppComponents/AddButton";
import About from "./AppComponents/About";

const AboutStack = createStackNavigator({
  About: {
    screen: About,
  },
  Home: {
    screen: Screen,
  }
});

export default createAppContainer(AboutStack);

