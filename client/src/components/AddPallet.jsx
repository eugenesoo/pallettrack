import React from 'react';
import axios from 'axios';

class AddPallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palletQty: '',
      palletName: '',
      partId: 1,
    };
    this.inputChange = this.inputChange.bind(this);
    this.createPallet = this.createPallet.bind(this);
  }

  inputChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  createPallet() {
    axios.post('/pallets', {
      palletname: this.state.palletName,
      palletqty: this.state.palletQty,
      palletpart: this.state.partId,
    }).then(() => this.props.updateAllPallets());
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
            onChange={(e) => { this.inputChange(e, 'palletQty'); }}
          />
        </label>
        <label htmlFor="pallet-name">
          Pallet Name:
          <input id="pallet-name" value={this.state.palletName} onChange={(e) => { this.inputChange(e, 'palletName'); }} />
        </label>
        <label htmlFor="pallet-part">
          Part Name:
          <select id="pallet-part" value={this.state.partId} onChange={(e) => { this.inputChange(e, 'partId'); }}>
            {
              this.props.partInfo.map(part => (
                <option key={part.partid} value={part.partid}>{part.partname}</option>
              ))
            }
          </select>
        </label>
        <button onClick={this.createPallet}>Create Pallet</button>
      </div>
    );
  }
}

export default AddPallet;
