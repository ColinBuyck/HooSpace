import { Location } from './../interfaces/Location';
import React from 'react';
import LocationList from '../components/LocationLIst';

export function PullLocations(): Promise<Location[]> {
    return fetch("http://uvalib-api-occupancy.firebaseio.com/locations-schemaorg/location.json")
        .then(value => {
          console.log('value', value);
          return value.json();
        })
        .then(
            json => {
                var locs = new Array();
                //console.log("in pulllocations " + JSON.stringify(json));
                const buildings = ['physics', 'special-collections', "scholars-lab", 'ivy', "music", "main", "astronomy", "mathematics", "science", "health-sciences", "law", "clemons", "fine-arts", "robertson-media-center", "darden", "jag", "harrison"];

                buildings.forEach((buildingName: string) => {
                  const building = json[buildingName];
                  console.log(building['name']);
                  locs.push({
                    name: building['name'],
                    latitude: building['latitude'],
                    longitude: building['longitude'],
                    isOpenNow: building['isOpenNow'],
                    maximumAtendeeCapacity: building['maximumAtendeeCapacity'],
                    occupancy: { timestamp: building['occupancy.timestamp_end'],
                    count: building['occupancy.value']},
                    noMaskCount: {
                      timestamp: building['noMaskCount.timestamp_end'],
                      count: building['noMaskCount.value']
                    }
                  });
                });
                return locs;
            }
        );
}
