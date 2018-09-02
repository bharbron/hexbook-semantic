import React, { Component } from 'react';
import Workspace from './containers/Workspace'
import AppMenu from './containers/AppMenu'
import Controls from './containers/Controls'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Workspace />
        <AppMenu />
        <Controls />
      </div>
    );
  }
}

export default App;
