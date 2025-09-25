const session = require('express-session');
const process = require('process');
const connect_sqlite3 = require('connect-sqlite3')(session);

const SQLiteStore = new connect_sqlite3({
    db : 'session',     // database name
    dir : './app/database', // database location
    table : 'session'   // table name
})

// configure session
const my_session = session({
    store: SQLiteStore, // default store is using memory
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60, // one hour
    },
    rolling: true // <---- THIS refreshes the cookie on every response
});

module.exports = my_session;

