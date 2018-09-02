import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Dropdown,
  Icon,
  Label,
  List,
  Menu
} from 'semantic-ui-react';
import { FloatingActionButton, FloatingWorkspaceMenu } from '../../components/FloatingControls'

import './Templates.css';

class TemplatesControls extends Component {
  render() {
    return (
      <div>
        <FloatingWorkspaceMenu>
          <Dropdown.Item text='Import template[s] ...' />
          <Dropdown.Item text='Export templates ...' />
          <Dropdown.Item text='Delete all templates' />
        </FloatingWorkspaceMenu>
        <FloatingActionButton icon='plus' color='google plus' />
      </div>
    );
  };
};

export default TemplatesControls