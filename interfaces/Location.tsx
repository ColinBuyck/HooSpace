import { Count } from "./Count";
import { ContainedLocation } from "./ContainedLocation";

export interface Location {
    name: String;
    latitude: number;
    longitude: number;
    isOpenNow: boolean;
    maximumAtendeeCapacity: number;
    occupancy: Count;
    noMaskCount: Count;
}