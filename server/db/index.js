const db = require('./database');
const Users = require('./users');

// Setup associations here
// Campuses.hasMany(Students);
// Students.belongsTo(Campuses);

module.exports = {
  db,
  Users,
};
