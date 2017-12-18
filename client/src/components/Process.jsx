import React from 'react';

const Process = props => (
  <div>
    <h1>{props.processData.processname}</h1>
    {
      props.palletData.map(pallet => (
        <div>
          <p>{pallet.palletid}</p>
          <p>Qty: {pallet.qty}</p>
          <p>Part: {pallet.partid}</p>
        </div>
      ))
    }
    <h2>Total Parts:</h2>
    <p>
      {
        props.palletData.reduce((total, pallet) => total += pallet.qty, 0)
      }
    </p>
  </div>
);

export default Process;
