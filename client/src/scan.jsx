/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Scan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palletInfo: [],
      palletId: '',
      isSuccess: undefined,
    };
    this.updateInput = this.updateInput.bind(this);
    this.updatePallet = this.updatePallet.bind(this);
  }

  componentDidMount() {
    axios.get('/pallets')
      .then((results) => {
        const updatedPalletInfo = results.data.map(pallet => pallet.palletid);
        this.setState({
          palletInfo: updatedPalletInfo,
        });
      });
  }

  updateInput(e) {
    this.setState({
      palletId: e.target.value,
    });
  }

  updatePallet() {
    axios.patch('/pallets', {
      palletid: this.state.palletId,
    }).then((results) => {
      console.log('hello', results);
      this.setState({
        isSuccess: true,
      });
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="pallet-id">
          <input id="pallet-id" value={this.state.palletId} onChange={this.updateInput} />
          <button onClick={this.updatePallet}>Transfer Part</button>
        </label>
        {
          this.state.isSuccess ?
            (
              <div>
                hello world
              </div>
            ) :
            null
        }
      </div>
    );
  }
}

ReactDOM.render(<Scan />, document.getElementById('scan'));
