import React, { useEffect, useRef } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

//import * as firebase from '@react-native-firebase/app';

import DrawerContent from '../navigation/DrawerContent';
import Stack from '../navigation/Stack';
import HomeScreen from '../screens/CitiesScreen';

import AuthScreen from '../screens/user/AuthScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

import { AuthContext } from '../components/context';
import RootStackScreen from '../screens/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyC5mntJTk5gDMKxSvSayfVIy3JaEKO7tTM",
//     authDomain: "rn-test-database.firebaseapp.com",
//     databaseURL: "https://rn-test-database.firebaseio.com",
//     projectId: "rn-test-database",
//     storageBucket: "rn-test-database.appspot.com",
//     messagingSenderId: "919044215987",
//     appId: "1:919044215987:web:1da783478f3f8907ed8cc6",
//     measurementId: "G-SGZX1EMQ6F"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const DrawerNav = createDrawerNavigator();

const Menus = (props) => {
 
}

const MainNavigator = (props) => {
    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null
    }

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoding: false
                }
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    }

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    const authContext = React.useMemo(() => ({
        signIn: async (foundUser) => {
            // setUserToken('fgkj');
            // setIsLoading(false);
            const userToken = String(foundUser[0].userToken);
            const userName = foundUser[0].username;

            try {
                await AsyncStorage.setItem('userToken', userToken);
            } catch (e) {
                console.log(e);
            }
            // console.log('user token: ', userToken);
            dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async () => {
            // setUserToken(null);
            // setIsLoading(false);
            try {
                await AsyncStorage.removeItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
        },
        signUp: () => {
            // setUserToken('fgkj');
            // setIsLoading(false);
        },
        toggleTheme: () => {
            setIsDarkTheme(isDarkTheme => !isDarkTheme);
        }
    }), []);

    useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false);
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e);
            }
            //console.log('user token: ', userToken);
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    // if (loginState.isLoading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" />
    //         </View>
    //     );
    // }
    return (

        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {
                    loginState.userToken !== null ? (
                        <DrawerNav.Navigator
                            drawerContent={props => <DrawerContent {...props} />}
                        >
                            <DrawerNav.Screen
                                name="Home" component={Stack}
                            />
                            <DrawerNav.Screen
                                name="HomeScreen" component={HomeScreen}
                            />
                        </DrawerNav.Navigator>
                    )
                        : <RootStackScreen />

                }
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default MainNavigator;