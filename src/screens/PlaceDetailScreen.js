import React from 'react';
import {
    View,
    ScrollView,
    Image,
    Button,
    Text,
    StyleSheet
} from 'react-native';

import { PLACESCITY } from '../data/dummy-data';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    );
}

const PlaceDetailScreen = (props) => {

    const placesCityId = props.route.params.placesCityId;

    const selectedPlace = PLACESCITY.find(
        place => place.placesCityId = placesCityId
    );

    return (
        <ScrollView>
            <Image source={{ uri: selectedPlace.imageUrl }} style={styles.image} />

            <View>
                <Text style={styles.text}>Trip Time: {selectedPlace.duration}min</Text>
                <Text style={styles.text}>Travel Difficulty: {selectedPlace.complexity}</Text>
                <Text style={styles.text}>Price: {selectedPlace.enteryPrice}</Text>
                <Text style={styles.title}>What is There?</Text>
            </View>
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
        justifyContent: 'space-around'
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
    text:{
        margin:5,
    }
});
export default PlaceDetailScreen;