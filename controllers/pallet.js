const { pgClient } = require('../database');

const insertPallet = (palletName, palletPart, palletQty) => {
  const query = 'INSERT INTO pallets (palletid, qty, partid, orderid) VALUES ($1, $2, $3, $4)';

  const params = [palletName, palletQty, palletPart, 1];

  return pgClient.query(query, params);
};

const updatePallet = (palletid, orderid) => {
  const query = 'UPDATE pallets SET orderid = $1 WHERE palletid = $2';

  const params = [orderid, palletid];

  return pgClient.query(query, params);
};

module.exports = {
  insertPallet,
  updatePallet,
};
