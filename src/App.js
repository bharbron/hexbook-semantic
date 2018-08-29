import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {
  Divider,
  Grid,
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react';
import { LeftWorkspace, RightWorkspace } from './Project'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>

          <Grid padded id='AppGrid'>
            <Grid.Row id='AppGridRowWorkspace'>
              <Grid.Column width='10' id='AppGridLeftWorkspace'>
                <Route path='/project/' component={LeftWorkspace} />
              </Grid.Column>
              <Grid.Column width='6' stretched id='AppGridRightWorkspace'>
                <Route path='/project/' component={RightWorkspace} />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Menu borderless compact fixed='left' inverted pointing icon='labeled' vertical>
            <Menu.Item as={Link} to='/' id='AppMenuItemHexpop'><Icon name='map marker alternate' />HexPop!</Menu.Item>
            <Divider inverted />
            <Menu.Item as={Link} to='/project/hexes'><Icon name='globe' />Hexes</Menu.Item>
            <Menu.Item as={Link} to='/project/tags'><Icon name='tags' />Tags</Menu.Item>
            <Menu.Item as={Link} to='/project/tables' active='true'><Icon name='list' />Tables</Menu.Item>
            <Menu.Item as={Link} to='/project/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
            <Menu.Item as={Link} to='/project/books'><Icon name='book' />Books</Menu.Item>
          </Menu>

        </div>
      </Router>
    );
  }
}

export default App;
