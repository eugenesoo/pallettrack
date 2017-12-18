const { pgClient } = require('../database');

const getParts = () => {
  const query = 'SELECT * FROM parts';

  return pgClient.query(query);
};

module.exports = {
  getParts,
};
