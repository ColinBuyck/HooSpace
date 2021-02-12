import { List } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Image, Text, View } from 'react-native'
import { progressGraphicColor } from './ProgressGraphicColor'
//import changeCenter from './Map';
 //onPress={() => {changeCenter(item.geo)}}

const listLocations = (data, updateExpanded, isExpanded, currIndex) => {
    if (data) {
        return data.map((item, idx) => {
            //console.log("item: " + JSON.stringify(item))
            if (item && item.isActive && item.maximumAttendeeCapacity && item.occupancy && item.name && (item.occupancy.timestamp || item.occupancy.timestamp_end)) {
                //listExpander(idx);
                let currentDate: Date = new Date();
                if(item.occupancy.timestamp){
                    currentDate = new Date(item.occupancy.timestamp);
                }
                else if(item.occupancy.timestamp_end){
                    currentDate = new Date(item.occupancy.timestamp_end);
                }
                let dateOutput: string;
                let minOutput: string;
                if(currentDate.getMinutes() < 10) { minOutput = "0" + String(currentDate.getMinutes());}
                else {minOutput = String(currentDate.getMinutes());}    
                if(currentDate.getHours() > 12){
                    currentDate.setHours(currentDate.getHours()-12);
                    dateOutput = currentDate.getHours() + ":" + minOutput+ " pm";
                }
                else if(currentDate.getHours() == 0){
                    currentDate.setHours(12);
                    dateOutput = currentDate.getHours() + ":" + minOutput + " am";
                }
                else{
                    dateOutput = currentDate.getHours() + ":" + minOutput + " am";
                }
                return (
                    <View style={Styles.accordionContainer} key={idx+1}>
                        <List.Accordion
                            id={idx+1}
                            title={item.name}
                            titleStyle={Styles.listAccordionTitle}
                            key={idx+1}
                            style={Styles.listAccordion}
                            theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 } }}
                            expanded = {isExpanded(idx, currIndex)}
                            left={props =>
                                <ProgressCircle
                                    percent={(item.occupancy.value / item.maximumAttendeeCapacity) * 100}
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
                            onPress = {() => updateExpanded(idx)}
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

const LocationList = ({currIndex ,locations, updateExpanded, isExpanded}) => {
    return (
        <View>
            {listLocations(locations, updateExpanded, isExpanded, currIndex)}
        </View>
        //<List.AccordionGroup 
        // onAccordionPress = {(expandedID) => 
        //     {updateExpanded(expandedID)
        //     alert(currIndex)}
        //     }
        //>
        //</List.AccordionGroup>
    )
}

export default LocationList
