import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'
import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Analysis() {
  return (
    <ScrollView style={styles.container}>
    <View style={{paddingTop:150, paddingLeft:7}}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F164D",
    }
})
