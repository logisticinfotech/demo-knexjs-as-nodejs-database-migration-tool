module.exports = {
  development: {
    client: "mysql",
    connection: "mysql://root:123456@localhost:3306/knexdb",
    //optional param. default migrations folder create in root level project
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
  },
  production: {
    client: "mysql",
    connection: "mysql://root:123456@127.0.0.1:3306/knexdb",
  },
};
