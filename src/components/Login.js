import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return(
            //<KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.containerLogo}>
                        <Image style={styles.logo} source= {require('../../images/octocat.png')}/>
                        <Text style={styles.title}> An app made for Github using React-Native </Text>
                    </View>
                    <View style={styles.containerForm}>
                        <LoginForm />
                    </View>
                </View>
          //</KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BCD4'
    },
    containerLogo: {
       flexGrow: 1,
       alignItems: 'center',
       justifyContent: 'center'
    },
    containerForm: {
        
    },
    logo: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: 15,
        color: 'white',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        opacity: 0.7
    }
});