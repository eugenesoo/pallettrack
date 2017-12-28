/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';

const Scan = () => (
  <div>
    <video id="preview" />
  </div>
);

ReactDOM.render(<Scan />, document.getElementById('scan'));
