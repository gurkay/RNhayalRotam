import React, { useState, useEffect, useReducer } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return (
                {
                    ...state,
                    value: action.value,
                    isValid: action.isValid
                }
            );
        case INPUT_BLUR:
            return (
                {
                    ...state,
                    touched: true
                }
            );
        default:
            return state;
    }
}

const CityItem = (props) => {
    console.log("CityItem : ", props);
    const [selectedValue, setSelectedValue] = useState("Adana");
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: true,
        touched: false
    });

    const { onInputChange, id } = props;

    useEffect(() => {
        if (inputState.touched) {
            onInputChange(id, inputState.value, inputState.isValid);
        }
    }, [inputState, onInputChange, id]);

    const textChangeHandler = (itemValue) => {
        setSelectedValue(itemValue)
        let isValid = true;
        console.log("CityItem text: ", isValid);
        dispatch({ type: INPUT_CHANGE, value: selectedValue, isValid: isValid });
    };

    const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR });
    }
    console.log("CityItem : ", selectedValue);
    return (
        <View style={styles.container}>
            <Text>Citys : </Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => textChangeHandler(itemValue)}
            >
                <Picker.Item label="Adana" value="c1" />
                <Picker.Item label="Adiyaman" value="c2" />
                <Picker.Item label="Afyon" value="c3" />
                <Picker.Item label="Agri" value="c4" />
                <Picker.Item label="Amasya" value="c5" />
                <Picker.Item label="Ankara" value="c6" />
                <Picker.Item label="Antalya" value="c7" />
                <Picker.Item label="Artvin" value="c8" />
                <Picker.Item label="Aydın" value="c9" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        flexDirection:'row',
        alignItems: "center"
    }
});

export default CityItem;