import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import LocationList from './components/LocationList';
import { Styles } from './components/Styles';
import SwitchSelector from 'react-native-switch-selector';
import { BuildingLocations } from "./data/BuildingLocations"
import { TestingData } from './data/TestingLocations';
import TestingList from './components/TestingList';
import { Map } from './components/Map';


export default function App() {
  const [isStudySpot, setIsStudySpot] = useState(0)
  const setView = (value: any) => {
    setIsStudySpot(value)
  }
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
        <Map />
      </View>
      <View style={Styles.seperator}>
      </View>
      <View style={Styles.seperator}>
      </View>
      <View style={Styles.listSwitch}>
        <SwitchSelector options={[
          { label: 'UVA Locations', value: 0 },
          { label: 'Testing Centers', value: 1 }]} selectedColor={'white'} buttonColor={'#F84C1E'} borderColor={'#F84C1E'} initial={0}
          onPress={value => setView(value)} />
      </View>
      <ScrollView style={Styles.list}>
        {isStudySpot === 0 ? <LocationList BuildingLocations={BuildingLocations} /> : <TestingList TestingLocations={TestingData} />}
      </ScrollView>
      <View style={Styles.seperator}>
      </View>
      <StatusBar style="light" />
    </View>
  );
}