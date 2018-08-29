import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id='Home'>
        <Segment basic textAlign='center' id='HomeSegmentScroll'>
          <Header as='h1' icon>
            <Icon name='map marker alternate' />
              HexPop!
            <Header.Subheader>All your hexes. All your tables. None of your effort.</Header.Subheader>
          </Header>
          <Divider hidden />
          <Button positive as={Link} to='/project/hexes'>New Project</Button>
        </Segment>  
      </div>
    );
  };
};

class HomeHelp extends Component {
  render() {
    return (
      <div id='HomeHelp'>
        <h2>HexPop!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    )
  };
}

export { Home, HomeHelp };