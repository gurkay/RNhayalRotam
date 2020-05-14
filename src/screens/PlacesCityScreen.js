import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const PlacesCityScreen = (props) => {
    return (
        <View>
            <Text>
                Places City Screen
            </Text>
            <Button title='PlaceDetailScreen' onPress={()=>{
                props.navigation.navigate('PlaceDetail');
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default PlacesCityScreen;