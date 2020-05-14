import React from 'react';

import { PLACESCITY } from '../data/dummy-data';

import PlaceList from '../components/PlaceList';

const PlacesCityScreen = (props) => {

    const cId = props.route.params.cityId;

    const displayedPlaces = PLACESCITY.filter(
        place => place.cityId.indexOf(cId) >= 0

    );

    return (
        <PlaceList
            listData={displayedPlaces}
            nav={props.navigation}
        />
    );
}

export default PlacesCityScreen;