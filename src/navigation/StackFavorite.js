import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';


import FavoritesScreen from '../screens/FavoritesScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesCityScreen from '../screens/PlacesCityScreen';
import MapScreen from '../screens/MapScreen';
import MyLocationScreen from '../screens/MyLocationScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomTabs from './BottomTabs';
import CitiesScreen from '../screens/CitiesScreen';

const StackNav = createStackNavigator();

const StackFavorite = (props) => {
    return (
        <StackNav.Navigator>
            <StackNav.Screen
                name="Cities"
                component={CitiesScreen}
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'City';
                    return {
                        headerTitle: routeName,
                    };
                }}
            />
            <StackNav.Screen
                name="PlacesCity"
                component={PlacesCityScreen}
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Places City';
                    return {
                        headerTitle: routeName,
                    };
                }}
            />
            <StackNav.Screen
                name="PlaceDetail"
                component={BottomTabs}
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Details of City';
                    return {
                        headerTitle: routeName,
                    };
                }}
            />
            <StackNav.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{ headerTitle: 'Favorites Screen' }}
            />
            <StackNav.Screen
                name="Map"
                component={MapScreen}
                options={{ headerTitle: 'Google Map' }}
            />
            <StackNav.Screen
                name="MyLocation"
                component={MyLocationScreen}
                options={{ headerTitle: 'Google Map' }}
            />
        </StackNav.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },

});

export default StackFavorite;