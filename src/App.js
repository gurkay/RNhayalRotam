import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

import MainNavigator from './navigation/MainNavigator';
import citiesReducer from './store/reducers/cities';

enableScreens();

const rootReducer = combineReducers({
    cities: citiesReducer
});

const store = createStore(rootReducer);

const App = (props) => {

    return (
        <Provider
            store={store}
        >
            <MainNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({

});

export default App;