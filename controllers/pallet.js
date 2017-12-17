const { pgClient } = require('../database');

const insertPallet = (palletName, palletPart, palletQty) => {
  const query = 'INSERT INTO pallets (palletid, qty, partid, orderid) VALUES (?, ?, ?)';

  const params = [palletName, palletQty, palletPart, 0];

  return pgClient.execute(query, params, { prepare: true });
};

module.exports = {
  insertPallet,
};
