var pgp = require('pg-promise')(),
    conf = require('./db_config'),
    conn;
const connectionData = {
    user : conf.user,
    host:conf.host,
    database:conf.database,
    password:conf.password,
    port:conf.port
}

conn = pgp(connectionData);


module.exports = conn;
