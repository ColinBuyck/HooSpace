import { BuildingLocations } from "../data/BuildingLocations"
import { List } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Text, View } from 'react-native'
import {progressGraphicColor} from './ProgressGraphicColor'

const listLocations = () => {
    return BuildingLocations.map((item, idx) => {
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
                            radius={30}
                            borderWidth={10}
                            color = {progressGraphicColor(item.occupancy, item.capacity)}
                        >
                            <Text style={{ fontSize: 14 }}>{Math.round((item.occupancy/item.capacity)*100) + '%'}</Text>
                        </ProgressCircle>}
                >
                    <List.Item title={"Current Capacity: " + item.occupancy + "/" + item.capacity} style={Styles.listItem}>
                    </List.Item>
                </List.Accordion>
            </View>
        )
    })
}

export default function LocationList() {
    return (
        <List.AccordionGroup>
            {listLocations()}
        </List.AccordionGroup>
    )
}

