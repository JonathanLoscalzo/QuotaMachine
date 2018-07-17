import React, { Component } from 'react';
import Quota from './container/Quota';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {

    return (
      <Quota className={"d-flex justify-content-center"} />
    );
  }
}

export default App;
