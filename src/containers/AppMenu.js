import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Dropdown,
  Header,
  Icon,
  Label,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';
import routes from '../constants/routes.json'

import './AppMenu.css';

class AppMenu extends Component {
  render () {
    return (
      <Menu
        secondary
        pointing
        color='red'
        size='large'
        fixed='left'
        vertical
        id='AppMenu'
      >
        <Menu.Item as={Link} to={routes.HOME} id='AppMenuHexpopLogo'>
          <Header as='h2' textAlign='center' icon inverted color='grey'>
            <Icon name='cubes' />
            HexPop!
          </Header>
        </Menu.Item>
        <Menu.Item as={Link} to={routes.HEXES}><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to={routes.TAGS}><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to={routes.TABLES}><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to={routes.TEMPLATES}><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to={routes.BOOKS}><Icon name='book' />Books</Menu.Item>
        <Divider />
        <List id='AppMenuSyntaxHelp'>
          <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE]]</span> Randomly roll on table CODE and insert result here</List.Item>
          <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE:+tag1,-tag2]]</span> Add tag1 to the filter, remove tag2, roll on CODE, insert result</List.Item>
          <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE:-ALL,+tag1]]</span> Remove all tags from the filter, add tag1, roll on CODE, insert result</List.Item>
        </List>
      </Menu>
    )
  }
}

export default AppMenu