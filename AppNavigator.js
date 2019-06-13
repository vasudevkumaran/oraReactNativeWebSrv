import React , {Component} from 'react';
import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import { Login } from './screens/Login';
import { Home } from './screens/Home';
import { AddEdit } from './screens/AddEdit';
import { Base } from './screens/Base';
import { Register } from './screens/Register';


const AuthStack = createStackNavigator(
    {
        Login:{screen:Login},
        Register:{screen:Register}
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'green'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'white',
                fontWeight:'bold'
            }
        }
    }
);

const MainStack = createStackNavigator(
    {
        Home:{screen:Home},
        AddEdit:{screen:AddEdit}
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'green'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'white',
                fontWeight:'bold'
            }
        }
    }
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        Base:{screen:Base},
        Auth:{screen:AuthStack},
        Main:{screen:MainStack}
    },
    {
        initialRouteName:'Base'
    }
));

export class MyContainer extends Component{
    render(){
        return <AppContainer/>
    }
}