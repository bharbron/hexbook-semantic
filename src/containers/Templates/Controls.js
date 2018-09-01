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
        <Button circular color='google plus' size='massive' icon='plus' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
      </div>
    );
  };
};

export default TemplatesControls