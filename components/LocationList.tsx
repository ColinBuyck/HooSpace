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
            console.log("item: " + JSON.stringify(item))
            if (item && item.maximumAttendeeCapacity && item.occupancy && item.name) {
                return (
                    <View style={Styles.accordionContainer} key={idx+1}>
                        <List.Accordion
                            id={idx+1}
                            title={item.name}
                            titleStyle={Styles.listAccordionTitle}
                            key={idx+1}
                            style={Styles.listAccordion}
                            theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 } }}
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
                        >

                            {item.isOpenNow ?
                            <List.Item title={"Current Capacity: " + item.occupancy.value + "/" + item.maximumAttendeeCapacity} style={Styles.listItem}/>:
                            <List.Item title={"Current Capacity: Closed"} style={Styles.listItem}/>
                            }

                            {item.occupancy.timestamp_end ?
                                <List.Item title={"Updated: " + new Date(item.occupancy.timestamp_end).getHours() + ":" + new Date(item.occupancy.timestamp_end).getMinutes()}/> :
                                <List.Item title={"Updated: " + new Date(item.occupancy.timestamp).getHours() + ":" + new Date(item.occupancy.timestamp).getMinutes()}/>
                            }
                        </List.Accordion>
                    </View>
                )
            }
        })
    }
}

const LocationList = ({locations}: any) => {
    return (
        <List.AccordionGroup>
            {listLocations(locations)}
        </List.AccordionGroup>
    )
}

export default LocationList