/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, ActivityIndicator,StyleSheet,Text } from 'react-native';
import firebase from 'firebase';
import Auth from './src/Components/Authentication/Auth';
import AppNavigator from './src/AppNavigation';
import {Header} from './src/Components/Common/Header';
import { Button } from './src/Components/Common/Button';




export default class App extends Component {
  state = {
    loggedIn : null
  }
  componentWillMount(){
    // alert('logi')
    firebase.initializeApp({
      apiKey: "AIzaSyALb2gJwDftbokb9AsOpAMljqsYBBd6JrM",
      authDomain: "manager-e0030.firebaseapp.com",
      databaseURL: "https://manager-e0030.firebaseio.com",
      projectId: "manager-e0030",
      storageBucket: "manager-e0030.appspot.com",
      messagingSenderId: "768333351448"
    });
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn : true })
      }
      else {
        this.setState({ loggedIn : false })
      }
    })
}

displayContent(){
  switch(this.state.loggedIn){
    case true:
      return (
        <View>
          <Header headertext= 'Log Out'/>
          <Button 
          title = 'Log Out'
          onPress = {() => {firebase.auth().signOut()}} />
        </View>
    )
    case false:
      return (
        <AppNavigator />
      )

    default:
      return <ActivityIndicator size="large" color="#0000ff" style={Style.spinner} />
  }
}

  render() {
    return (
      
         <View style={{flex:1}}>
           {this.displayContent()}
         </View>
        
    );
  }
}

const Style = StyleSheet.create({

  spinner:{
    flex: 1, 
    justifyContent: 'center'
  }
})
