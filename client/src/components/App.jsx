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
    };
    this.updatePallet = this.updatePallet.bind(this);
    this.updateProcesses = this.updateProcesses.bind(this);
  }

  componentDidMount() {
    axios.get('/pallets')
      .then((data) => {
        this.setState({
          palletInfo: data.data,
        });
      });

    axios.get('/processes')
      .then((data) => {
        this.setState({
          processInfo: data.data,
        });
      });
  }

  updateProcesses() {
    axios.get('/pallets')
      .then((data) => {
        this.setState({
          palletInfo: data.data,
        });
      });
  }

  updatePallet(e, palletid, orderid) {
    axios.patch('/pallet', {
      palletid,
      orderid,
    }).then(() =>
      axios.get('/pallets')).then((data) => {
      this.setState({
        palletInfo: data.data,
      });
    });
  }

  render() {
    return (
      <div className="div">
        <AddPallet updateProcesses={this.updateProcesses} />
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
