import React from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';

import CitiesScreen from '../screens/CitiesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesCityScreen from '../screens/PlacesCityScreen';


const TabNav = createBottomTabNavigator();

const BottomTabs = (props) => {
    return (
        <TabNav.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    console.log("TabNav : ", {route})
                    let iconName;
                    if (route.name === 'Cities') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home';
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <TabNav.Screen
                name="Cities"
                component={CitiesScreen}
                options={{
                    //tabBarIcon: 'home-account',
                    color: 'red'
                }}

            />
            <TabNav.Screen 
                name="Favorites" 
                component={FavoritesScreen} 
                options={({ route }) => {
                    console.log('!@# options', { route });
                    const routeName = route.state
                        ? route.state.routes[route.state.index].name
                        : 'Favorites';
                    return {
                        headerTitle: routeName,
                    };
                }}
                />
        </TabNav.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d888f8',
        margin: 5,
        borderRadius: 6
    },
    drawerText: {
        fontSize: 18,
        margin: 5,
    }
});

export default BottomTabs;