const express = require('express');
const jwt = require('jsonwebtoken');

const {secret} = require('../../config');
const router = express.Router();
const User = require('../models/users.js');

const checkToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

router.get('/', checkToken, (req, res) => {
  jwt.verify(req.token, secret, (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      User.find({}, 'username', (err, users) => {
        if (err) {
          res.send(err);
        }
        res.json(users);
      });
    }
  });
});

router.delete('/delete/:user', (req, res) => {
  User.remove({username: req.params.user}, err => console.log(err));
  res.send(`User ${req.params.user} deleted`);
});

module.exports = router;
