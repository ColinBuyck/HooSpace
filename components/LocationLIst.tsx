import { List } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Text, View } from 'react-native'
import {progressGraphicColor} from './ProgressGraphicColor'
import { PullLocations } from "../data/PullLocations"
import { Location } from "../interfaces/Location"

const LocationList = ({BuildingLocations}: any) => {
    return BuildingLocations.map((item: any, idx: number) => {
        return (
            <View style = {Styles.accordionContainer} key={idx}>
                <List.Accordion title={item.name}
                    titleStyle= {Styles.listAccordionTitle}
                    key={item.id}
                    id={item.id}
                    style={Styles.listAccordion}
                    theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 } }}
                    left = {props => 
                        <ProgressCircle
                            percent={(item.occupancy/item.capacity)*100}
                            radius={34}
                            borderWidth={7}
                            color = {progressGraphicColor(item.occupancy, item.capacity)}
                            shadowColor = "#A9A9A9"
                        >
                            <Text style={{ fontSize: 18, fontWeight: "600"}}>{Math.round((item.occupancy/item.capacity)*100)}%</Text>
                            <Text style={{ fontSize: 12 }}>full</Text>
                        </ProgressCircle>}
                >
                    <List.Item title={"Current Capacity: " + item.occupancy + "/" + item.capacity} style={Styles.listItem}>
                    </List.Item>
                </List.Accordion>
            </View>
        )
    })
}

export default LocationList