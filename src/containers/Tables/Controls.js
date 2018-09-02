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
import { FloatingActionButton, FloatingWorkspaceMenu } from '../../components/FloatingControls'

import './Tables.css';

class TablesControls extends Component {
  render() {
    return (
      <div>
        <FloatingWorkspaceMenu>
          <Dropdown.Item text='Import table[s] ...' />
          <Dropdown.Item text='Export tables ...' />
          <Dropdown.Item text='Delete all tables' />
        </FloatingWorkspaceMenu>
        <FloatingActionButton icon='plus' color='google plus' />
      </div>
    );
  };
};

export default TablesControls