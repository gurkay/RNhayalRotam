import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';

const SignIn = ({navigation}) => {
    return(
        <View>
            <Button
                title="Sign In"
                onPress={()=> alert("todo")}
            />
            <Button
                title="Sign Up"
                onPress={()=> navigation.push("SignUp")}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SignIn;