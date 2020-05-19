import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../navigation/DrawerContent';
import Stack from '../navigation/Stack';
import HomeScreen from '../screens/CitiesScreen';
const DrawerNav = createDrawerNavigator();

const Menus = (props) => {

    return (
        <DrawerNav.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >
            <DrawerNav.Screen
                name="Home" component={Stack}
            />
            <DrawerNav.Screen
                name="HomeScreen" component={HomeScreen}
            />
        </DrawerNav.Navigator>
    );
}

const MainNavigator = (props) => {

    return (
        <NavigationContainer>
            <Menus />
        </NavigationContainer>
    );
}

export default MainNavigator;