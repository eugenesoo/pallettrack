const { pgClient } = require('../database');

const getPallets = () => {
  const query = 'SELECT * FROM pallets INNER JOIN processorder ON pallets.orderid = processorder.orderid INNER JOIN processes ON processorder.processid = processes.processid';

  return pgClient.query(query);
};

module.exports = {
  getPallets,
};
