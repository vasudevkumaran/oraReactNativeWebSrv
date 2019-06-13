import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Picker, Switch, Button } from 'react-native';

export class Register extends Component {
    static navigationOptions = {
        title: 'Register'
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '', password: '',
            firstname: '', lastname: '', gender: 1,
            is_business: false, is_travel: false, is_holidays: false
        };
    }

    sendDataToServer = async () => {
        const { username, password, firstname, lastname,
            gender, is_business,
            is_holidays, is_travel } = this.state;
        holidays = 2; travel = 2; business = 2;
        if (is_holidays) {
            holidays = 1;
        }
        if (is_travel) {
            travel = 1;
        }
        if (is_business) {
            business = 1;
        }
        try {
            let response = await fetch('http://vasudevkumaran.com/ang/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    gender: gender,
                    is_business: business,
                    is_holidays: holidays,
                    is_travel: travel
                })
            });
            //console.log(responseJson)
            let responseJson = await response.json();
            if (responseJson.result == 'OK'){ // success
                this.props.navigation.goBack();
            }else{ // failed

            }
            

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return <ScrollView >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text>Username</Text>
                <TextInput placeholder='Enter Username' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ username: text })}
                />
                <Text>Password</Text>
                <TextInput placeholder='Enter Password' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true}
                />
                <Text>First name</Text>
                <TextInput placeholder='Enter First name' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ firstname: text })}
                />
                <Text>Last name</Text>
                <TextInput placeholder='Enter Last name' style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'green', marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ lastname: text })}
                />
                <Text>Gender</Text>
                <Picker style={{ width: 200, height: 40, marginBottom: 15 }}
                    selectedValue={this.state.gender}
                    onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
                    <Picker.Item label="Male" value="1" />
                    <Picker.Item label="Female" value="2" />
                </Picker>
                <Text>Area of interest</Text>
                <View style={{ width: 200, flexDirection: 'row' }}>
                    <Text style={{ flex: 3 }}>Business</Text>
                    <Switch style={{ flex: 1 }} value={this.state.is_business} onValueChange={(v) => this.setState({ is_business: v })}
                    />
                </View>

                <View style={{ width: 200, flexDirection: 'row' }}>
                    <Text style={{ flex: 3 }}>Travel</Text>
                    <Switch style={{ flex: 1 }} value={this.state.is_travel} onValueChange={(v) => this.setState({ is_travel: v })}
                    />
                </View>

                <View style={{ width: 200, flexDirection: 'row' }}>
                    <Text style={{ flex: 3 }}>Holidays</Text>
                    <Switch style={{ flex: 1 }} value={this.state.is_holidays} onValueChange={(v) => this.setState({ is_holidays: v })}
                    />
                </View>
                <Button title="Save" onPress={this.sendDataToServer} />
            </View>
        </ScrollView>
    }
}