import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerContent = (props) => {
    console.log("#DrawerContent : ", props);
    return (
        <DrawerContentScrollView>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('Cities')}
            >
                <View style={styles.drawerContainer}>
                    <Ionicons name="md-home" size={24} color="#4d8be3" />
                    <Text style={styles.drawerText}>Cities</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Favorites')}
            >
                <View style={styles.drawerContainer}>
                    <Ionicons name="md-star" size={24} color="#4d8be3" />
                    <Text style={styles.drawerText}>Favorites</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('EditPlacesCity')}
            >
                <View style={styles.drawerContainer}>
                    <Ionicons name="md-add" size={24} color="#4d8be3" />
                    <Text style={styles.drawerText}>Add Place</Text>
                </View>
            </TouchableOpacity>

        </DrawerContentScrollView >
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dfe8f8',
        margin: 5,
        borderRadius: 6
    },
    drawerText: {
        fontSize: 18,
        margin: 5,
    }
});

export default DrawerContent;