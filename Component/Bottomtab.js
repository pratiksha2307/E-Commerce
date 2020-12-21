import React, { Component } from 'react';
import { Text, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Mainhomepagestack from './Mainhomepagestack';
import LoginView from './LoginView';
import Mappage from './Mappage';
import Login from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Bottomtab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backpress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backpress);
    }
    backpress = () => {
        BackHandler.exitApp();
        return true;
    }

    render() {
        const Tab = createBottomTabNavigator();

        return (
            <Tab.Navigator
                initialRouteName="Mainhomepagestack"
                tabBarOptions={{
                    activeTintColor: textcolor,
                    inactiveTintColor: highlightcolor,
                    activeBackgroundColor: highlightcolor,
                    inactiveBackgroundColor: buttonbackground,
                    style: { height: heightsize * 9 / 100, borderTopWidth: 0 },
                }}>

                <Tab.Screen
                    name="Mainhomepagestack"
                    component={Mainhomepagestack}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: textcolor, bottom: heightsize * 1 / 100, fontSize: widthsize * 2.5 / 100 }}>{focused == true ? 'Home' : null}</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => (
                            <MaterialCommunityIcons name="home" color={textcolor} size={focused == true ? widthsize * 10 / 100 : widthsize * 8/ 100} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="LoginView"
                    component={LoginView}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: textcolor, bottom: heightsize * 1 / 100, fontSize: widthsize * 2.5 / 100 }}>{focused == true ? 'Login' : null}</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => (
                            <Login name="login" color={textcolor} size={focused == true ? widthsize * 10 / 100 : widthsize * 8/ 100} />
                        ),
                    }}
                />
                 <Tab.Screen
                    name="Mappage"
                    component={Mappage}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: textcolor, bottom: heightsize * 1 / 100, fontSize: widthsize * 2.5 / 100 }}>{focused == true ? 'Location' : null}</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => (
                            <Login name="home-map-marker" color={textcolor} size={focused == true ? widthsize * 10 / 100 : widthsize * 8/ 100} />
                        ),
                    }}
                />

               
                  
            </Tab.Navigator>
        );
    }
}