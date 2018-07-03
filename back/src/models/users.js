'use strict';

const mongoose = require('mongoose');
const encrypt = require('../../utils/crypto');
const validate = require('../../utils/validators');

const Schema = mongoose.Schema;
// utils/crypto.js
//const encrypt = password => crypto.hash(password)

const UsersSchema = new Schema({
  username: {
    type: String,
    validate: validate.username
  },
  password: {
    type: String,
    validate: validate.password
  },
  friends: {
    type: Array,
  }
});

UsersSchema.methods.setPassword = function (plainPassword) {
  this.password = encrypt(plainPassword);
  return this;
};

UsersSchema.methods.checkPassword = function (password) {
  return this.password === encrypt(password);
};

module.exports = mongoose.model('User', UsersSchema);
