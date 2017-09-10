import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render () {
        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor='#00BCD4'
                    barStyle="light-content"
                />

                <TextInput 
                    underlineColorAndroid='transparent'
                    placeholder='username or e-mail'
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input}  
                    />
                
                <TextInput 
                    underlineColorAndroid='transparent'
                    placeholder= 'password'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                    style={styles.input}
                    />

                <TouchableOpacity style={styles.buttonContainer}> 
                    <Text style={styles.buttonText}> Sign in </Text>
                </TouchableOpacity>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40, 
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },
    buttonContainer: {
        backgroundColor: '#00ACC1',
        paddingVertical: 15
    }
});