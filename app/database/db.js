const knexConf = require('./knexfile');
const db = require('knex')(knexConf.development);


db.raw('PRAGMA foreign_keys = ON').then(() => {
    console.log('SQLite foreign keys enabled.');
});

module.exports = db;