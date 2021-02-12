import { List } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Image, Text, View } from 'react-native'
import { progressGraphicColor } from './ProgressGraphicColor'
//import changeCenter from './Map';
 //onPress={() => {changeCenter(item.geo)}}

const listLocations = (data: any[]) => {
    if (data) {
        return data.map((item, idx) => {
            //console.log("item: " + JSON.stringify(item))
            if (item && item.isActive && item.maximumAttendeeCapacity && item.occupancy && item.name && (item.occupancy.timestamp || item.occupancy.timestamp_end)) {
                let currentDate: Date = new Date();
                let timestamp: Date = new Date();
                if(item.occupancy.timestamp){
                    timestamp = new Date(item.occupancy.timestamp);
                }
                else if(item.occupancy.timestamp_end){
                    timestamp = new Date(item.occupancy.timestamp_end);
                }
                let dateOutput: string = "";
                let seconds:number = Math.floor((currentDate.getTime() - timestamp.getTime()) / 1000);
                let interval: number  = seconds / 86400;
                if (interval > 1) {
                  dateOutput = "Over a day ago"
                  interval = 0;
                  seconds = 0;
                }else{
                    interval = seconds / 3600;
                }

                if (interval > 1) {
                  dateOutput =  Math.floor(interval) + " hours ago";
                  interval = 0;
                  seconds = 0;
                }else{
                    interval = seconds / 60;
                }

                if (interval > 1) {
                  dateOutput = Math.floor(interval) + " minutes ago";
                  interval = 0;
                  seconds = 0;
                }

                if(seconds > 0)
                    dateOutput = Math.floor(seconds) + " seconds ago";

                return (
                    <View  style={Styles.accordionContainer} key={idx+1}>
                        <List.Accordion
                            id={idx+1}
                            title={item.name}
                            titleStyle={Styles.listAccordionTitle}
                            key={idx+1}
                            style={Styles.listAccordion}
                            titleNumberOfLines={3}
                            descriptionNumberOfLines={3}
                            theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 } }}
                            left={props =>
                                <ProgressCircle
                                    percent= {item.isOpenNow ?(item.occupancy.value / item.maximumAttendeeCapacity) * 100 : 0}
                                    radius={34}
                                    borderWidth={6}
                                    color={progressGraphicColor(item.occupancy.value, item.maximumAttendeeCapacity)}
                                >
                                    <View>
                                        {item.isOpenNow ? 
                                        <>
                                        <Text style={{ fontSize: 18, fontWeight: "600", alignSelf: 'center'}}>{Math.round((item.occupancy.value/item.maximumAttendeeCapacity)*100)}%</Text>
                                        <Text style={{ fontSize: 12, alignSelf: 'center'}}>full</Text>
                                        </>
                                        :
                                        <Image style = {Styles.closed} source={require('../assets/closed.png')} ></Image>
                                        }
                                    </View>
                                </ProgressCircle>}
                        >

                            {item.isOpenNow ?
                            <List.Item title={"Current Capacity: " + item.occupancy.value + "/" + item.maximumAttendeeCapacity} style={Styles.listItem}/>:
                            <List.Item title={"Current Capacity: Closed"} style={Styles.listItem}/>
                            }

                            {
                            <List.Item title={"Updated: " + dateOutput}/>
                            }
                        </List.Accordion>
                    </View>
                )
            }
        })
    }
}

export const LocationList = ({locations}: any) => {
    return (
        <List.AccordionGroup>
            {listLocations(locations)}
        </List.AccordionGroup>
    )
}