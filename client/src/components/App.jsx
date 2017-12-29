import React from 'react';
import axios from 'axios';
import AddPallet from './AddPallet';
import Process from './Process';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palletInfo: [],
      processInfo: [],
      partInfo: [],
    };
    this.updatePallet = this.updatePallet.bind(this);
    this.updateAllPallets = this.updateAllPallets.bind(this);
  }

  componentDidMount() {
    this.updateAllPallets();
    this.getProcesses();
    this.getParts();
  }

  getProcesses() {
    axios.get('/processes')
      .then((data) => {
        this.setState({
          processInfo: data.data,
        });
      });
  }

  getParts() {
    axios.get('/parts')
      .then((data) => {
        this.setState({
          partInfo: data.data,
        });
      });
  }

  updateAllPallets() {
    axios.get('/pallets')
      .then((data) => {
        this.setState({
          palletInfo: data.data,
        });
      });
  }

  updatePallet(palletid) {
    axios.patch('/pallets', {
      palletid,
    }).then(() => this.updateAllPallets());
  }

  render() {
    return (
      <div className="div">
        <AddPallet
          partInfo={this.state.partInfo}
          updateAllPallets={this.updateAllPallets}
        />
        <div className="processes">
          {
            this.state.processInfo.map(process => (
              <Process
                key={process.processid}
                processData={process}
                palletData={
                  this.state.palletInfo.filter(pallet => pallet.processid === process.processid)
                }
                updatePallet={this.updatePallet}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
