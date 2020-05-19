import { PLACESCITY } from '../../data/dummy-data';
import {
    TOGGLE_FAVORITE,
    DELETE_PLACESCITY,
    CREATE_PLACESCITY,
    UPDATE_PLACESCITY,
    SET_PLACESCITY
} from '../actions/placesCity';

import PlacesCity from '../../models/PlacesCity';

const initialState = {
    availablePlacesCity: PLACESCITY,
    userPlacesCity: PLACESCITY.filter(place => place.ownerId === 'u5'),
    placesCity: PLACESCITY,
    favoritePlaces: []
}

const placesCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoritePlaces.findIndex(placeCityId => placeCityId.placesCityId === action.placesCityId);
            if (existingIndex >= 0) {
                const updatedFavPlaces = [...state.favoritePlaces];
                updatedFavPlaces.splice(existingIndex, 1);
                return ({ ...state, favoritePlaces: updatedFavPlaces });
            } else {
                const placesCity = state.placesCity.find(placesCity => placesCity.placesCityId === action.placesCityId)
                return ({ ...state, favoritePlaces: state.favoritePlaces.concat(placesCity) });
            }
        case SET_PLACESCITY:
            return (
                {
                    availablePlacesCity: action.placesCity,
                    userPlacesCity: action.placesCity.filter(place => place.ownerId === 'u5')
                }
            );
        case CREATE_PLACESCITY:
            const newPlacesCity = new PlacesCity(
                action.placesCityData.placesCityId,
                action.placesCityData.cityId,
                action.placesCityData.placesCityName,
                action.placesCityData.affordability,
                action.placesCityData.complexity,
                action.placesCityData.imageUrl,
                action.placesCityData.duration,
                'u5'
            );
            return (
                {
                    ...state,
                    availablePlacesCity: state.availablePlacesCity.concat(newPlacesCity),
                    userPlacesCity: state.userPlacesCity.concat(newPlacesCity)
                }
            );
        case UPDATE_PLACESCITY:
            const placesCityIndex = state.userPlacesCity.findIndex(
                place => place.placesCityId === action.placeCityId
            );
            const updatedPlacesCity = new placesCity(
                action.placesCityId,
                action.placesCityData.cityId,
                action.placesCityData.placesCityName,
                action.placesCityData.affordability,
                action.placesCityData.complexity,
                action.placesCityData.imageUrl,
                state.userPlacesCity[placesCityIndex].duration,
                state.userPlacesCity[placesCityIndex].ownerId
            );
            const updatedUserPlacesCity = [...state.userPlacesCity];
            updatedUserPlacesCity[placesCityIndex] = updatedPlacesCity;
            const availablePlacesCityIndex = state.availablePlacesCity.findIndex(
                place => place.placesCityId === action.placesCityId
            );
            const updatedAvailablePlacesCity = [...state.availablePlacesCity];
            updatedAvailablePlacesCity[availablePlacesCityIndex] = updatedPlacesCity;
            return {
                ...state,
                availablePlacesCity: updatedAvailablePlacesCity,
                userPlacesCity: updatedUserPlacesCity
            };
        case DELETE_PLACESCITY:
            return (
                {
                    ...state,
                    userPlacesCity: state.userPlacesCity.filter(
                        place => place.placesCityId !== action.placeCityId
                    ),
                    availablePlacesCity: state.availablePlacesCity.filter(
                        place => place.placesCityId !== action.placeCityId
                    )
                }
            );
    }
    return state;
}

export default placesCityReducer;