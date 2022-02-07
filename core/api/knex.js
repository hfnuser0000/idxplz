const knex = require('knex');

const data = {};

function connect(dbLocation) {
    if(!data[dbLocation]) {
        data[dbLocation] = knex({
            client: 'sqlite3',
            connection: {
                filename: dbLocation
            },
            useNullAsDefault: true
        });
    }
    return data[dbLocation];
}

module.exports = {
    connect
};

