import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import firebase from 'firebase'
import { onLoginSuccess } from './Auth'

export default class SignUp extends Component {

    state={
        username:'',
        email:'',
        password:'',

    }
    onSubmit(){
        const {email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                alert('submitted')
            })
    }
   

    render(){
        return(
            <View style={Style.container}>
                <View style={Style.Card}>

                    <View style={Style.NameView}>
                        <Text style={{marginHorizontal:20}}>Username:</Text>
                        <TextInput
                        placeholder ={'Username'}
                        value={this.state.username}
                        onChangeText= {(text) => {this.setState({username:text}) ; console.log (this.state.username) }}
                        />
                    </View>

                    <View style={Style.useridView}>
                        <Text style={{marginHorizontal:20}}>User Id</Text>
                        <TextInput
                        placeholder ={'User Id'}
                        value={this.state.email}
                        onChangeText= {(text) => {this.setState({email:text}) ; console.log (this.state.email) }}
                        />
                    </View>

                    <View style={Style.pwdView}>
                        <Text style={{marginHorizontal:20}}>Create new password</Text>
                        <TextInput
                        placeholder ={'Password'}
                        value={this.state.password}
                        onChangeText= {(text) => {this.setState({password:text}) ; console.log (this.state.password) }}
                        
                        />
                     </View>

                     <View>
                         <Button 
                         title='SUBMIT'
                        onPress={() => {this.onSubmit()}}
                         />
                     </View>
                </View>

            </View>
        )
    }
}
const Style = StyleSheet.create({
    container:{

    },

    NameView:{

        borderWidth: 1,
        // justifyContent:'center',
        margin: 10,
        flexDirection: 'row',
        padding: 20,
        fontSize: 80,
        

    },   

    useridView:{

        borderWidth: 1,
        // justifyContent:'center',
        margin: 10,
        flexDirection: 'row',
        padding: 20,
        fontSize: 80,
    },

    pwdView:{

        borderWidth: 1,
        // justifyContent:'center',
        margin: 10,
        flexDirection: 'row',
        padding: 20,
        fontSize: 80,
    }

})