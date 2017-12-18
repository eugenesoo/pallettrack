const { pgClient } = require('../database');

const insertPallet = (palletName, palletPart, palletQty) => {
  const query = 'INSERT INTO pallets (palletid, qty, partid, orderid) VALUES ($1, $2, $3, $4)';

  const params = [palletName, palletQty, palletPart, 0];

  return pgClient.query(query, params);
};

module.exports = {
  insertPallet,
};
