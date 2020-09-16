import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Styles } from "./Styles"
import { MapView } from "expo";

// export const Map =  {
//     {
//     return (
//       <MapView
//         style={{
//           flex: 1
//         }}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421
//         }}
//       />
//     );
//   }


// export default class App extends React.Component {
//   render() {
//     return (
//       <MapView
//         style={{
//           flex: 1
//         }}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421
//         }}
//       />
//     );
//   }
// }

export const Map = (props: any) => {
  return (
    <View style = { Styles.insidemap }>
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
}

// <View style={Styles.container}>
// <MapView style={Styles.map} />
// </View>



/**
import React, { useState } from 'react';
import { View } from 'react-native';
import { Styles } from "./Styles"
import GoogleMapReact from 'react-native-maps';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

// export const Map = (props: any) => {
//   const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
//   const [zoom, setZoom] = useState(11);
//   return (
//     <View style={{ height: '100vh', width: '100%' }}>
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         style={{flex: 1}}
//         region={{
//           latitude: 42,
//           longitude: 74,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421
//         }}
//         showsUserLocation
//       >
//       </MapView>
//     </View>
//   );
// }


const AnyReactComponent = ({textname}: any) => <View>{textname}</View>;

export const Map = (props: any) => {
    const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
    const [zoom, setZoom] = useState(11);
    return (
      <View style = { Styles.insidemap }>
      </View>
    );
}

/*
<GoogleMapReact
  bootstrapURLKeys={{ key: 'AIzaSyCrNYSvmtLLLs5aizSYOfypCXvAObdqRKw' }}
  defaultCenter={center}
  defaultZoom={zoom}
>
<AnyReactComponent
  lat={11.0168}
  lng={76.9558}
  text="My Marker"
/>
</GoogleMapReact>*/
