'use strict';

const mongoose = require('mongoose');
//const validate = require('../../utils/validators');

const Schema = mongoose.Schema;

const FoodsSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
  },
  ingredients: {
    type: [String],
  }
});

module.exports = mongoose.model('Food', FoodsSchema);
