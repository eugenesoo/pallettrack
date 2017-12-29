/* eslint-env browser */

import React from 'react';

const Process = props => (
  <div className="process">
    <h1>{props.processData.processname}</h1>
    {
        props.palletData.map(pallet => (
          <div key={pallet.palletid} className="pallet">
            <p>{pallet.palletid}</p>
            <p>Qty: {pallet.qty}</p>
            <p>Part: {pallet.partname}</p>
            <button onClick={() => window.open(`/pallet?id=${pallet.palletid}`, '_blank')}>Generate QR Code</button>
            {
              props.processData.processid !== 0 ?
                (
                  <button onClick={() => {
                    props.updatePallet(pallet.palletid);
                  }}
                  >Completed
                  </button>
                ) :
                (
                  <button>Hide</button>
                )
            }
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
