import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

const PlaceItem = (props) => {

    return (
        <View style={styles.placeItem}>
            <TouchableOpacity onPress={props.onSelectPlace}>
                <View>
                    <View style={{ ...styles.placeRow, ...styles.placeHeader }}>
                        <ImageBackground source={{ uri: props.imageUrl }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>
                                    {props.placesCityName}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.placeRow, ...styles.placeDetail }}>
                        <Text>Time:{props.duration}min</Text>
                        <Text>Affort:{props.complexity}</Text>
                        <Text>Price:{props.enteryPrice}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    placeItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    placeRow: {
        flexDirection: 'row'
    },
    placeHeader: {
        height: '85%'
    },
    placeDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export default PlaceItem;