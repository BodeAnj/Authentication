import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import SignUp from './Components/Authentication/SignUp'
import Auth from './Components/Authentication/Auth'
import { createStackNavigator, createAppContainer } from 'react-navigation';




    const AppNavigator = createStackNavigator({

        Auth:{screen:Auth,
                navigationOptions: () => ({
                    title: 'Login',
                    headerStyle: {
                    backgroundColor: 'lightgrey',
                },
            
                headerTitleStyle:{
                    color:'black',
                },

                })
        },
        SignUp:{screen:SignUp,
            navigationOptions: () => ({
                title: 'SignUp',
                headerStyle: {
                backgroundColor: 'lightgrey',
            },
        
            headerTitleStyle:{
                color:'black',
            },
               
            })
        
        },
    },{
        initialRouteName:'Auth'
    })
    
    
    
    
    
    export default createAppContainer(AppNavigator)