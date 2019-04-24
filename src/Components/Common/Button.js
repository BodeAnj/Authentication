import React from 'react';
import {Text , TouchableOpacity, StyleSheet} from 'react-native';


const Button = ({onPress, title}) => {
    return (
        <TouchableOpacity 
        style = {Style.buttonView}
        onPress={onPress}
        
        >
         <Text style = {Style.TextView}>{title}</Text>
            

        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    buttonView:{
        // flex:1,
        // alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius :5,
        borderColor: '#007aff',
        marginHorizontal: 10,
        marginVertical: 20,
        alignItems: 'center'
    },

    TextView:{
        alignSelf:'center',
        fontSize: 17,
        fontWeight:'800',
        color: '#007aff',
        padding : 10,
        
    }
})

export {Button};