const express = require('express');
const jwt = require('jsonwebtoken');
const {secret, sessionDuration} = require('../../config');
const router = express.Router();
const User = require('../models/users.js');

const loginUser = (req, res) => {
  const user = new User(req.body);
  const {username, password} = user;
  User.findOne({username}, (err, data) => {
    if (err) {
      res.send(err);
    } else if (data === null) {
      res.status(400).send([{message: 'Username does not exist'}]);
    } else if (data.checkPassword(password)) {
      jwt.sign({username, exp: Math.floor(Date.now() / 1000) + Number(sessionDuration)}, secret, (err, token) => {
        res.status(200).json([{token, message: 'Logged in succesfully'}]);
      });
    } else {
      res.status(400).send([{message: 'Wrong password'}]);
    }
  });
};

router.post('/', loginUser);

module.exports = router;
