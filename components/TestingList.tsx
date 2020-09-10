import { List, Avatar} from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Text, View } from 'react-native'
import {progressGraphicColor} from './ProgressGraphicColor'

const TestingList = ({TestingLocations}: any) => {
    return TestingLocations.map((item: any, idx: number) => {
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
                            percent={(item.wait/60)*100}
                            radius={34}
                            borderWidth={6}
                            color = {progressGraphicColor(item.wait, 60)}
                        >
                            <Text style={{ fontSize: 18 , fontWeight: "600"}}>{item.wait}'</Text>
                            <Text style={{ fontSize: 12 }}> wait</Text>

                        </ProgressCircle>}
                >
                    <List.Item title={"Approximate Line Length: " + item.lineLength + " people"} style={Styles.listItem}>
                    </List.Item>
                    <List.Item title={"Current Wait: " + item.wait + " minutes"} style={Styles.listItem}>
                    </List.Item>
                </List.Accordion>
            </View>
        )
    })
}
export default TestingList