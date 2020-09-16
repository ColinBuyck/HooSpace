import React from 'react';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import LocationList from './components/LocationLIst';
import { Styles } from './components/Styles';
import { Map } from './components/Map';

export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.notchSeperator}>
        </View>
        <View style={Styles.header}>
          <Image style={Styles.sabreLogo} source={require('./assets/uvaLogo.png')} ></Image>
          <Text style={Styles.iconText}>
            HooSpace
          </Text>
          <Image style={Styles.sabreLogo} source={require('./assets/uvaLogo.png')} ></Image>
        </View>
        <View style={Styles.mapContainer}>
          <Map/>
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