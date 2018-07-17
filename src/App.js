import React, { Component } from 'react';

// importing main components
import Battle from './Battle/Battle';
import Title from './Title/Title';
import Select from './Select/Select';

// app will be the smart component, everything else will just render prop data
class App extends Component {
  constructor(props) {
    super(props);

    // state goes here
    this.state = {
      // state
    };

    // functions go here
  }

  render() {
    return (
      // react fragment allows
      <React.Fragment>
        <Battle />
        <Title />
        <Select />
      </React.Fragment>
    );
  }
}

export default App;
