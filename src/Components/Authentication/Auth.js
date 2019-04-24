import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button,  ActivityIndicator } from 'react-native';
import { Card, CardSection, Header} from '../Common'
import firebase from 'firebase'




export default class Auth extends Component {

    state ={
        email:'',
        password:'',
        loading : false
    }
  
    onLogin(){

        const {email, password} = this.state;

        this.setState({error: '', loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password) 
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {

            firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
        }) 
    }

    onLoginFail(){
        this.setState({error: 'Authentication Fail', loading : false})
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password:'',
            loading: false,
            error: ''
        })
    }
    
    renderButton(){
        if (this.state.loading == true) {
            return <ActivityIndicator size="large" color="#0000ff" />
        }

        return (
            <Button
                    style = {Style.btnView}
                    title='Login'
                    onPress={() => {this.onLogin()}}
                    />
        )
    }

    

    render(){
        return(

            <Card style = {Style.container}>
                    {/* <Header 
                    headerText= 'Login'
                    /> */}
            <CardSection style={Style.Card}>

                <View style={Style.emailView}>
                    <Text style={{marginHorizontal:20,  padding: 5,}}>E-mail</Text>
                    <TextInput
                    style={{marginHorizontal:20, padding: 5,}}
                    placeholder ={'user@example.com'}
                    value={this.state.email}
                    onChangeText= {(text) => {this.setState({email:text}) ; console.log (this.state.email) }}
                     />
                </View>

                

                <View style={Style.pwdView}>
                    <Text style={{marginHorizontal:20,  padding: 5,}}>Password</Text>
                    <TextInput
                    style={{marginHorizontal:20,  padding: 5,}}
                    placeholder ={'Password'}
                    value={this.state.password}
                    onChangeText= {(text) => {this.setState({password:text}) ; console.log (this.state.password) }}
                    secureTextEntry= {true}
                     />
                </View>

                <View style = {Style.btnView}>
                
                    {this.renderButton()}
                </View>

                <View style = {Style.btnView}>
                
                   <Button 
                   
                    title='SignUp'
                    onPress={() => {this.props.navigation.navigate('SignUp')}}
                    />
                </View>

                

                

               

               
                </CardSection>

                
            </Card>

        )
    }
}

const Style = StyleSheet.create({

    container:{
        
       flex:1

    },

    Card:{

        justifyContent:'center',
        margin:20,
       
        
    },

    emailView:{
        borderWidth:2,
        // flexDirection: 'row',
        margin: 10,
        padding: 5,
       
                                  
       
    },
    
    pwdView:{
        borderWidth:2,
        // flexDirection: 'row',
        margin: 10,
        padding: 5
       
       
    },

    btnView:{
        
        // alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius :5,
        borderColor: '#007aff',
        marginHorizontal: 30,
        marginVertical: 10,
    }

  
})