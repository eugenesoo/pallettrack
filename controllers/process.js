const { pgClient } = require('../database');

const getPallets = () => {
  const query = 'SELECT * FROM pallets INNER JOIN processorder ON pallets.orderid = processorder.orderid INNER JOIN processes ON processorder.processid = processes.processid INNER JOIN parts ON pallets.partid = parts.partid';

  return pgClient.query(query);
};

const getProcesses = () => {
  const query = 'SELECT * FROM processes';

  return pgClient.query(query);
};

module.exports = {
  getPallets,
  getProcesses,
};
