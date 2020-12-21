import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Animated, Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const latitudeDelta = 0.01;
const longitudeDelta = latitudeDelta * (width / height);


export default class Mappage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta,
            },
        };
    }

    componentDidMount() {
        this.locatecurrentposition();
    }

    locatecurrentposition = () => {
        Geolocation.getCurrentPosition(
            position => {
                let initialposition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: latitudeDelta,
                    longitudeDelta: longitudeDelta,
                }
                this.setState({ initialposition });
            }
        )
    }

    Changeregion = (position) => {
        this.setState({
            position: {
                latitude: position.latitude,
                longitude: position.longitude,
                latitudeDelta: position.latitudeDelta,
                longitudeDelta: position.latitudeDelta * (width / height),
            }
        });
    }

    render() {
        return (
            <View>
                 <View style={{ alignItems: 'center', justifyContent: 'center', color: 'pink' }}>
            <Text style={{
              fontSize: widthsize * 10 / 100, fontWeight: 'bold', textShadowColor: '#2a98f2',
              textShadowOffset: { width: 1, height: 2 },
              textShadowRadius: 5, color: 'blue'
            }}>
              E-Commerce
                    </Text>
            <Text style={{
              fontSize: widthsize * 3 / 100, fontWeight: 'bold', color: '#2a98f2'
            }}> Welcome to Our Store !</Text>

          </View>
            <MapView
                showsUserLocation
                provider={PROVIDER_GOOGLE}
                style={{ height: '100%' }}
                initialRegion={this.state.initialposition}
                onRegionChangeComplete={(position) => this.Changeregion(position)}>
            </MapView>
            </View>
        )
    }
}