import { List, Avatar } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Text, View } from 'react-native'
import { progressGraphicColor } from './ProgressGraphicColor'

const TestingList = ({ locations }: any) => {
    return locations.map((item: any, idx: number) => {
        if (item && item.isActive && item.name && item.occupancy && item.openingHours && item['@type'] == "CovidTestSite" ) {
            let currentDate: Date = new Date(item.occupancy.timestamp);
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
                    <List.Accordion title={item.name}
                        titleStyle={Styles.listAccordionTitle}
                        key={idx+1}
                        id={idx+1}
                        style={Styles.listAccordion}
                        theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 } }}
                        left={props =>
                            <ProgressCircle
                                percent={(item.occupancy.value / 100) * 100}
                                radius={34}
                                borderWidth={6}
                                color={progressGraphicColor(item.occupancy.value, 100)}
                            >
                                <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.occupancy.value}</Text>
                                <Text style={{ fontSize: 12 }}> People</Text>

                            </ProgressCircle>}
                    >
                        <List.Item title={"Curent line length: " + item.occupancy.value + " people"} style={Styles.listItem}/>
                        {item.occupancy.timestamp && <List.Item title={"Updated: " + dateOutput}/>}
                        <List.Item title={"Hours: " + item.openingHours} style={Styles.listItem}/>
                    </List.Accordion>
                </View>
            )
        }
    })
}
export default TestingList