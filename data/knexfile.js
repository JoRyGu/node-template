// Update with your config settings.

module.exports = {
  development: {
    client: 'postgres',
    connection: {
      database: 'my-db',
      user: 'postgres',
      password: 'postgres'
    }
  },

  test: {
    client: 'postgres',
    connection: {
      database: 'my-db-test',
      user: 'postgres',
      password: 'postgres'
    }
  },

  production: {
    client: 'postgres',
    connection: {
      database: 'my-db-prod',
      user: 'postgres',
      password: 'postgres'
    }
  }
};
