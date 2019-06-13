import React, {Component} from 'react';
import {Text,View,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Base extends Component{

    constructor(props){
        super(props);
        this.checkLoginStatus();
    }

    checkLoginStatus = async () => {
        username = await AsyncStorage.getItem('username');
        password = await AsyncStorage.getItem('password');
        if (username){ //logged in already
            this.props.navigation.navigate('Main');
        }else{ // yet to login
            this.props.navigation.navigate('Auth');
        }
    }

    render(){
        return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator/>
        </View>
    }
}