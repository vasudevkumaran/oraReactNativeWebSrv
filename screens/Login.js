import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity,
    ScrollView,TextInput,Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title: 'Login',
            headerRight: params.rightView
        }
    }

    constructor(props) {
        super(props)
        this.props.navigation.setParams(
            {
                rightView: <TouchableOpacity style={{ marginRight: 15 }}
                    onPress={() => this.props.navigation.navigate('Register', { regId: -1 })}>
                    <Text style={{ color: 'white' }}>Register</Text>
                </TouchableOpacity>
            }
        );
        this.state = {username:'',password:'',loading:false};
    }

    checkLogin = () =>{
        this.setState({loading:true});
        const {username,password} = this.state;
        fetch('http://vasudevkumaran.com/ang/login',{
           method:'POST', headers:{
               'Content-Type':'application/json'
           }, body:JSON.stringify({username:username,password:password})
        }).then(response => response.json()).then(responseJson => {
            console.log(responseJson)
            this.setState({loading:false});
            if (responseJson.result == 'OK'){
                //login success
                //this.props.navigation.navigate('');
                this.store(responseJson);
            }
        });
    }

    store = async ({result,message,data}) =>{
        
        const {user_name,user_password} = data[0];
        console.log(user_name+" , "+user_password);
        await AsyncStorage.setItem('username',user_name);
        await AsyncStorage.setItem('password',user_password+"");
        this.props.navigation.navigate('Main');
    }

    render() {
        return <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:40 }}>
            <Text>Username</Text>
                <TextInput placeholder='Enter Username' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ username: text })}
                />
                <Text>Password</Text>
                <TextInput placeholder='Enter Password' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true}
                />
                <Button title="Login" onPress={this.checkLogin}/>

            </View>
        </ScrollView>

    }
}