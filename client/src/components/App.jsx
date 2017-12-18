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

  render() {
    return (
      <div className="div">
        <AddPallet />
        <div className="processes">
          {
            this.state.processInfo.map(process => (
              <Process
                key={process.processid}
                processData={process}
                palletData={
                  this.state.palletInfo.filter(pallet => pallet.processid === process.processid)
                }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
