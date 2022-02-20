const factory = require('factory-girl').factory;
const { User } = require('../src/app/models');

factory.define('User', User, {
  name: 'Ivan',
  email: 'ivan@mail.com',
  password: '123123',
});

module.exports = factory;

