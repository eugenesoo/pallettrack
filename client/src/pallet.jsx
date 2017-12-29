/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'qrcode.react';

const PalletQR = () => (
  <div>
    Pallet id:
    {
      window.location.search.slice(4)
    }
    <br />
    <br />
    <QRCode value={window.location.search.slice(4)} />
  </div>
);

ReactDOM.render(<PalletQR />, document.getElementById('pallet'));
