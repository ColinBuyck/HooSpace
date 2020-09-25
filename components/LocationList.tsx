import { List } from "react-native-paper"
import { Styles } from "./Styles"
import ProgressCircle from "react-native-progress-circle"
import React from 'react'
import { Image, Text, View } from 'react-native'
import { progressGraphicColor } from './ProgressGraphicColor'
import { PullLocations } from "../data/PullLocations"
import { Location } from "../interfaces/Location"

const listLocations = () => {
    const [data, setData] = React.useState<Array<Location>>();
    React.useEffect(() => {
        PullLocations().then((locations: Location[]) => {
            setData(locations);
            //console.log(locations);    
        });
    }, [])

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
                            <List.Item title={"Current Capacity: " + item.occupancy.value + "/" + item.maximumAttendeeCapacity} style={Styles.listItem}>
                            </List.Item> :
                            <List.Item title={"Current Capacity: Closed"} style={Styles.listItem}>
                            </List.Item>}

                        </List.Accordion>
                    </View>
                )
            }
        })
    }
}

export default function LocationList() {
    return (
        <List.AccordionGroup>
            {listLocations()}
        </List.AccordionGroup>
    )
}

