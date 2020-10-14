import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Header} from 'react-native-elements';
import Facebook from './Facebook';
import Instagram from './Instagram';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Facebook" component={Facebook} />
      <Tab.Screen name="Instagram" component={Instagram} />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {
  render(){
  return (

    <NavigationContainer>
    <Header
    centerComponent = {{text:'BuZZZly',style:{color:'#ffffff',fontSize:20,fontWeight:'bold'}}}/>
      <MyTabs />
    </NavigationContainer>

  );
  }
}
