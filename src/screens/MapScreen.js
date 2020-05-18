import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';



const MapScreen = (props) => {

    console.log("Maps Screen : ", props);
    const pCityLatitude = parseFloat(props.route.params.placesCityLatitude);
    const pCityLongitude = parseFloat(props.route.params.placesCityLongitude);

    const region = {
        latitude: pCityLatitude,
        longitude: pCityLongitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    console.log(region);
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={region}
            >
                <Marker
                    coordinate={region}
                />
                
            </MapView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;