const validate = require('mongoose-validator');

const username = [
  validate({
    validator: 'isLength',
    arguments: [3, 20],
    message: 'Username should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Username should contain alpha-numeric characters only',
  }),
];

const password = [
  validate({
    validator: 'isLength',
    arguments: [10, ],
    message: 'Password should be at least {ARGS[0]} characters',
  })
];

module.exports = {username, password};
