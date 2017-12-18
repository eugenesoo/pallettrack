import React from 'react';

const Process = props => (
  <div className="process">
    <h1>{props.processData.processname}</h1>
    {
        props.palletData.map(pallet => (
          <div>
            <p>{pallet.palletid}</p>
            <p>Qty: {pallet.qty}</p>
            <p>Part: {pallet.partid}</p>
            {
              props.processData.processid !== 7 ?
                (
                  <button onClick={(e) => {
                    props.updatePallet(e, pallet.palletid, pallet.orderid + 1);
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
