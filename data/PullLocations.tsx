import { Location } from './../interfaces/Location';
import React from 'react';

export function PullLocations(): Promise<Location[]> {
    return fetch("http://uvalib-api-occupancy.firebaseio.com/locations-schemaorg/location.json")
        .then(value => {
          return value.json();
        })
        .then(
            json => {
                var locs = new Array();
                const buildings = ['physics', 'special-collections', "scholars-lab", 'ivy', "music", "main", "astronomy", "mathematics", "science", "health-sciences", "law", "clemons", "fine-arts", "robertson-media-center", "darden", "jag", "harrison"];

                buildings.forEach((buildingName: string) => {
                  const building = json[buildingName];
                  locs.push({
                    name: building['name'],
                    geo: building['geo'],
                    isOpenNow: building['isOpenNow'],
                    maximumAttendeeCapacity: building['maximumAttendeeCapacity'],
                    occupancy: building['occupancy'],
                    noMaskCount: building['noMaskCount'],
                  });
                });
                return locs;
            }
        );
}
