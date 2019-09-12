const Sequelize = require('sequelize');
const db = require('./database');

const Users = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://icon-library.net/images/default-user-icon/default-user-icon-7.jpg',
  },
  bio: {
    type: Sequelize.TEXT,
  },
});

module.exports = Users;
