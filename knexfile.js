// DATA ACCESS - knex configuration //
const devConfig = {
  client: 'pg',
  connection : {
    host: '127.0.0.1',
    port: '5432',
    user: 'dba_boucollective',
    database : 'boucollective'
  },

  migrations: {
    directory: './src/database/migrations'
  },

  seeds : {
    directory: './src/database/seeds'
  }

}

module.exports = {
  development: devConfig
}
