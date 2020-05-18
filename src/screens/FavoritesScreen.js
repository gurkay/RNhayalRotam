import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import PlaceList from '../components/PlaceList';
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {

    const favPlaces = useSelector(state => state.cities.favoritePlaces);

    return (
        <PlaceList
            listData={favPlaces}
            navigation={props.navigation}
        />
    );
}

const styles = StyleSheet.create({

});

export default FavoritesScreen;