import { List, Avatar } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Text, View } from 'react-native'
import { progressGraphicColor } from './ProgressGraphicColor'

const TestingList = ({ locations }: any) => {
    return locations.map((item: any, idx: number) => {
        if (item['@type'] == "CovidTestSite") {
            return (
                <View style={Styles.accordionContainer} key={idx}>
                    <List.Accordion title={item.name}
                        titleStyle={Styles.listAccordionTitle}
                        key={idx}
                        id={idx}
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
                        <List.Item title={"Curent line length: " + item.occupancy.value + " people"} style={Styles.listItem}>
                        </List.Item>
                        <List.Item title={"Hours: " + item.openingHours} style={Styles.listItem}>
                        </List.Item>
                    </List.Accordion>
                </View>
            )
        }
    })
}
export default TestingList