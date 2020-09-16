import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import LocationList from './components/LocationLIst';
import { Styles } from './components/Styles';


export default function App() {

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
        <Image style={Styles.map} source={require('./assets/map.png')}></Image>
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
