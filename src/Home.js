import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Header,
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react';
import './Home.css';

class HomeWorkspace extends Component {
  render() {
    return (
        <Segment basic textAlign='center' id='HomeSegmentScroll'>
          <Header as='h1' icon>
            <Icon name='map marker alternate' />
              HexPop!
            <Header.Subheader>All your hexes. All your tables. None of your effort.</Header.Subheader>
          </Header>
          <Divider hidden />
          <Button positive as={Link} to='/project/hexes'>New Project</Button>
        </Segment>  
    );
  };
};

class HomeMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to='/project/hexes'><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to='/project/tags'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to='/project/tables'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to='/project/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to='/project/books'><Icon name='book' />Books</Menu.Item>
      </div>
    );
  };
};

class HomeControls extends Component {
  render() {
    return (
      <Button circular color='google plus' size='massive' icon='pencil' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
    );
  };
};

export { HomeWorkspace, HomeMenu, HomeControls };