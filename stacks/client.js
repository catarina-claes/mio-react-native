//import fetch
global.Buffer = require('buffer').Buffer
const fetch = require("node-fetch")
const host = "https://syarochan.herokuapp.com"

//login
async function login(username, password) {
    return fetch(`${host}/login`, {
    method: "post",
    headers: {
        "Authorization" : "Basic " + Buffer.from(`${username}:${password}`, "binary").toString("base64"),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username":`${username}`,
        "password":`${password}`
    })
})
.then(res => res.text())
.then(body => body == "" ? false : true)
.catch(err => console.log(err))
}

//buy
async function buy(username, password, jajan, game, anime, medsos, animer, mln, mlnr) {
    return fetch(`${host}/buy`, {
    method: "post",
    headers: {
        "Authorization" : "Basic " + Buffer.from(`${username}:${password}`, "binary").toString("base64"),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username":`${username}`,
        "jajan":`${jajan}`,
        "game":`${game}`,
        "anime":`${anime}`,
        "medsos":`${medsos}`,
        "animer":`${animer}`,
        "mln":`${mln}`,
        "mlnr":`${mlnr}`,

    })
})
.then(res => res.json())
.then(body => body)
.catch(err => console.log(err))
}

//claim
async function claim(username, password) {
    return fetch(`${host}/claim`, {
    method: "post",
    headers: {
        "Authorization" : "Basic " + Buffer.from(`${username}:${password}`, "binary").toString("base64"),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username":`${username}`
    })
})
.then(res => res.json())
.then(body => body)
.catch(err => console.log(err))
}

//fail
async function fail(username, password, name) {
    return fetch(`${host}/fail`, {
    method: "post",
    headers: {
        "Authorization" : "Basic " + Buffer.from(`${username}:${password}`, "binary").toString("base64"),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username":`${username}`,
        "name":`${name}`
    })
})
.then(res => res.json())
.then(body => body)
.catch(err => console.log(err))
}

//point
async function point(username,password) {
    return fetch(`${host}/point`, {
    method: "post",
    headers: {
        "Authorization" : "Basic " + Buffer.from(`${username}:${password}`, "binary").toString("base64"),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username":`${username}`,
    })
})
.then(res => res.json())
.then(body => body)
.catch(err => console.log(err))
}

//start
async function start(username, password, name, clas, task, time) {
    return fetch(`${host}/start`, {
    method: "post",
    headers: {
        "Authorization" : "Basic " + Buffer.from(`${username}:${password}`, "binary").toString("base64"),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username":`${username}`,
        "name":`${name}`,
        "class":`${clas}`,
        "task":`${task}`,
        "time":`${time}`,
    })
})
.then(res => res.json())
.then(body => body)
.catch(err => console.log(err))
}

//task
async function task(username, password) {
    return fetch(`${host}/task`, {
    method: "post",
    headers: {
        "Authorization" : "Basic " + Buffer.from(`${username}:${password}`, "binary").toString("base64"),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username":`${username}`
    })
})
.then(res => res.json())
.then(body => body)
.catch(err => console.log(err))
}



module.exports = {
    buy,
    claim,
    fail,
    point,
    start,
    task,
    login
}