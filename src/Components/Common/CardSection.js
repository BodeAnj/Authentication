import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = (props) =>{
    return(
        <View style = {Style.container}>
            {props.children}
        </View>
    )
}

const Style = StyleSheet.create({

    container:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        
        borderColor: '#ddd',
        position:'relative'

    }
})

export  {CardSection};