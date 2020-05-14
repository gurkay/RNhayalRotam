import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { useScreens, enableScreens } from 'react-native-screens'

import MainNavigator from './navigation/MainNavigator';

enableScreens();

const App = (props) => {

    return (

        <MainNavigator />
    );
}

const styles = StyleSheet.create({

});

export default App;