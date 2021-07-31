import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Text, 
    TextInput, 
    View, 
    TouchableHighlight,
    Image,
    StyleSheet,} from 'react-native';
import {login} from './client';
import { useIsFocused } from '@react-navigation/core';

//login screen
const Login = ({navigation}) => {
    const isFocused = useIsFocused()
    const [user, setUser] = useState("")    
    const [pass, setPass] = useState("")
    return (
        //container kolom login
        <View style = {styles.container}>
            <View style={[styles.abs,{backgroundColor:"#D9B2EE9C"}]}>
                <Image 
                source={require('./img/element-icon.png')}
                style={{height: 25, width: 25, position: "absolute", bottom: 27, alignSelf: "center"}}
                />
                <Text style={{position: "absolute", bottom: 7, alignSelf: "center"}}>MIO</Text>
            </View>

            <View style = {styles.cLogin}>
                {/*Login Input*/}
                <View style = {styles.cInput}>
                    <TextInput
                    placeholder = "Username"
                    placeholderTextColor = "#C4B1F7"
                    style = {styles.cText}
                    onChangeText = {(text) => setUser(text)}
                    defaultValue = {user}
                    />
                </View>
                <View style = {styles.cInput}>
                    <TextInput
                    placeholder = "Password"
                    placeholderTextColor = "#C4B1F7"
                    style = {styles.cText}
                    onChangeText = {(text) => setPass(text)}
                    defaultValue = {pass}
                    secureTextEntry = {true}
                    />
                </View>

                {/*Login button*/}
                <TouchableHighlight
                style = {[styles.cTouch]}
                onPress= {async () => {
                    login(user, pass).then(
                        async(a) =>{
                            if(a == true) {
                                const jsonValue = JSON.stringify({"username":user,"password":pass})
                                await AsyncStorage.setItem('client', jsonValue)
                                navigation.navigate("Splash")
                            }
                            return null
                          }
                    )
                }}
                ><Text style= {{color: "#C4B1F7"}}>
                    Login
                </Text>
                </TouchableHighlight>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },
    cLogin: {
        width: "100%",
        padding: 10,
        paddingTop: 15,
        backgroundColor: "#5F248FC7",
    },
    cInput: {
        margin: 4,
    },
    cText: {
        paddingStart: 5,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#C4B1F7",
        color: "#E7E0FA",
    },
    cTouch: {
        marginTop: 19,
        margin: 4,
        height: 33,
        alignSelf: "center",
        width: "100%",
        backgroundColor: "#2C035273",
        justifyContent:"center",
        alignItems: "center",
        borderRadius:3
    },
    abs: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default Login;
