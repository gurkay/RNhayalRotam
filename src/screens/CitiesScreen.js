import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';

import { CITIES } from '../data/dummy-data';
import CityGridTile from '../components/CityGridTile';

const CitiesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <CityGridTile
                cityName={itemData.item.cityName}
                imageUrl={itemData.item.imageUrl}
                cityLatitude={itemData.item.cityLatitude}
                cityLongitude={itemData.item.cityLongitude}
                onSelect={() => {
                    props.navigation.navigate('PlacesCity', {
                        cityId: itemData.item.cityId,
                        cityName: itemData.item.cityName
                    });
                }}
            />
        );
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.cityId}
            data={CITIES}
            numColumns={2}
            renderItem={renderGridItem}
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CitiesScreen;