import React, { Component } from 'react';
import {
  Divider,
  Icon,
  Menu
} from 'semantic-ui-react';
import './AppMenu.css';

class AppMenu extends Component {
  render() {
    return (
      <div>
        <Divider inverted />
        <Menu.Item as='a' href='/workspace/tags'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as='a' href='/workspace/tables' active='true'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as='a' href='/workspace/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as='a' href='/workspace/hexes'><Icon name='globe' />Hexes</Menu.Item>
        <Menu.Item as='a' href='/workspace/books'><Icon name='book' />Books</Menu.Item>
      </div>
    )
  };
};

export default AppMenu;