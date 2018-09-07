import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  Icon,
  Transition
} from 'semantic-ui-react';

import './components.css';

class FloatingActionButton extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Transition animation='drop' transitionOnMount='true'>
        <Button
          className='FloatingActionButton'
          circular
          color={this.props.color}
          size='huge'
          icon={this.props.icon}
          onClick={this.props.onClick} />
      </Transition>
    )
  }
}

class FloatingWorkspaceMenu extends Component {
  render () {
    return (
      <Transition animation='drop' transitionOnMount='true'>
        <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '1rem' }} >
          <Dropdown.Menu direction='left' children={this.props.children}>
          </Dropdown.Menu>
        </Dropdown>
      </Transition>
    )
  }
}

export { FloatingActionButton, FloatingWorkspaceMenu }
