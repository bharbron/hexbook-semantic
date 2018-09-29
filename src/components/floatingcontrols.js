import React from 'react';
import {
  Button,
  Dropdown,
  Icon,
  Transition
} from 'semantic-ui-react';

import './components.css';

function FloatingActionButton(props) {
  return (
    <Transition animation='drop' transitionOnMount='true'>
      <Button
        className='FloatingActionButton'
        circular
        color={props.color}
        size='huge'
        icon={props.icon}
        onClick={props.onClick} />
    </Transition>
  )
}

function FloatingWorkspaceMenu(props) {
  return (
    <Transition animation='drop' transitionOnMount='true'>
      <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '1rem' }} >
        <Dropdown.Menu direction='left' children={props.children}>
        </Dropdown.Menu>
      </Dropdown>
    </Transition>
  )
}

export {FloatingActionButton, FloatingWorkspaceMenu}
