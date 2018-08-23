import React, { Component } from 'react';

import Button from './components/Button';

class Title extends Component {
  constructor(props) {
    super(props);

    // state goes here
    this.state = {
      // state
    };
  }

  // functions go here
  // declare functions with arrow declarations to auto-bind function
  initiate = () => console.log('start game');
  restart=()=>console.log("game over")

  render() {
    return (
      <section className="section title flex-center">
        THIS IS TITLE
        <div className="flex-center button-container-title margin">
          <Button
            message="Brave"
            play={this.initiate}
          />
          <Button
            message="Coward"
            play={this.restart}
          />
        </div>
      </section>
    );
  }
}

export default Title;
