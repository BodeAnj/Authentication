import React from 'react';
import {View , StyleSheet} from 'react-native';


const Card = (props) => {
    return(
        <View style = {Style.container}>
        {props.children}

        </View>
    )
}

const Style = StyleSheet.create({

    container:{
        borderWidth:1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor:'#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0 , height: 2},
        shadowRadius: 2,
        elevation: 1,
        marginHorizontal: 5,
        marginTop:10
    }
})

export  {Card};