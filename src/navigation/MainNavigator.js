import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerContent from '../navigation/DrawerContent';
import Stack from '../navigation/Stack';

const DrawerNav = createDrawerNavigator();

const Drawer = (props) => {
    
    return (
        <DrawerNav.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >
            <DrawerNav.Screen
                name="Home" component={Stack}
            />
        </DrawerNav.Navigator>
    );
}

const MainNavigator = (props) => {

    return (
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
    );
}

export default MainNavigator;