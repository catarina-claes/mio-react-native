import React, {useState} from 'react';
import {
    Text, 
    TextInput, 
    View, 
    TouchableHighlight,
    Image,
    StyleSheet,
    Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {start} from './client';

const wrong = () =>
    Alert.alert(
    "Hmm..",
    `Kayaknya lu ada yg salah isi tuh!`,
    [{text: "damn", onPress: () => null}]
)

//login screen
const Create = ({route,navigation}) => {
    const user = route.params.user
    const [name, setName] = useState("")
    const [clas, setClas] = useState("")
    const [task, setTask] = useState("")
    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")
    const [min, setMin] = useState("")

    return(
        <View style= {styles.main}>
            <LinearGradient colors={['#F095EB',"#26013D" ]}
                start={{ x: 0 , y: 0 , }} end={{ x: 0, y: 1}}
                style={{width: "100%", height: "100%"}}></LinearGradient>
            <View style= {styles.container}>
                <View style={{alignSelf: "center", backgroundColor: "#432452", borderRadius: 7, marginVertical: 7, paddingHorizontal: 7}}>
                    <Text style={{color: "snow", fontSize: 20, fontFamily: "notoserif"}}>CREATE MISION</Text>
                </View>
                <View style={{width: "100%", height: 3, backgroundColor: "#26013D", marginTop: 7, marginBottom: 7}}></View>
                <View style= {styles.row}>
                    <Text style={{fontSize: 20, marginLeft: 4}}>name: </Text>
                    <TextInput
                    placeholder="name of mission"
                    placeholderTextColor="#FFFFFF86"
                    style={{backgroundColor:"#26013D", flex: 1, marginRight: 4, borderRadius: 7, paddingHorizontal: 4, color: "snow", fontSize: 16, aspectRatio: 6}}
                    onChangeText= {(text) => setName(text)}
                    defaultValue= {name}
                    value= {name}
                    ></TextInput>
                </View>
                <View style={{width: "100%", height: 3, backgroundColor: "#26013D", marginTop: 7, marginBottom: 7}}></View>
                <View style= {styles.row}>
                    <Text style={{fontSize: 20, marginLeft: 4}}>time: </Text>
                    <View style= {styles.time}><TextInput keyboardType= "numeric" value= {day} style={styles.text}
                    onChangeText= {(text) => setDay(text)} placeholder= "day" textAlign = "center" placeholderTextColor="#FFFFFF86"
                    ></TextInput></View>
                    <View style= {styles.time}><TextInput keyboardType= "numeric" value= {hour} style={styles.text}
                    onChangeText= {(text) => setHour(text)} placeholder= "hour" textAlign = "center" placeholderTextColor="#FFFFFF86"></TextInput></View>
                    <View style= {styles.time}><TextInput keyboardType= "numeric" value= {min} style={styles.text}
                    onChangeText= {(text) => setMin(text)} placeholder= "minute" textAlign = "center" placeholderTextColor="#FFFFFF86"></TextInput></View>
                </View>
                <View style={{width: "100%", height: 3, backgroundColor: "#26013D", marginTop: 7, marginBottom: 7}}></View>
                <View style= {styles.row}>
                    <Text style={{fontSize: 20, marginLeft: 4}}>class: </Text>
                    <TextInput
                    placeholder="D/C/B/A/S"
                    placeholderTextColor="#FFFFFF86"
                    style={{backgroundColor:"#26013D", flex: 1, marginRight: 4, borderRadius: 7, paddingHorizontal: 4, color: "snow", fontSize: 16, aspectRatio: 6}}
                    onChangeText= {(text) => setClas(text.toLowerCase())}
                    defaultValue= {clas}
                    value= {clas}></TextInput>
                </View>
                <View style={{width: "100%", height: 3, backgroundColor: "#26013D", marginTop: 7, marginBottom: 7}}></View>
                <View>
                <Text style={{fontSize: 20, marginLeft: 4}}>Task</Text>
                        <TextInput 
                        placeholder="your task's detail"
                        placeholderTextColor="#FFFFFF86"
                        style={{backgroundColor:"#26013D", flex: 1, margin: 4, borderRadius: 7, paddingHorizontal: 4, color: "snow", fontSize: 16}}
                        multiline= {true}
                        onChangeText= {(text) => setTask(text)}
                        defaultValue= {task}
                        value= {task}></TextInput>
                </View>
                <View style= {styles.buy}>
                <TouchableHighlight
                style={{borderRadius: 50}}
                underlayColor= "snow"
                    onPress= {async() => {
                            if((isNaN(day) || day < 0)||(isNaN(hour) || hour < 0)||(isNaN(min) || min < 0)){return wrong()}
                            if(name == "" || name.match(/^ +/) || name == "null"){return wrong()}
                            if(!(clas == "s" || clas == "a" || clas == "b" ||  clas == "c" || clas == "d")){return wrong()}
                            let time = (day * 86400000) + (hour * 3600000) + (min * 60000)
                            start(user.username, user.password, name, clas, task, time)
                        setName("")
                        setDay("")
                        setHour("")
                        setMin("")
                        setClas("")
                        setTask("")
                    }
                    }>
                    <Image source={require("./img/button.png")} style={{height:100, width:100}}/>
                    </TouchableHighlight>
            </View>
            </View>
            <View style= {styles.back}>
            <TouchableHighlight
            style={{borderRadius: 50}}
                onPress= {() => {
                    navigation.navigate("Home", true)
                }}
                >
                <Image source={require("./img/back.png")} style={{height: 40, width: 40}}/>
                </TouchableHighlight>
            </View>
            <Image 
            source={require('./img/element-icon.png')}
            style={{height: 40, width: 40, position: "absolute", bottom: 47, alignSelf: "center", zIndex: 1}}
            />
            <Text style={{position: "absolute", bottom: 17, alignSelf: "center", fontSize: 20, zIndex: 1}}>SYARO</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        backgroundColor: "snow",
        position:"absolute",
        marginTop: 17,
        left: 17,
        right: 17,
        flex: 1,
        paddingTop: 7,
        borderRadius: 17,
        borderWidth: 7,
        borderColor: "#26013D",
        zIndex: 3
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        flex: 1,
        backgroundColor: "#432452",
        borderWidth: 2,
        borderColor: "#26013D",
        borderRadius: 30,
        marginHorizontal: 4,
        aspectRatio: 2
    },
    start: {
        position: 'absolute',
        backgroundColor: "plum",
        height: 50,
        width: "35%",
        bottom: 0,
        alignSelf: "center"
    },
    back: {
        position: "absolute",
        top: 28,
        left: 28,
        height: 40,
        width: 40,
        borderRadius: 50,
        zIndex: 5
    },
    buy: {
        flex:1,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "snow"
    }
})

export default Create;
