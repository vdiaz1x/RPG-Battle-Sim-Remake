import React, { Component } from 'react';

// importing main components
import Battle from './Battle/Battle';
import Title from './Title/Title';
import Select from './Select/Select';

import { fire } from './assets/being';
import { firelist } from './assets/attack';


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
    // console.log(being);
    console.log(fire);
    console.log(firelist)
    return (
      // react fragment allows
      <React.Fragment>
        <Title />
        <Select />
        <Battle />
      </React.Fragment>
    );
  }
}

export default App;
