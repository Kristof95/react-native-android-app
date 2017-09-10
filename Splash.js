import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component{
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}> 
                     <Text style={styles.title}>Welcome in my application!</Text>
                </View>

                <View>
                     <Text style={styles.subtitle}>Powered by React-Native</Text>
                </View>   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#00BCD4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    subtitle: {
        fontWeight: "200",
        fontSize: 12,
        color: 'white', 
        paddingBottom: 12
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});