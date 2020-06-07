import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MainNavigator from './navigation/MainNavigator';
import citiesReducer from './store/reducers/cities';
import authReducer from './store/reducers/auth';
import placesCityReducer from './store/reducers/placesCity';

enableScreens();

const rootReducer = combineReducers({
    placesCity: placesCityReducer,
    cities: citiesReducer,
    auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = (props) => {

    return (
        <Provider
            store={store}
        >
            <MainNavigator />
        </Provider>
    );
}

export default App;