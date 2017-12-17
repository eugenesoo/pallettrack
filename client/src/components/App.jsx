import React from 'react';
import AddPallet from './AddPallet';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palletInfo: {

      },
    };
  }

  render() {
    return (
      <div className="div">
        <AddPallet />
      </div>
    );
  }
}

export default App;
