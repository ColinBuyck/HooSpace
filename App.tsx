import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import LocationList from './components/LocationList';
import { Styles } from './components/Styles';
import SwitchSelector from 'react-native-switch-selector';
import { PullLocations } from './data/PullLocations'
import TestingList from './components/TestingList';
import Map from './components/Map';

let InitialData;
class App extends Component<{}, {isStudySpot: number, data: any, switchValue: number, currIndex: number}> {
  constructor(props) {
    super(props);
  this.state = {
    isStudySpot : 0,
    data : InitialData,
    switchValue : 0,
    currIndex : -1
  }
}
setView = (value : any) => {
  this.setState({isStudySpot: value});
}
setSwitch = (value : any) => {
  this.setState({switchValue: value})
}
isExpanded = (idx : number, cI: number) => {
  if(idx == cI){
    return true;
  }
  else{
    return false;
  }
}

updateExpanded = (idx : any) => {
    if(idx != this.state.currIndex){
      this.setState({currIndex : idx});
    }else{
      this.setState({currIndex : -1});
    }
  } 

// listExpander = (value: any) => {
//   if(this.state.listExpanded[value] == null){
//     this.setState( state => {
//       const listExpanded = state.listExpanded.push(value)
//     }
//     )
//   }
// }
// listUpdate = (i : any) => {
//   this.setState(state => {
//     const listExpanded = state.listExpanded.map((item, j) =>{
//       if(j===i){
//         return !item;
//       }
//       else{
//         return false;
//       }
//     });
//     return{listExpanded
//     }
//   })
// }
// getData = () => {
//     //const [data, setData] = React.useState<Array<any>>();
//       PullLocations().then((locations: any[]) => {
//           this.setState({data : locations}); 
//       })}

render(){
  PullLocations().then((locations : any[]) => {
     this.setState({data : locations});
  })

  const interval = setInterval(() => {PullLocations().then((locations: any[]) => {
     this.setState({data : locations}); 
   });}, 120000);

  clearInterval(interval);
  return (
    <View style={Styles.container}>
      <View style={Styles.notchSeperator}>
      </View>
      <View style={Styles.header}>
        <Image style={Styles.sabreLogo} source={require('./assets/uvaLogo.png')} ></Image>
        <Text style={Styles.iconText}>
          HooSpace
        </Text>
        <Image style={Styles.sabreLogo} source={require('./assets/uvaLogo.png')} ></Image>
      </View>
      <View style={Styles.mapContainer}>
        <Map updateExpanded = {this.updateExpanded} setView = {this.setView} locations={this.state.data}/>
      </View>
      <View style={Styles.seperator}>
      </View>
      <View style={Styles.seperator}>
      </View>
      <View style={Styles.listSwitch}>
        <SwitchSelector options={[
          { label: 'Student Spots', value: 0 },
          { label: 'Testing Centers', value: 1 }]} 
          selectedColor={'white'} 
          buttonColor={'#F84C1E'} 
          borderColor={'#F84C1E'} 
          initial= {0}
          value = {this.state.isStudySpot}
          onPress={value => {
            this.setView(value)}
          } 
          />
      </View>
      <ScrollView style={Styles.list}>
        {this.state.isStudySpot === 0 ? 
        <LocationList currIndex = {this.state.currIndex} updateExpanded = {this.updateExpanded} isExpanded = {this.isExpanded} locations={this.state.data}/> : 
        <TestingList currIndex = {this.state.currIndex} updateExpanded = {this.updateExpanded} isExpanded = {this.isExpanded} locations={this.state.data} />}
      </ScrollView>
      <View style={Styles.seperator}>
      </View>
      <StatusBar style="light" />
    </View>
  );
  }
}
        
export default App;
