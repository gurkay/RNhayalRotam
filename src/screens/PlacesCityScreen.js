import React from 'react';
import { useSelector } from 'react-redux';

import PlaceList from '../components/PlaceList';

const PlacesCityScreen = (props) => {

    const cId = props.route.params.cityId;
    props.navigation.setOptions({headerTitle: props.route.params.cityName});

    const availablePlacesCity = useSelector(state => state.cities.placesCity);

    const displayedPlaces = availablePlacesCity.filter(
        place => place.cityId.indexOf(cId) >= 0

    );

    return (
        <PlaceList
            listData={displayedPlaces}
            navigation={props.navigation}
        />
    );
}

export default PlacesCityScreen;