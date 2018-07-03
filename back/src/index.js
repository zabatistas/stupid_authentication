'use strict';

//first we import our dependencies…
const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('../config');
//and create our instances
mongoose.connect(config.mongodb.url);

const app = express();
const menu = require('./routers/menu');
const login = require('./routers/login');
const signup = require('./routers/signup');
//set our port to either a predetermined port number if you have set 
//it up, or 3001
const port = process.env.API_PORT || 4000;
//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

app.use('/signup', signup);
app.use('/login', login);
app.use('/menu', menu);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
