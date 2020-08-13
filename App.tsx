import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
        <Text>
          Hello George
        </Text>
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
