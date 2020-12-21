import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Mainpage from './Component/Mainpage';
import Bottomtab from './Component/Bottomtab';

export default class App extends Component {
  constructor(props) {
    super(props);
    global.widthsize = Dimensions.get('window').width;
    global.heightsize = Dimensions.get('window').height;
    global.backgroundcolor = '#161926';
    global.buttonbackground = '#252c47';
    global.highlightcolor = '#fc753f';
    global.textcolor = '#ffffff';
  }
  
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName='Mainpage'>
          <Stack.Screen name='Mainpage' component={Mainpage} />
          <Stack.Screen
            name='Bottomtab'
            component={Bottomtab}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

