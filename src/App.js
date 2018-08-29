import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Grid,
  Icon,
  Menu
} from 'semantic-ui-react';
import AppMenu from './AppMenu';
import { TablesWorkspace, TablesHelp } from './Tables';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>

          <Grid padded id='AppGrid'>
            <Grid.Row id='AppGridRowWorkspace'>
              <Grid.Column width='13' id='AppGridColumnWorkspace'>
                <Route exact path="/" component={TablesWorkspace} />
              </Grid.Column>
              <Grid.Column width='3' stretched>
                <Route exact path="/" component={TablesHelp} />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Menu borderless compact fixed='left' inverted pointing icon='labeled' vertical>
            <Menu.Item id='AppMenuItemHexpop'><Icon name='map marker alternate' />HexPop!</Menu.Item>
            <Route exact path="/" component={AppMenu} />
          </Menu>

        </div>
      </Router>
    );
  }
}

export default App;
