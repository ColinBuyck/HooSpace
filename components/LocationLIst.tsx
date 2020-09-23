import { List } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Text, View } from 'react-native'
import { progressGraphicColor } from './ProgressGraphicColor'

const listLocations = (data: any[]) => {
    if (data) {
        return data.map((item, idx) => {
            if (item && idx && item.maximumAttendeeCapacity) {
                return (
                    <View style={Styles.accordionContainer} key={idx}>
                        <List.Accordion
                            id={idx} title={item.name}
                            titleStyle={Styles.listAccordionTitle}
                            key={idx}
                            style={Styles.listAccordion}
                            theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 } }}
                            left={props =>
                                <ProgressCircle
                                    percent={(item.occupancy.value / item.maximumAttendeeCapacity) * 100}
                                    radius={34}
                                    borderWidth={6}
                                    color={progressGraphicColor(item.occupancy.value, item.maximumAttendeeCapacity)}
                                >
                                    <Text style={{ fontSize: 18, fontWeight: "600"}}>{Math.round((item.occupancy.value/item.maximumAttendeeCapacity)*100)}%</Text>
                                    <Text style={{ fontSize: 12 }}>full</Text>
                                </ProgressCircle>}
                        >
                            <List.Item title={"Current Capacity: " + item.occupancy.value + "/" + item.maximumAttendeeCapacity} style={Styles.listItem}>
                            </List.Item>
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