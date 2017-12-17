import React from 'react';
import axios from 'axios';

class AddPallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palletQty: '',
      palletName: '',
      partId: '',
    };
    this.qtyChange = this.qtyChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.partChange = this.partChange.bind(this);
  }

  qtyChange(event) {
    this.setState({
      palletQty: event.target.value,
    });
  }

  nameChange(event) {
    this.setState({
      palletName: event.target.value,
    });
  }

  partChange(event) {
    this.setState({
      partId: event.target.value,
    });
  }

  createPallet() {
    axios.post('/pallet', {
      palletname: this.state.palletName,
      palletqty: this.state.palletQty,
      partid: this.state.partId,
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="pallet-quantity">
          Pallet Quantity:
          <input
            id="pallet-quantity"
            placeholder="0"
            value={this.state.palletQty}
            onChange={this.qtyChange}
          />
        </label>
        <label htmlFor="pallet-name">
          Pallet Name:
          <input id="pallet-name" value={this.state.palletName} onChange={this.nameChange} />
        </label>
        <label htmlFor="pallet-part">
          Part Name:
          <input id="part-name" value={this.state.partName} onChange={this.partChange} />
        </label>
        <button onClick={this.createPallet}>Create Pallet</button>
      </div>
    );
  }
}

export default AddPallet;
