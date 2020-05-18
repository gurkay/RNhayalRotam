import React, { useEffect, useCallback } from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/cities';
import GotoLocation from '../components/GoToLocation';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    );
}

const PlaceDetailScreen = (props) => {

    console.log("detaile screen : ", props);
    const placesCityId = props.route.params.placesCityId;
    const availablePlacesCity = useSelector(state => state.cities.placesCity);


    const currentPlaceIsFavorite = useSelector(state =>
        state.cities.favoritePlaces.some(place => place.placesCityId === placesCityId)
    );

    const selectedPlace = availablePlacesCity.find(
        place => place.placesCityId === placesCityId
    );

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(placesCityId));
    }, [dispatch, placesCityId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFav: currentPlaceIsFavorite });
    }, [currentPlaceIsFavorite]);

    const tgglFav = props.route.params.toggleFav;

    props.navigation.setOptions({
        headerTitle: props.route.params.placesCityName,
        headerRight: () => (
            <TouchableOpacity
                style={styles.container}
                onPress={()=>{console.log("favorite")}}
            >
                <View style={styles.headerButtonContainer}>
                    <Ionicons name="ios-star-outline" size={24} color="#4d8be3" />
                </View>
            </TouchableOpacity>
        )
    });

    return (
        <ScrollView>
            <Image source={{ uri: selectedPlace.imageUrl }} style={styles.image} />

            <View style={styles.details}>
                <View>
                    <Text style={styles.text}>Trip Time: {selectedPlace.duration}min</Text>
                    <Text style={styles.text}>Travel Difficulty: {selectedPlace.complexity}</Text>
                    <Text style={styles.text}>Price: {selectedPlace.enteryPrice}</Text>
                </View>
                <View>
                    <GotoLocation
                        plcLatitude={selectedPlace.placesCityLatitude}
                        plcLongitude={selectedPlace.placesCityLongitude}
                        navigation={props.navigation}
                    />
                </View>
            </View>


            <Text style={styles.title}>What is There?</Text>

            {
                selectedPlace.ingredients.map(ingredient => (
                    <ListItem
                        key={ingredient}
                    >
                        {ingredient}
                    </ListItem>
                ))
            }
            <Text style={styles.title}>How to Go?</Text>
            {
                selectedPlace.steps.map(step => (
                    <ListItem
                        key={step}
                    >
                        {step}
                    </ListItem>
                ))
            }
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
    text: {
        margin: 5,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    headerButtonContainer: {
        marginRight: 5,
    }
});
export default PlaceDetailScreen;