import { CITIES } from '../../data/dummy-data';
import { PLACESCITY } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/cities';

const initialState = {
    cities: CITIES,
    placesCity: PLACESCITY,
    favoritePlaces: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoritePlaces.findIndex(placeCityId => placeCityId.placesCityId === action.placesCityId);
            if(existingIndex >= 0) {
                const updatedFavCities = [...state.favoriteCities];
                updatedFavCities.splice(existingIndex, 1);
                return ({...state, favoritePlaces: updatedFavCities});
            } else {
                const placeCity = state.placesCity.find(placeCity => placeCity.id === action.placesCityId)
                return ({...state, favoritePlaces: state.favoritePlaces.concat(placeCity)});
            }            
        default:
            return state;
    }
}

export default citiesReducer;