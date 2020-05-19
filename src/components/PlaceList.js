import React from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';

import { useSelector } from 'react-redux';

import PlaceItem from '../components/PlaceItem';

const PlaceList = (props) => {
    const favoritePlaces = useSelector(state => state.cities.favoritePlaces);
    const renderPlaceItem = (itemData) => {
        const isFavorite = favoritePlaces.some(place => place.placesCityId === itemData.item.placesCityId);
        return (
            <PlaceItem
                placesCityName={itemData.item.placesCityName}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                enteryPrice={itemData.item.enteryPrice}
                onSelectPlace={() => {
                    props.navigation.navigate('PlaceDetail', {
                        placesCityId: itemData.item.placesCityId,
                        placesCityName: itemData.item.placesCityName,
                        isFav: isFavorite
                    });
                }}

            />
        );
    }
    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.placesCityId}
                renderItem={renderPlaceItem}
                style={{ width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
});

export default PlaceList;