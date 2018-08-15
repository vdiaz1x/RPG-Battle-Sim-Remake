import React, { Component } from 'react';

import Button from './components/Button';

class Title extends Component {
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
      <section className="section title flex-center">
        THIS IS TITLE
        <div className="flex-center button-container-title margin">
          <Button message="Brave" />
          <Button message="Coward" />
        </div>
      </section>
    );
  }
}

export default Title;
