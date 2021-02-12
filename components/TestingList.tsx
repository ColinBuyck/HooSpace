import { List, Avatar } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Text, View } from 'react-native'
import { progressGraphicColor } from './ProgressGraphicColor'

const listTestSites = (locations, updateExpanded, isExpanded, currIndex) => {
    if(locations){
        return locations.map((item: any, idx: number) => {
            if (item && item.isActive && item.name && item.occupancy && item.openingHours && item['@type'] == "CovidTestSite" ) {
                let currentDate: Date = new Date();
                let timestamp: Date = new Date();
                if(item.occupancy.timestamp)
                    timestamp = new Date(item.occupancy.timestamp);

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
                    <View style={Styles.accordionContainer} key={idx+1}>
                        <List.Accordion title={item.name}
                            titleStyle={Styles.listAccordionTitle}
                            key={idx+1}
                            id={idx+1}
                            style={Styles.listAccordion}
                            expanded = {isExpanded(idx, currIndex)}
                            onPress = {() => updateExpanded(idx)}
                            titleNumberOfLines={3}
                            descriptionNumberOfLines={3}
                            theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 } }}
                            left={props =>
                                <ProgressCircle
                                    percent={((item.occupancy.value/item.servers.value * 2) / 60) * 100}
                                    radius={34}
                                    borderWidth={6}
                                    color={progressGraphicColor((item.occupancy.value/item.servers.value * 2), 60)}
                                >
                                    <Text style={{ fontSize: 18, fontWeight: "600" }}>{(item.occupancy.value/item.servers.value * 2)}</Text>
                                    <Text style={{ fontSize: 12, textAlign: "center" }}> Minute Wait</Text>
                                </ProgressCircle>}
                        >
                            <List.Item title={"Curent line length: " + item.occupancy.value + " people"} style={Styles.listItem}/>
                            {item.occupancy.timestamp && <List.Item title={"Updated: " + dateOutput}/>}
                            <List.Item title={"Hours: " + item.openingHours} titleNumberOfLines={2} style={Styles.listItem}/>
                        </List.Accordion>
                    </View>
                )
            }
        })
    }
}

const TestingList = ({currIndex ,locations, updateExpanded, isExpanded}) => {
    return (
        <View>
            {listTestSites(locations, updateExpanded, isExpanded, currIndex)}
        </View>
    )
}
export default TestingList
