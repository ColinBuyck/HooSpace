import { Location } from './../interfaces/Location';
import React from 'react';
import LocationList from '../components/LocationLIst';

export function PullLocations(): Promise<Location[]> {
    return fetch("http://uvalib-api-occupancy.firebaseio.com/locations-schemaorg/location.json")
        .then(
            value => value.json()
        )
        .then(
            json => {
                var locs = new Array();
                //console.log("in pulllocations " + JSON.stringify(json));
                const buildings = ['physics', 'special-collections', "scholars-lab", 'ivy', "music", "main", "astronomy", "mathematics", "science", "health-sciences", "law", "clemons", "fine-arts", "robertson-media-center", "darden", "jag", "harrison"];
                buildings.forEach(building => {
                    locs.push({name: json[`${building}.name`], latitude: json[`${building}.latitude`], longitude: json[`${building}.longitude`], isOpenNow: json[`${building}.isOpenNow`], maximumAtendeeCapacity: json[`${building}.maximumAtendeeCapacity`], occupancy: { timestamp: json[`${building}.occupancy.timestamp_end`], count: json[`${building}.occupancy.value`]}, noMaskCount: {timestamp: json[`${building}.noMaskCount.timestamp_end`], count: json[`${building}.noMaskCount.value`]}});
                });
                return locs;
            }
        );
}