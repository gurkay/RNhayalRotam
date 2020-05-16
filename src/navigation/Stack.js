import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import CitiesScreen from '../screens/CitiesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesCityScreen from '../screens/PlacesCityScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomTabs from '../navigation/BottomTabs';

const StackNav = createStackNavigator();

const Stack = (props) => {
    //console.log('Stack :', { props });
    return (
        <StackNav.Navigator
            initialRouteName="Cities"
            headerMode="screen"
        >
            <StackNav.Screen
                name="Cities"
                component={BottomTabs}
                options={({ route }) => {
                    console.log('StackNav :', { route });
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
                                    <Ionicons name="ios-list" size={36} color="#900" />
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
                    console.log('!@# options', { route });
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
                    console.log('!@# options', { route });
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Details of City';
                    return {
                        headerTitle: routeName,
                        headerRight: () => (
                            <TouchableOpacity
                                style={styles.container}
                                onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
                            >
                                <View>
                                    <Ionicons name="ios-star-outline" size={28} color="#4d8be3" />
                                </View>
                            </TouchableOpacity>
                        )
                    };
                }}
            />
            <StackNav.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{ headerTitle: 'Pace Details' }}
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