import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Dropdown,
  Icon,
  Label,
  Menu
} from 'semantic-ui-react';
import FloatingActionButton from '../../components/FloatingActionButton'

import './Tables.css';

class TablesControls extends Component {
  render() {
    return (
      <div>
        <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '1rem' }} >
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import table[s] ...' />
              <Dropdown.Item text='Export tables ...' />
              <Dropdown.Item text='Delete all tables' />
            </Dropdown.Menu>
          </Dropdown>
        <FloatingActionButton />
      </div>
    );
  };
};

export default TablesControls