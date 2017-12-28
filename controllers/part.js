const { pgClient } = require('../database');

const getParts = () => {
  const query = 'SELECT * FROM parts';

  return pgClient.query(query);
};

const insertPart = (partName) => {
  const query = 'INSERT into parts (partname) VALUES ($1)';

  const params = [partName];

  return pgClient.query(query, params);
};

module.exports = {
  getParts,
  insertPart,
};
