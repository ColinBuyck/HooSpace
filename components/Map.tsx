import React from "react";
import { View } from "react-native";
import { Styles } from "./Styles"
import MapView from 'react-native-maps';


export const Map = () => {
  return (
    <View style={Styles.insidemap}>
      <MapView
        style={{
          flex: 1
        }}
        provider="google"
        initialRegion={{
          latitude: 38.0336,
          longitude: -78.5080,
          latitudeDelta: 0.006,
          longitudeDelta: 0.0003
        }}
      />
    </View>
  );
}
