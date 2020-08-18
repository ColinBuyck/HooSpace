import { BuildingLocations } from "../data/BuildingLocations"
import { List } from "react-native-paper"
import { Styles } from "./Styles"


const listLocations = () => {
    return BuildingLocations.map((item, idx) => {
        return (
            <List.Accordion title={item.name}
                key={item.id}
                id={item.id}
                style={Styles.listAccordion}
                theme={{ colors: { primary: 'black', backdrop: 'white' }, animation: { scale: 0 } }}
            >
                <List.Item title={"Current Capacity: " + item.occupancy + "/" + item.capacity} style={Styles.listItem}>
                </List.Item>
            </List.Accordion>
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

