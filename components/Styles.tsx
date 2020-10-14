import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#202741',
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  iconText: {
    fontSize: 30,
    color: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '7%',
    width: '100%'
  },
  // Really confused why the images seem to go out of the 
  // container with ie. alignSelf: 'flex-start'
  sabreLogo: {
    resizeMode: "contain",
    width: '10%'
  },
  seperator: {
    height: '1%'
  },
  notchSeperator: {
    height: '5%'
  },
  mapContainer: {
    height: '34%',
    width: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  list: {
    height: '47%',
    width: '95%',
  },
  listAccordionTitle: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: "400"
  },
  listAccordion: {
    backgroundColor: 'white',
    backfaceVisibility: 'hidden',
    borderRadius: 10,
  },
  listItem: {
    backgroundColor: 'white',
    zIndex: -1,
    marginTop: -10,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginBottom: 1,
  },
  accordionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 4
  },
  insidemap: {
    borderRadius: 20,
    overflow: 'hidden',
    height: '100%',
    width: '100%'
  },
  listSwitch: {
    height: '6%',
    width: '95%',
  },
  minWait: {
    backgroundColor: "#d4d4d4",
    borderColor: "black"
  },
  closed: {
    resizeMode: "contain",
    height: "100%",
    
  }
});
