import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { List } from 'react-native-paper';

const CONTENT = [
  {
    id: 1,
    name: "Aldermann",
    maxCap: 500,
    currentCap: 80,
  },
  {
    id:2,
    name: "Brown",
    maxCap: 500,
    currentCap: 80,
  },
  {
    id:3,
    name: "Clemons",
    maxCap: 500,
    currentCap: 80,
  },
  {
    id:4,
    name: "1515",
    maxCap: 100,
    currentCap: 80,
  },
  {
    id:5,
    name: "Newcomb",
    maxCap: 700,
    currentCap: 80,
  },
  {
    id:5,
    name: "Rotunda",
    maxCap: 300,
    currentCap: 80,
  }
]

export default function App() {
  return (
    <View style={classes.container}>
      <View style={classes.header}>
        <Text style={classes.icon}>
          CavSpace
        </Text>
      </View>
      <View style={classes.map}>
        <Image style={classes.img} source={require('./map.png')}></Image>
      </View>
      <View style={classes.seperator}>
      </View>  
      <View style={classes.list}>
        <List.AccordionGroup>
          
        </List.AccordionGroup>
      </View>
      <View style={classes.seperator}>
      </View>
    </View>
  );
}

const classes = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202741',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    position: 'absolute',
    bottom: 4,
    color: '#FFF'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%'
  },
  seperator: {
    height: '2%'
  },
  map: {
    height: '34%',
    width: '95%',
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignContent: 'center',
    justifyContent: 'center',
  },
  list: {
    height: '55%',
    width: '95%',
    borderRadius: 20,
    backgroundColor: '#111111',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
