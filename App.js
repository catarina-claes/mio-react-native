import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from './stacks/splash';
import Login from './stacks/login';
import Home from './stacks/home';
import Shop from './stacks/shop';
import Create from './stacks/create';

const Stack = createStackNavigator();

const App = ()=> {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName= "Splash">
                <Stack.Screen name= "Splash" component= {Splash} options= {{headerShown: false,}}></Stack.Screen>
                <Stack.Screen name= "Login" component= {Login} options= {{headerShown: false,}}></Stack.Screen>
                <Stack.Screen name= "Home" component= {Home} options= {{headerShown: false,}}></Stack.Screen>
                <Stack.Screen name= "Shop" component= {Shop} options= {{headerShown: false,}}></Stack.Screen>
                <Stack.Screen name= "Create" component= {Create} options= {{headerShown: false,}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;