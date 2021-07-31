import React, {useState, useEffect} from 'react';
import {
    Text, 
    TextInput, 
    View, 
    TouchableHighlight,
    Image,
    StyleSheet,
    Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {point} from './client';
import {buy} from './client';

//login screen
const Shop = ({route, navigation}) => {
    const user = route.params.user
    const [poin, setPoin] = useState(route.params.poin)
    const [jajan, setJajan] = useState("")
    const [game, setGame] = useState("")
    const [anime, setAnime] = useState("")
    const [medsos, setMedsos] = useState("")
    const [animer, setAnimer] = useState("")
    const [mln, setMln] = useState("")
    const [mlnr, setMlnr] = useState("")
    
    useEffect(() => {
        pon()
    },[])

    function pon() {
        point(user.username, user.password).then(
            (res) => {
                setPoin(res.point)
            }
        )
    }

    const dame = () => {
        let price = (jajan * 50) + (game * 60) + (anime * 30) + (medsos * 70) + (animer * 50) + (mln * 30)+ (mlnr * 70)
        if(poin < price){
            return Alert.alert(
                "Ah Sorry!",
                `TOTAL PRICE: ${price}\npoint lu kagak cukup untuk beli ini semua!`,
                [{text: "damn", onPress: () => null}]
            )
        } 
        if(isNaN(price) || price < 30){
            return Alert.alert(
                "Sorry!",
                `lu salah masukin total barang tuh!`,
                [{text: "damn", onPress: () => null}]
            )
        }
        return Alert.alert(
            `TOTAL PRICE: ${price}`,
            `are you sure want to buy?`,
            [{
                text: "dame",
                onPress: () => null
           },
            {
                text: "buy",
                onPress: () => {
                    buy(user.username, user.password, jajan, game, anime, medsos, animer, mln, mlnr).then(
                        (a) => {
                            pon()
                            setJajan("")
                            setGame("")
                            setAnime("")
                            setMedsos("")
                            setAnimer("")
                            setMln("")
                            setMlnr("")
                        }
                    )

                }
            }]
        )
    }

    return(
        <View style= {styles.main}>
            <LinearGradient colors={['#F095EB',"#26013D" ]}
                start={{ x: 0 , y: 0 , }} end={{ x:0 , y: 1}}
                style={{width: "100%", height: "100%",}}>
            <View style = {styles.container}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 4}}>
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
                <View style={{alignSelf: "center", backgroundColor: "#432452", borderRadius: 7, marginVertical: 7, paddingHorizontal: 44}}>
                    <Text style={{color: "snow", fontSize: 25, fontFamily: "notoserif"}}>SHOP</Text>
                </View>
                <View style= {{flexDirection: "row", backgroundColor: "#432452", borderRadius: 7, justifyContent: "center", alignItems: "center", paddingRight: 7, borderWidth: 2, borderColor: "snow"}}>
                <Text style={[styles.flex1],{fontSize: 25, color: "snow"}}> {poin} </Text>
                    <Image source={require("./img/point.png")} style={{width:25,height:25}}/>
                </View>
                </View>
                <View style={{width: "100%", height: 3, backgroundColor: "#26013D", marginTop: 10}}></View>
                <View style = {styles.list}>
                    <Image source = {require("./img/jajan.png")}
                    style= {{width: 35, height: 35}}/>
                    <Text style={{fontSize: 20, marginLeft: 2}}>Jajan</Text>
                    <TextInput
                    style={{marginLeft: "auto", fontSize: 20, }}
                    keyboardType= "numeric"
                    onChangeText= {(text) => setJajan(text)}
                    placeholder= "0"
                    value= {jajan}
                    />
                </View>
                <View style={styles.line}></View>
                <View style = {styles.list}>
                    <Image source = {require("./img/game.png")}
                    style= {{width: 35, height: 35}}/>
                    <Text style={{fontSize: 20, marginLeft: 2}}>Game</Text>
                    <TextInput
                    style={{marginLeft: "auto", fontSize: 20}}
                    keyboardType= "numeric"
                    onChangeText= {(text) => setGame(text)}
                    placeholder= "0"
                    value= {game}
                    />
                </View>
                <View style={styles.line}></View>
                <View style = {styles.list}>
                    <Image source = {require("./img/anime.png")}
                    style= {{width: 35, height: 35}}/>
                    <Text style={{fontSize: 20, marginLeft: 2}}>Anime</Text>
                    <TextInput
                    style={{marginLeft: "auto", fontSize: 20}}
                    keyboardType= "numeric"
                    onChangeText= {(text) => setAnime(text)}
                    placeholder= "0"
                    value= {anime}
                    />
                </View>
                <View style={styles.line}></View>
                <View style = {styles.list}>
                    <Image source = {require("./img/medsos.png")}
                    style= {{width: 35, height: 35}}/>
                    <Text style={{fontSize: 20, marginLeft: 2}}>Media Social</Text>
                    <TextInput
                    style={{marginLeft: "auto", fontSize: 20}}
                    keyboardType= "numeric"
                    onChangeText= {(text) => setMedsos(text)}
                    placeholder= "0"
                    value= {medsos}
                    />
                </View>
                <View style={styles.line}></View>
                <View style = {styles.list}>
                    <Image source = {require("./img/animer.png")}
                    style= {{width: 35, height: 35}}/>
                    <Text style={{fontSize: 20, marginLeft: 2}}>Anime Romance</Text>
                    <TextInput
                    style={{marginLeft: "auto", fontSize: 20}}
                    keyboardType= "numeric"
                    onChangeText= {(text) => setAnimer(text)}
                    placeholder= "0"
                    value= {animer}
                    />
                </View>
                <View style={styles.line}></View>
                <View style = {styles.list}>
                    <Image source = {require("./img/mln.png")}
                    style= {{width: 35, height: 35}}/>
                    <Text style={{fontSize: 20, marginLeft: 2}}>Manga / Ln</Text>
                    <TextInput
                    style={{marginLeft: "auto", fontSize: 20}}
                    keyboardType= "numeric"
                    onChangeText= {(text) => setMln(text)}
                    placeholder= "0"
                    value= {mln}
                    />
                </View>
                <View style={styles.line}></View>
                <View style = {styles.list}>
                    <Image source = {require("./img/mlnr.png")}
                    style= {{width: 35, height: 35}}/>
                    <Text style={{fontSize: 20, marginLeft: 2}}>Manga / Ln Romance</Text>
                    <TextInput
                    style={{marginLeft: "auto", fontSize: 20}}
                    keyboardType= "numeric"
                    onChangeText= {(text) => setMlnr(text)}
                    placeholder= "0"
                    value= {mlnr}
                    />
                </View>
                <View style={styles.line}></View>
                <View style= {styles.buy}>
                <TouchableHighlight
                style={{borderRadius: 50}}
                underlayColor= "snow"
                    onPress= {async() => {
                        dame()
                    }}>
                    <Image source={require("./img/button.png")} style={{height:100, width:100}}/>
                    </TouchableHighlight>
                </View>
            </View>
            </LinearGradient>
            
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    title: {
        marginTop:20,
        flexDirection: "row",
        justifyContent: "center"
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
        borderColor: "#26013D"

    },
    list: {
        backgroundColor: "snow",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 7
    },
    sum: {
        flexDirection: "row"
    },
    buy: {
        flex:1,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    back: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    line: {width: "100%", height: 3, backgroundColor: "#26013D"}
    
})

export default Shop;
