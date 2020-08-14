import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { List } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';

const CONTENT = [
  {
    id: 1,
    name: "Aldermann",
    maxCap: 500,
    currentCap: 80,
  },
  {
    id: 2,
    name: "Brown",
    maxCap: 500,
    currentCap: 80,
  },
  {
    id: 3,
    name: "Clemons",
    maxCap: 500,
    currentCap: 80,
  },
  {
    id: 4,
    name: "1515",
    maxCap: 100,
    currentCap: 80,
  },
  {
    id: 5,
    name: "Newcomb",
    maxCap: 700,
    currentCap: 80,
  },
  {
    id: 6,
    name: "Rotunda",
    maxCap: 300,
    currentCap: 80,
  }
]

export default function App() {

  const locationList = () => {
    return CONTENT.map((item, idx) => {
      return (
        <List.Accordion title={item.name} 
                        key={item.id} 
                        id={item.id} 
                        style={classes.listAccordion}
                        theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 }}}
                        >
          <List.Item title={"Current Capacity: " + item.currentCap + "/" + item.maxCap} style={classes.listItem}>  
          </List.Item>
        </List.Accordion>
      )
    })
  }

  return (
    <View style={classes.container}>
      <View style={classes.notchSeperator}>
      </View>
      <View style={classes.header}>
        <Image style={classes.sabreLogo} source={require('./uvaLogo.png')} ></Image>
        <Text style={classes.iconText}>
          CavSpace
        </Text>
        <Image style={classes.sabreLogo} source={require('./uvaLogo.png')} ></Image>
      </View>
      <View style={classes.mapContainer}>
        <Image style={classes.map} source={require('./map.png')}></Image>
      </View>
      <View style={classes.seperator}>
      </View> 
      <View style={classes.list}>
        <List.AccordionGroup>
          {locationList()}
        </List.AccordionGroup>
      </View>
      <View style={classes.seperator}>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const classes = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#202741',
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  iconText: {
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '7%',
    width: '100%'
  },
  //Really confused why the images seem to go out of the 
  //container with ie. alignSelf: 'flex-start'
  sabreLogo: {
    resizeMode: "contain" ,
    width: '10%'
  },
  seperator: {
    height: '1%'
  },
  notchSeperator: {
    height: '5%'
  },
  mapContainer: {
    height: '34%',
    width: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  list: {
    height: '54%',
    width: '95%',
  },
  listAccordion: {
    backgroundColor: 'white',
    backfaceVisibility: 'hidden',
    borderRadius: 10,
    marginTop: 4,
  },
  listItem: {
    backgroundColor: 'white',
    zIndex: -1,
    marginTop: -10,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginBottom: 1,
  },
  infoHeadings: {
    fontSize: 15,
    color: 'white'
  },
});
