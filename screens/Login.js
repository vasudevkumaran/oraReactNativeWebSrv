import React, {Component} from 'react';
import {Text,View, TouchableOpacity} from 'react-native';

export class Login extends Component{
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title:'Login',
            headerRight:params.rightView
        }
    }

    constructor(props){
        super(props)
        this.props.navigation.setParams(
            {rightView:<TouchableOpacity style={{marginRight:15}}
            onPress={() => this.props.navigation.navigate('Register',{regId:-1})}>
                <Text style={{color:'white'}}>Register</Text>
            </TouchableOpacity>
            }
        );
    }


    render(){
        return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Login</Text>
        </View>
    }
}