import React from 'react';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import LocationList from './components/LocationLIst';
import { Styles } from './components/Styles';
//import { Map } from './components/Map';


//<Image style={Styles.map} source={require('./assets/map.png')}></Image> 

export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.notchSeperator}>
        </View>
        <View style={Styles.header}>
          <Image style={Styles.sabreLogo} source={require('./assets/uvaLogo.png')} ></Image>
          <Text style={Styles.iconText}>
            CavSpace
          </Text>
          <Image style={Styles.sabreLogo} source={require('./assets/uvaLogo.png')} ></Image>
        </View>
        <View style={Styles.mapContainer}>
        <View style = { Styles.insidemap }>
           <MapView
              style={{
                flex: 1
              }}
              initialRegion={{
                latitude: 38.0336,
                longitude: -78.5080,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0011
              }}
            />
          </View>
        </View>
        <View style={Styles.seperator}>
        </View>
        <ScrollView style={Styles.list}>
          <LocationList></LocationList>
        </ScrollView>
        <View style={Styles.seperator}>
        </View>
        <StatusBar style="light" />
      </View>
    );
  }
}