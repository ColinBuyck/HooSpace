import { Value } from "./Value";
import { Geo } from "./Geo";
import { ContainedLocation } from "./ContainedLocation";

export interface Location {
    name: String;
    geo: Geo;
    isOpenNow: boolean;
    maximumAttendeeCapacity: number;
    occupancy: Value;
    noMaskCount: Value;
}