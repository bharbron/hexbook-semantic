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
        <Menu.Item as='a'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as='a' active='true'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as='a'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as='a'><Icon name='globe' />Hexes</Menu.Item>
        <Menu.Item as='a'><Icon name='book' />Books</Menu.Item>
      </div>
    )
  };
};

export default AppMenu;