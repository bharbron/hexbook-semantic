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

import './Templates.css';

class TemplatesControls extends Component {
  render() {
    return (
      <div>
        <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '1rem' }} >
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import template[s] ...' />
              <Dropdown.Item text='Export templates ...' />
              <Dropdown.Item text='Delete all templates' />
            </Dropdown.Menu>
          </Dropdown>
        <Button circular color='google plus' size='huge' icon='plus' style={{ position: 'fixed', bottom: '2rem', right: '2rem', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2)', width: '56px', height: '56px' }} />
      </div>
    );
  };
};

export default TemplatesControls