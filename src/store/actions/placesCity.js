import PlacesCity from '../../models/PlacesCity';

export const DELETE_PLACESCITY = 'DELETE_PLACESCITY';
export const CREATE_PLACESCITY = 'CREATE_PLACESCITY';
export const UPDATE_PLACESCITY = 'UPDATE_PLACESCITY';
export const SET_PLACESCITY = 'SET_PLACESCITY';

export const fetchPlacesCity = () => {
    return async dispatch => {
        // any asyn code you want
        try {
            const response = await fetch(
                'https://rn-test-database.firebaseio.com/placesCity.json'
            );
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            const loadedPlacesCity = [];

            for (const key in resData) {
                loadedPlacesCity.push(
                    new PlacesCity(
                        key,
                        'c1',
                        resData[key].placesCityName,
                        resData[key].affordability,
                        resData[key].complexity,
                        resData[key].imageUrl,
                        resData[key].duration,
                        resData[key].ingredients,
                        resData[key].steps,
                        resData[key].visiteTime,
                        resData[key].enteryPrice,
                        resData[key].webSite,
                        resData[key].address,
                        resData[key].phone,
                        resData[key].mail,
                        resData[key].placesCityLatitude,
                        resData[key].placesCityLongitude
                    )
                );
            }
            dispatch({ type: SET_PLACESCITY, placesCity: loadedPlacesCity });
        } catch (err) {
            // send to custom analytics server
            throw err;
        }
    }
}

export const deletePlacesCity = (placesCityId) => {
    return async dispatch => {
        const response = await fetch(
            `https://rn-test-database.firebaseio.com/placesCity/${placesCityId}.json`,
            {
                method: 'DELETE'
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        dispatch({ type: DELETE_PLACESCITY, placesCityId: placesCityId });
    }
}

export const createPlacesCity = (
    cityId,
    placesCityName,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    visiteTime,
    enteryPrice,
    webSite,
    address,
    phone,
    mail,
    placesCityLatitude,
    placesCityLongitude,
    ownerId
) => {
    return async dispatch => {
        // any async code you want
        const response = await fetch(
            'https://rn-test-database.firebaseio.com/placesCity.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cityId,
                    placesCityName,
                    affordability,
                    complexity,
                    imageUrl,
                    duration,
                    ingredients,
                    steps,
                    visiteTime,
                    enteryPrice,
                    webSite,
                    address,
                    phone,
                    mail,
                    placesCityLatitude,
                    placesCityLongitude,
                    ownerId
                })
            }
        );

        const resData = await response.json();

        dispatch({
            type: CREATE_PLACESCITY,
            placeData: {
                placesCityId: resData.name,
                cityId,
                placesCityName,
                affordability,
                complexity,
                imageUrl,
                duration,
                ingredients,
                steps,
                visiteTime,
                enteryPrice,
                webSite,
                address,
                phone,
                mail,
                placesCityLatitude,
                placesCityLongitude,
                ownerId
            }
        });
    }
}

export const updatePlacesCity = (
    placesCityId,
    cityId,
    placesCityName,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    visiteTime,
    enteryPrice,
    webSite,
    address,
    phone,
    mail,
    placesCityLatitude,
    placesCityLongitude,
    ownerId
) => {
    return async dispatch => {
        const response = await fetch(
            `https://rn-test-database.firebaseio.com/placesCity/${placesCityId}.json`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cityId,
                    placesCityName,
                    affordability,
                    complexity,
                    imageUrl,
                    duration,
                    ingredients,
                    steps,
                    visiteTime,
                    enteryPrice,
                    webSite,
                    address,
                    phone,
                    mail,
                    placesCityLatitude,
                    placesCityLongitude,
                    ownerId
                })
            }
        );

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        dispatch({
            type: UPDATE_PLACESCITY,
            placesCityId: placesCityId,
            placeData: {
                cityId,
                placesCityName,
                affordability,
                complexity,
                imageUrl,
                duration,
                ingredients,
                steps,
                visiteTime,
                enteryPrice,
                webSite,
                address,
                phone,
                mail,
                placesCityLatitude,
                placesCityLongitude,
                ownerId
            }
        });
    }
}

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const toggleFavorite = (id) => {
    return (
        {
            type: TOGGLE_FAVORITE,
            placesCityId: id
        }
    );
}