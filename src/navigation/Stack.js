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
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

import MapScreen from '../screens/MapScreen';
import EditPlacesCityScreen from '../screens/EditPlacesCityScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomTabs from './BottomTabs';

const StackNav = createStackNavigator();

const Stack = (props) => {
    return (
        <StackNav.Navigator
            initialRouteName="Cities"
            headerMode="screen"
        >
            <StackNav.Screen
                name="Cities"
                component={BottomTabs}
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'City';
                    return {
                        headerTitle: routeName,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={styles.container}
                                onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
                            >
                                <View>
                                    <Ionicons name="ios-list" size={36} color="#4d8be3" />
                                </View>
                            </TouchableOpacity>
                        )
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
                component={PlaceDetailScreen}
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
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Favorites';
                    return {
                        headerTitle: routeName,
                    };
                }}
            />
            <StackNav.Screen
                name="Map"
                component={MapScreen}
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Map Screen';
                    return {
                        headerTitle: routeName,
                    };
                }}
            />
            <StackNav.Screen
                name="EditPlacesCity"
                component={EditPlacesCityScreen}
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Edit Places City';
                    return {
                        headerTitle: routeName,
                    };
                }}
            />
            <StackNav.Screen
                name="SignIn"
                component={SignIn}
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Sign In';
                    return {
                        headerTitle: routeName,
                    };
                }}
            />
            <StackNav.Screen
                name="SignUp"
                component={SignUp}
                options={({ route }) => {
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Sıgn Up';
                    return {
                        headerTitle: routeName,
                    };
                }}
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

export default Stack;