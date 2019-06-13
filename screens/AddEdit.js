import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export class AddEdit extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title: 'AddEdit',
            headerRight: params.rightView
        }
    }

    constructor(props) {
        super(props)
        const { itemId } = this.props.navigation.state.params;
        if (itemId == -1) { //add
            this.state = { itemname: '', itemqty: '', itemprice: '',itemid:-1 };
        } else { //edit
            const {item_id,item_name,item_qty,item_price} = this.props.navigation.state.params.item;
            this.state = {itemname:item_name,itemqty:item_qty+"",itemprice:item_price+"",itemid:item_id};
        }
    }

    addEditItem = async () =>{
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('password');
        const {itemname,itemprice,itemqty} = this.state;
        console.log(password);
        let url = 'http://vasudevkumaran.com/ang/additem';
        let payloads = {
            username:username,
            password:password,
            itemname:itemname,
            itemprice:itemprice,
            itemqty:itemqty
        }
        if (this.state.itemid != -1){ //edit
            payloads.itemid = this.state.itemid;
            url = 'http://vasudevkumaran.com/ang/updateitem';
        }
        let response = await fetch(url,
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payloads)
        });
        let responseJson = await response.json();
        console.log(responseJson);
        if (responseJson.result == 'OK'){
            this.props.navigation.state.params.sendBack();
            this.props.navigation.goBack();
        }
    }

    render() {
        return <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Text>Name</Text>
                <TextInput value={this.state.itemname}
                    placeholder='Enter Item name' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ itemname: text })}
                />
                <Text>Qty</Text>
                <TextInput value={this.state.itemqty}
                    placeholder='Enter Item Qty' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ itemqty: text })} keyboardType='number-pad' 
                />
                <Text>Price</Text>
                <TextInput value={this.state.itemprice}
                    placeholder='Enter Price' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ itemprice: text })} keyboardType='number-pad'
                />
                <Button title='Save' onPress={this.addEditItem} />
            </View>
        </ScrollView>


    }
}