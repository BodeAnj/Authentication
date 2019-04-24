import React from 'react';
import {Text, StyleSheet, View} from 'react-native';



 const Header = (props) => {
    
     return (
         <View style = {Style.viewStyle}>

            <Text style = {Style.con}>{props.headertext}</Text>
         </View>
     )
 };
 
     
  
 

 const Style = StyleSheet.create({

    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height:80,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: {width:0,  height:2},
        shadowOpacity: 0.5,
        elevation: 2,
        position : 'relative'

    },

con:{
    fontSize:20,
    padding: 10,
}
 })

 export {Header};