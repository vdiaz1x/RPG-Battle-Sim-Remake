import React, { Component } from 'react';

// importing main components
import Battle from './Battle/Battle';
import Title from './Title/Title';
import Select from './Select/Select';

import roster from './assets/being';
// import { firelist } from './assets/attack';


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
    console.log(roster);
    return (
      // react fragment allows rendering of several components without having a weapper div on them
      <React.Fragment>
        <Title />
        <Select />
        <Battle />
      </React.Fragment>
    );
  }
}

export default App;
