import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    Text, 
    View, 
    Image,
    StyleSheet,} from 'react-native';
    
const getUser = async () => {
    const jsonValue = await AsyncStorage.getItem('client')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}

//login screen
const Splash = ({navigation}) => {
    useEffect(() => {
            getUser().then(
                    (user) => {
                        if(user == null){
                        navigation.navigate("Login")
                     }else{
                         navigation.navigate("Home", {user})
                     }
                    }
                )
    }, [])
    return (
        //container kolom login
        <View style = {styles.container}>
            <Image 
                source={require('./img/element-icon.png')}
                style={{height: 25, width: 25, position: "absolute", bottom: 27, alignSelf: "center"}}
                />
            <Text style={{position: "absolute", bottom: 7, alignSelf: "center"}}>mio</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "lavender",
    }
})

export default Splash;
