import React, { Component } from 'react';
import {
  Dropdown,
  Icon
} from 'semantic-ui-react';

import './components.css';

class FloatingWorkspaceMenu extends Component {
  render () {
    return (
      <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '1rem' }} >
        <Dropdown.Menu direction='left' children={this.props.children}>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default FloatingWorkspaceMenu