"use strict";
const data = require('../mocks/users.json');
const users = data.users;
const notes = require('../mocks/notes.json');
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('express').Router();

app.use(express.static(__dirname + './public'));

app.use(function(req, res, next) {
    //Permettre le CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('index.html')
})

app.get('/users', function(req, res) {
    res.send(users);
})

app.get('/user/:id', function(req, res) {
    let userId = req.params.id;
    var user = getUserById(userId);
    res.send(user);
})

app.listen(9000, function() {
    console.log('App listening on port 9000!')
})

function getUserById(id) {
    len = users.length;
    for (let i = 0; i < len; i++) {
        var currentUser = users[i];
        if (currentUser._id == id) {
            return currentUser;
        }
    }
}
