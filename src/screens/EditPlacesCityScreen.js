import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import * as placesCityActions from '../store/actions/placesCity';
import Input from '../components/UI/Input';
import CityItem from '../components/CityItem';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        }
    }
    return state;
}

const EditPlacesCityScreen = (props) => {
    console.log("#EditPlaces : ", props);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const placesCityId = props.navigation.placesCityId;
    const editedPlacesCity = useSelector(state =>
        state.placesCity.userPlacesCity.find(place => place.placesCityId === placesCityId)
    );

    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValue: {
            cityId: editedPlacesCity ? editedPlacesCity.placesCityName : '',
            placesCityName: editedPlacesCity ? editedPlacesCity.placesCityName : '',
            affordability: editedPlacesCity ? editedPlacesCity.affordability : '',
            complexity: editedPlacesCity ? editedPlacesCity.complexity : '',
            imageUrl: editedPlacesCity ? editedPlacesCity.imageUrl : '',
            duration: '',
        },
        inputValidities: {
            cityId: editedPlacesCity ? true : false,
            placesCityName: editedPlacesCity ? true : false,
            affordability: editedPlacesCity ? true : false,
            complexity: editedPlacesCity ? true : false,
            imageUrl: editedPlacesCity ? true : false,
            duration: editedPlacesCity ? true : false,
        },
        formIsValid: editedPlacesCity ? true : false,
    });

    useEffect(() => {
        if (error) {
            Alert.alert('An error occurred', error, [{ text: 'Okay' }]);
        }
    }, [error]);

    const submitHandler = useCallback(async () => {
        if (!formState.formIsValid) {
            Alert.alert('Wrong input!', 'Please Check the errors in the form.', [
                {
                    test: 'Ok'
                }
            ]);
            return;
        }
        setError(null);
        setIsLoading(true);
        console.log("#editPlacesScreen => editPlacesCity : ", editedPlacesCity);
        try {
            if (editedPlacesCity) {
                await dispatch(
                    placesCityActions.updatePlacesCity(
                        placesCityId,
                        formState.inputValues.cityId,
                        formState.inputValues.placesCityName,
                        formState.inputValues.affordability,
                        formState.inputValues.complexity,
                        formState.inputValues.imageUrl,
                        formState.inputValues.duration,
                    )
                );
            } else {
                await dispatch(
                    placesCityActions.createPlacesCity(
                        formState.inputValues.cityId,
                        formState.inputValues.placesCityName,
                        formState.inputValues.affordability,
                        formState.inputValues.complexity,
                        formState.inputValues.imageUrl,
                        +formState.inputValues.duration,
                    )
                );
            }
            props.navigation.goBack();
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, [dispatch, placesCityId, formState]);

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler });
    }, [submitHandler]);

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );

    if (isLoading) {
        return (
            <View style={StyleSheet.centered}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }

    props.navigation.setOptions({
        headerTitle: 'p5'// props.route.params.placesCityId
            ? 'Edit Places'
            : 'Add Places',
        headerRight: () => (
            <TouchableOpacity
                style={styles.container}
                onPress={submitHandler}
            >
                <View style={styles.headerButtonContainer}>
                    <Ionicons
                        name="ios-checkmark"
                        size={24}
                        color="#4d8be3" />
                </View>
            </TouchableOpacity>
        )
    });

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={100}
        >
            <ScrollView>
                <View style={styles.form}>
                    {/* <CityItem
                        id="cityId"
                        label="City Id"
                        onValueChange={inputChangeHandler}
                        initialValue={editedPlacesCity ? editedPlacesCity.cityId : ''}
                        initiallyValid={!!editedPlacesCity}
                    /> */}
                    <Input
                        id="cityId"
                        label="City Id"
                        errorText="Please enter a valid City Id!"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue={editedPlacesCity ? editedPlacesCity.cityId : ''}
                        initiallyValid={!!editedPlacesCity}
                        required
                    />
                    <Input
                        id="placesCityName"
                        label="Places City Name"
                        errorText="Please enter a valid places city name!"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue={editedPlacesCity ? editedPlacesCity.placesCityName : ''}
                        initiallyValid={!!editedPlacesCity}
                        required
                    />
                    <Input
                        id="affordability"
                        label="Affordability"
                        errorText="Please enter a valid affordability!"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue={editedPlacesCity ? editedPlacesCity.affordability : ''}
                        initiallyValid={!!editedPlacesCity}
                        required
                    />
                    <Input
                        id="complexity"
                        label="Complexity"
                        errorText="Please enter a valid complexity!"
                        keyboardType="default"
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue={editedPlacesCity ? editedPlacesCity.complexity : ''}
                        initiallyValid={!!editedPlacesCity}
                        required
                    />
                    <Input
                        id="imageUrl"
                        label="Image Url"
                        errorText="Please enter a valid image url!"
                        keyboardType="default"
                        returnKeyType="next"
                        onInputChange={inputChangeHandler}
                        initialValue={editedPlacesCity ? editedPlacesCity.imageUrl : ''}
                        initiallyValid={!!editedPlacesCity}
                        required
                    />
                    {editedPlacesCity ? null : (
                        <Input
                            id="duration"
                            label="Duration"
                            errorText="Please enter a valid duration!"
                            keyboardType="decimal-pad"
                            returnKeyType="next"
                            onInputChange={inputChangeHandler}
                            required
                        />
                    )}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerButtonContainer: {
        marginRight: 5,
    }
});

export default EditPlacesCityScreen;