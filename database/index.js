const pg = require('pg');

const pgClient = new pg.Client({
  user: process.env.POSTGRESUSER || 'postgres',
  host: process.env.POSTGRESHOST || '127.0.0.1',
  database: process.env.POSTGRESDB || 'pallettrack',
  password: process.env.POSTGRESPASS || 'nyancat',
  port: process.env.POSTGRESPORT || '5432',
});

pgClient.connect().catch(err => console.log('hello im running'));

module.exports = { pgClient };
