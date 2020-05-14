import React from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';

import CitiesScreen from '../screens/CitiesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesCityScreen from '../screens/PlacesCityScreen';

import Colors from '../constants/Colors';

const CitiesStack = () => {
    const RootStack = createStackNavigator();
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Cities" component={Drawer} />
                <RootStack.Screen name="PlacesCity" component={PlacesCityScreen} />
                <RootStack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const Drawer = () => {
    const DrawerNav = createDrawerNavigator();
    return (
        <DrawerNav.Navigator initialRouteName="Tab">
            <DrawerNav.Screen name="SingIn" component={Tab} />
            <DrawerNav.Screen name="Registry" component={Tab} />
            <DrawerNav.Screen name="Favorites" component={FavoritesScreen} />
        </DrawerNav.Navigator>
    );
}



const Tab = () => {
    const TabNav = createBottomTabNavigator();
    return (
        <TabNav.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                
            }}
        >
            <TabNav.Screen name="Cities" component={CitiesScreen} />
            <TabNav.Screen name="Favorites" component={FavoritesScreen} />
        </TabNav.Navigator>
    );
}


const MainNavigator = (props) => {

    return (

        <CitiesStack />

    );
}

export default MainNavigator;