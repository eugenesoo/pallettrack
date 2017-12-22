import React from 'react';

const AddPart = props => (
  <div>
    <label htmlFor="add-part">
      <input id="add-part" placeholder="insert part name here" />
    </label>
    <button onClick={props.addPart}>Add part</button>
  </div>
);

export default AddPart;
