import PlacesCity from '../../models/PlacesCity';
import PlacesCityFake from '../../models/PlacesCityFake';

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
                    new PlacesCityFake(
                        key,
                        resData[key].cityId,
                        resData[key].placesCityName,
                        resData[key].affordability,
                        resData[key].complexity,
                        resData[key].imageUrl,
                        resData[key].duration,
                        resData[key].ownerId,
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
    duration
) => {
    console.log("action cityId: ", cityId);
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
                    ownerId: 'u1'
                })
            }
        );

        const resData = await response.json();

        dispatch({
            type: CREATE_PLACESCITY,
            placesCityData: {
                placesCityId: resData.name,
                cityId,
                placesCityName,
                affordability,
                complexity,
                imageUrl,
                duration,
                ownerId: 'u1'
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