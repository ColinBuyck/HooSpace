import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';

const CONTENT = [
  {
    id: 1,
    name: "Alderman",
    capacity: 500,
    occupancy: 80,
  },
  {
    id: 2,
    name: "Brown",
    capacity: 500,
    occupancy: 80,
  },
  {
    id: 3,
    name: "Clemons",
    capacity: 500,
    occupancy: 80,
  },
  {
    id: 4,
    name: "1515",
    capacity: 100,
    occupancy: 80,
  },
  {
    id: 5,
    name: "Newcomb",
    capacity: 700,
    occupancy: 80,
  },
  {
    id: 6,
    name: "Rotunda",
    capacity: 300,
    occupancy: 80,
  },
  {
    id: 7,
    name: "Rice Hall",
    capacity: 500,
    occupancy: 80,
  },
  {
    id: 8,
    name: "Music Library",
    capacity: 500,
    occupancy: 80,
  },
  {
    id: 9,
    name: "Fine Arts Library",
    capacity: 500,
    occupancy: 80,
  },
  {
    id: 10,
    name: "Grit Coffee",
    capacity: 100,
    occupancy: 80,
  },
  {
    id: 11,
    name: "New Cabell Hall",
    capacity: 700,
    occupancy: 80,
  },
  {
    id: 12,
    name: "Starbucks",
    capacity: 300,
    occupancy: 80,
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
          <List.Item title={"Current Capacity: " + item.occupancy + "/" + item.capacity} style={classes.listItem}>  
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
      <ScrollView style={classes.list}>
          <List.AccordionGroup>
            {locationList()}
          </List.AccordionGroup>
      </ScrollView>
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
  }
});
