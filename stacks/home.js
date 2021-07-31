import React, {useState,useEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
    Text, 
    Alert,
    View, 
    TouchableHighlight,
    Image,
    StyleSheet,
    FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {point,claim,task,fail} from './client';


//HOME
const Home = ({route, navigation}) => {
    const user = route.params.user;
    const isFocused = useIsFocused()
    const [soy, setSoy] = useState(true)
    const [username, setUser] = useState("")
    const [level, setLevel] = useState("")
    const [poin, setPoin] = useState("")
    const [image, setImage] = useState("")
    const [s, setS] = useState("")
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [c, setC] = useState("")
    const [d, setD] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        poi()
    },[isFocused])
    
    function poi() {
        point(user.username, user.password).then(
            (res) => {
                setUser(res.username)
                setPoin(res.point)
                setImage(res.image)
                setS(res.s)
                setA(res.a)
                setB(res.b)
                setC(res.c)
                setD(res.d)
                setSoy(false)
                setLevel(parseInt(((res.d*60)+(res.c*125)+(res.b*290)+(res.a*450)+(res.s*690))/690))
            }
        )
        task(user.username, user.password).then(
            (a) => {
                a.push({"name": "null"})
                setData(a)
            }
        )
    }

    const dame = (name) => 
        Alert.alert(
            `${name}'s mission`,
            `are you sure want to delete this?`,
            [{text: "dame",
            onPress: () => null
            },{text: "yoi",
            onPress: () => {
                fail(user.username, user.password, name).then(
                    (a) => {
                        poi()
                    }
                )
            }
            }]
        )

    //list task
    const Item = ({name, clas, task, time}) => (
        <View >
            <View style = {{flexDirection:"row", backgroundColor: "#26013D", minHeight: 20, padding: 7, paddingLeft: 3, alignItems: "center"}}>
                <Text style={{fontFamily: "sans-serif-medium", color: "snow", fontSize: 16}}> {clas.toUpperCase()} | </Text>
                <Text style={{fontFamily: "sans-serif-medium", color: "snow", fontSize: 16}}>{name}</Text>
                <Text style = {{marginLeft: "auto", color: "snow", fontSize: 13}}>{time}</Text>
            </View>
            <View style = {{backgroundColor: "#432452", minHeight: 40, flexDirection: "row", paddingLeft: 5, paddingTop: 4, paddingBottom: 4}}>
            <Text style={{color: "snow", width: "90%", fontSize: 16}}>{task}</Text>
            <TouchableHighlight style = {styles.cancelButton}
            onPress = {() => {
                dame(name)
            }}>
            <Image source={require('./img/x.png')} style={{height: 25, width: 25}}/>    
            </TouchableHighlight>
            </View>
        </View>
    )

    const renderItem = ({item}) => {
        if(item.name == "null"){
            return <View style={{height:100}}></View>
        }
        return (
            <Item name={item.name} clas={item.class} task={item.task} time={item.time}/>
        )
    }
    
    if(soy){
        return (
            //container kolom login
            <View style = {[styles.container,{justifyContent: "center", alignItems:"center", backgroundColor:"#D9B2EE9C"}]}>
                <Image 
                    source={require('./img/nico.png')}
                    style={{height: 200, width: 200}}
                    />
                    <Text style={{fontSize: 30}}>MIO</Text>
                </View>
        )
    }

    return(
        <View style = {{flex: 1, backgroundColor: "#432452"}}>
            <View style = {styles.container}>
                <LinearGradient colors={['#F095EB',"#26013D" ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.09, y: 1}}>
                <View style = {styles.satu}>
                    <Image source = {{uri:`${image}`}}
                    style= {{width:140, height: 140, borderRadius: 70, borderWidth: 2, borderColor: "snow",}}/>
                    <View style={{marginLeft: 10, flex: 1}}>
                    <View style={{flexDirection: "row", backgroundColor: "#26013D", borderRadius: 7, justifyContent: "center", alignItems: "center", padding:4, borderColor: "snow", borderWidth: 2, marginBottom: 7}}>
                        <Text style={[styles.flex1],{fontSize: 30, color: "snow", fontFamily: "notoserif"}}>{username} </Text>
                        <Text style={[styles.flex1],{fontSize: 25, color: "snow", fontFamily: "notoserif"}}>({level})</Text>
                    </View>
                    <View style= {{flexDirection: "row", backgroundColor: "#26013D", borderRadius: 7, justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "snow", zIndex: 10}}>
                    <Text style={[styles.flex1],{fontSize: 25, color: "snow"}}> {poin} </Text>
                    <Image source={require("./img/point.png")} style={{width:25,height:25}}/>
                    </View>
                    </View>
                </View>
                </LinearGradient>
                <View style = {styles.dua}>
                    <View style = {[styles.misi, {backgroundColor: "#26013D"}]}>
                        <Text style={{color: "snow", fontSize: 19}}>~MISSION~</Text>
                    </View>
                    <View style = {styles.cclass}>
                        <View style = {styles.class}>
                            <Text style={styles.text}>D</Text>
                            <Text style={styles.text}>•</Text>
                            <Text style={styles.text}>{d}</Text>
                        </View>
                        <View style = {styles.class}>
                            <Text style={styles.text}>C</Text>
                            <Text style={styles.text}>•</Text>
                            <Text style={styles.text}>{c}</Text>
                        </View>
                        <View style = {styles.class}>
                            <Text style={styles.text}>B</Text>
                            <Text style={styles.text}>•</Text>
                            <Text style={styles.text}>{b}</Text>
                        </View>
                        <View style = {styles.class}>
                            <Text style={styles.text}>A</Text>
                            <Text style={styles.text}>•</Text>
                            <Text style={styles.text}>{a}</Text>
                        </View>
                        <View style = {styles.class}>
                            <Text style={styles.text}>S</Text>
                            <Text style={styles.text}>•</Text>
                            <Text style={styles.text}>{s}</Text>
                    </View>
                    </View>
                    
                </View>
                <View style = {styles.tiga}>
                    <View>
                        <View style = {styles.record}>
                        </View>
                        <View style={{ backgroundColor:"#432452", }}>
                        <FlatList
                        data= {data}
                        renderItem= {renderItem}
                        keyExtractor= {item => item.name}
                        />
                        </View>
                    </View>
                </View>
            </View>
            <View style = {styles.claim}>
            <View style= {styles.flex1}>
            <TouchableHighlight
            underlayColor="snow"
            style={{alignItems: "center"}}
                onPress= {() => {
                    navigation.navigate("Create",{poin, user})
                }}>
                <Image source={require("./img/task.png")} style={{height:50, width:50}}/>
                </TouchableHighlight>
            </View>
            <View style= {styles.flex1}>
            <TouchableHighlight
            underlayColor="snow"
            style={{alignItems: "center"}}
                onPress= {() => {
                    claim(user.username, user.password).then(
                        () => poi()
                    )
                }}>
                <Image source={require("./img/button.png")} style={{height:50, width:50}}/>
                </TouchableHighlight>
            </View>
            <View style= {styles.flex1}>
            <TouchableHighlight
                underlayColor="snow"
                style={{alignItems: "center"}}
                onPress= {() => {
                    navigation.navigate("Shop",{poin, user})
                }}>
                <Image source={require("./img/shop.png")} style={{height:50, width:50}}
                />
                </TouchableHighlight>
            </View>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    claim: {
        backgroundColor: "#150020",
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: "100%",
        flexDirection: "row"
    },
    satu: {
        paddingTop: 25,
        padding: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    flex1: {
        flex:1
    },
    cclass:{
        padding: 10,
        paddingLeft: 4,
        paddingRight: 4,
        flexDirection: "row",
        backgroundColor: "#26013D"
    },
    text: {
        color: "snow"
    },
    class: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#523063",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "snow",
        margin: 3,
        justifyContent: 'space-evenly',
        paddingLeft: 5,
        paddingRight: 5
    },
    misi: {
        backgroundColor: "deepskyblue",
        alignItems: "center"
    },
    tiga: {
        flex: 1,
    },
    recor: {
        padding: 3
    },
    record: {
        alignItems: "center",
        backgroundColor: "khaki",
    },
    cancelButton: {
    height: 25, 
    width: 25, 
    marginLeft:"auto", 
    marginRight: 5,
    marginTop: 1,
    borderRadius: 50
    },
    abs: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default Home;
