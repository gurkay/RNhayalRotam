import React from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';

import PlaceItem from '../components/PlaceItem';

const PlaceList = (props) => {
    
    const renderPlaceItem = (itemData) => {
        return (
            <PlaceItem
                placesCityName={itemData.item.placesCityName}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                enteryPrice={itemData.item.enteryPrice}
                onSelectPlace={() => {
                    props.nav.navigate('PlaceDetail', {
                        placesCityId: itemData.item.placesCityId
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