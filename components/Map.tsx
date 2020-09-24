import React from "react";
import { View } from "react-native";
import { Styles } from "./Styles"
import MapView, { Marker } from 'react-native-maps';


const Map = ({locations}: any) => {
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
      >

        
        {locations && locations.map((item: any, idx: any) => {
            if (item && idx && (item.maximumAttendeeCapacity || item['@type'] == "CovidTestSite")) {
              return (
                  <Marker
                    key = {item.name}
                    coordinate={
                      { latitude: item.geo.latitude, longitude: item.geo.longitude }
                    }
                    title={item.name}
                  />
              )
            }
          })
        }


{/* <Marker
                    coordinate={
                      { latitude: 38.0365, longitude: -78.506099 }
                    }
                    title={"Clemons Library"}
                  />
        <Marker
          coordinate={
            { latitude: 38.0331, longitude: -78.507999 }
          }
          title={"Charles L Brown Science & Engineering Library"}
        />
        <Marker
          coordinate={
            { latitude: 38.035588, longitude: -78.506919 }
          }
          title={"Newcomb Hall South Meeting Room Covid Test Site"}
        />
        <Marker
          coordinate={
            { latitude: 38.035579, longitude: -78.503389 }
          }
          title={"Rotunda Multipurpose Room Covid Test Site"}
        /> */}

        {/* {data.map((item, idx) => (
          <Marker
            coordinate={{ latitude: 38.0336, longitude: -78.5080 }}
          />
        ))} */}

      </MapView>
    </View>
  );
}


export default Map