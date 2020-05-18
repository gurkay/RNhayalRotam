import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const GotoLocation = (props) => {

    console.log("goto loc : ", props);

    const openGps = () => {
        var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:'
        var url = scheme + props.plcLatitude + ',' + props.plcLongitude
        openExternalApp(url)
    }

    const openExternalApp = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert(
                    'ERROR',
                    'Unable to open: ' + url,
                    [
                        { text: 'OK' },
                    ]
                );
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.routeContainer}>
                <TouchableOpacity
                    style={styles.mapContainer}
                    onPress={() => {
                        props.navigation.navigate('Map', {
                            placesCityLatitude: props.plcLatitude,
                            placesCityLongitude: props.plcLongitude
                        });
                    }}
                >
                    <Ionicons name="ios-map" size={36} color="#4d8be3" />
                    <Text style={styles.text}>Map View</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.routeContainer}>
                <TouchableOpacity
                    style={styles.mapContainer}
                    onPress={openGps}
                >
                    <Ionicons name="ios-navigate" size={36} color="#4d8be3" />
                    <Text style={styles.text}>Route</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    routeContainer:{
        borderColor: '#4d8be3',

    },
    mapContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:5
    },
    text:{
        fontSize:16,
        marginLeft:2,
    }
});

export default GotoLocation;