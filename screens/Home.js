import React, {Component} from 'react';
import {Text,View,TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export class Home extends Component{

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title: 'Home',
            headerRight: params.rightView
        }
    }
    constructor(props) {
        super(props)
        this.props.navigation.setParams(
            {
                rightView: <View style={{flexDirection:'row',marginRight:15}}>
                    <TouchableOpacity style={{flex:1}} onPress={this.addItem}>
                        <Text style={{color:'white',fontWeight:'bold',marginRight:10}}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={this.clearLogin}>
                        <Text style={{color:'white',fontWeight:'bold'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            }
        );
        this.state = {items:[],loading:false}
        this.reloadItems();
    }

    addItem = () => {
        this.props.navigation.navigate('AddEdit',{itemId:-1,sendBack:this.reloadItems.bind(this)});
    }

    editItem = (obj) => {
        this.props.navigation.navigate('AddEdit',{itemId:obj.item_id,item: obj, sendBack:this.reloadItems.bind(this)});
    }

    reloadItems = async () => {
        console.log("Back called");
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('password');
        let response = await fetch('http://vasudevkumaran.com/ang/getallitems',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        });
        let responseJson = await response.json();
        console.log(responseJson);
        if (responseJson.result == 'OK'){
            const {items} = responseJson;
            this.setState({items:items});
        }
    }

    clearLogin = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Base')
    }

    

    render(){
        return <View style={{flex:1, justifyContent:'center',padding:10}}>
            <FlatList data={this.state.items} renderItem={({item}) => <TouchableOpacity style={{height:60}} onPress={() => this.editItem(item)}><Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>{item.item_name}</Text></TouchableOpacity>} keyExtractor={(item,index) => item.item_id+""} />
        </View>
    }
}