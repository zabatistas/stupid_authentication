const express = require('express');
const {secret, sessionDuration} = require('../../config');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/users.js');
const handleFormErrors = require('../../utils/handleFormErrors');

const validateForm = (req, res, next) => {
  const user = new User(req.body);
  user.validate(err => {
    if (err) {
      const errMessages = handleFormErrors(err);
      res.status(400).send(errMessages);
      next(err);
    }
    req.user = user;
    next();
  });
};

const createUser = (req, res) => {
  const user = req.user;
  const {username, password} = user;
  user.validate();
  User.findOne({username: user.username}, (err, data) => {
    if (data === null) {
      user
        .setPassword(password)
        .save();
      const token = jwt.sign({username, exp: Math.floor(Date.now() / 1000) + sessionDuration}, secret);
      res.status(200).json([{token, message: 'You have successfully signed up'}]);
    } else if (data) {
      res.status(400).send([{message: 'Username already exists'}]);
    } else {
      //console.log(err);
    }
  });
};

router.post('/', validateForm, createUser);

module.exports = router;
