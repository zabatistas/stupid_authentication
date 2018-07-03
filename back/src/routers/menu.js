const express = require('express');
const jwt = require('jsonwebtoken');

const {secret} = require('../../config');
const router = express.Router();
const Food = require('../models/foods.js');

const checkToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).send([{message: 'You need to login to view the menu'}]);
  }
};

router.get('/', checkToken, (req, res) => {
  jwt.verify(req.token, secret, (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Food.find({}, (err, menu) => {
        if (err) {
          res.send(err);
        }
        res.json(menu);
      });
    }
  });
});

module.exports = router;
