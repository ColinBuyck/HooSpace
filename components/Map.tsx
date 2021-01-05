import React from "react";
import { Image, View } from "react-native";
import { Styles } from "./Styles"
import MapView, { Marker } from 'react-native-maps';



const Map = ({ locations }: any) => {
  // const [center, setCenter] = React.useState({
  //   latitude: 38.0336,
  //   longitude: -78.5080,
  //   latitudeDelta: 0.006,
  //   longitudeDelta: 0.0003
  // });
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
        //region={ center }
      >

        
        {locations && locations.map((item: any, idx: any) => {
            if (item && item.geo && item.name  && item.isActive ) {
              if(item['@type'] != "CovidTestSite"){
                return (
                  <Marker
                    key = {idx+1}
                    coordinate={
                      { latitude: item.geo.latitude, longitude: item.geo.longitude }
                    }
                    title={item.name}
                    image={require('../assets/space_marker.png')}
                  />
                )
              } else {
                return (
                  <Marker
                    key = {idx+1}
                    coordinate={
                      { latitude: item.geo.latitude, longitude: item.geo.longitude }
                    }
                    title={item.name}
                    image={require('../assets/test_marker.png')}
                  />
                )
              }
            }
          })
        }
      </MapView>
    </View>
  );
}

// export const changeCenter = (geo: any) => {
//   setCenter({
//     latitude: geo.latitude,
//     longitude: geo.longitude,
//     latitudeDelta: 0.006,
//     longitudeDelta: 0.0003
//   })
// }

export default Map


//<Image style={Styles.sabreLogo} source={require('../assets/uvaLogo.png')}></Image>