import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackAction} from 'react-navigation';
import React from 'react';
import {Stylesheet, Text, View, Button} from 'react-native';
import Screen from "./AppComponents/Screen";
import Navbar from "./AppComponents/Navbar";
import ExpenditureList from "./AppComponents/ExpenditureList";
import AddButton from "./AppComponents/AddButton";
import About from "./AppComponents/About";
import Monday from "./AppComponents/Monday";
import Tuesday from "./AppComponents/Tuesday";
import Wednesday from "./AppComponents/Wednesday";
import Thursday from "./AppComponents/Thursday";
import Friday from "./AppComponents/Friday";
import Saturday from "./AppComponents/Saturday";
import Sunday from "./AppComponents/Sunday";

const AboutStack = createStackNavigator({
  About: {
    screen: About,
  },
  Home: {
    screen: Screen,
  },
  Monday: {
  	screen: Monday,
  },
  Tuesday: {
  	screen: Tuesday,
  },
  Wednesday: {
  	screen: Wednesday,
  },
  Thursday: {
  	screen: Thursday,
  },
  Friday: {
  	screen: Friday,
  },
  Sunday: {
  	screen: Sunday,
  },
  Saturday: {
  	screen: Saturday,
  }
});

export default createAppContainer(AboutStack);

