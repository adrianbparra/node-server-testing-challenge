// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/sales.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true,
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/testSales.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    }
  },


};
