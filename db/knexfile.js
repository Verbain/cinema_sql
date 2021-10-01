// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : 'vanille95370',
      database : 'cinema'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
