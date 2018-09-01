import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Dropdown,
  Icon,
  List,
  Menu,
  Select
} from 'semantic-ui-react';

import './Workspace.css';

class BooksWorkspace extends Component {
  render() {
    return (
      <div id='BooksWorkspace'>
        <Card.Group itemsPerRow='2' doubling>

          <Card raised>
            <Card.Content>
              <Card.Header>Book 1</Card.Header>
              <Card.Description>
                <List bulleted>
                  <List.Item>Size: A5</List.Item>
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <List size='large'>
                <List.Item>
                  <List.Icon name='puzzle' size='big' />
                  <List.Content>
                    <List.Header>Hexes</List.Header>
                    <List.Description>Template for printing the list of hexes <Icon link name='minus circle' color='grey' /></List.Description>
                  </List.Content>
                </List.Item>
              </List>
              <Icon link name='plus circle' size='large' color='grey' />
              <Select placeholder='Select a template' />
            </Card.Content>
            <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Dropdown.Menu direction='left'>
                <Dropdown.Item text='Delete this book' />
              </Dropdown.Menu>
            </Dropdown>
          </Card>

          <Card raised>
            <Card.Content>
              <Card.Header>Book 2</Card.Header>
              <Card.Description>
                <List bulleted>
                  <List.Item>Size: A5</List.Item>
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <List size='large'>
                <List.Item>
                  <List.Icon name='puzzle' size='big' />
                  <List.Content>
                    <List.Header>Key NPCs</List.Header>
                    <List.Description>Template for printing the list of important NPCs <Icon link name='minus circle' color='grey' /></List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='puzzle' size='big' />
                  <List.Content>
                    <List.Header>Random NPCs</List.Header>
                    <List.Description>Template for printing additional random NPCs <Icon link name='minus circle' color='grey' /></List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='puzzle' size='big' />
                  <List.Content>
                    <List.Header>Magic Items</List.Header>
                    <List.Description>Template for printing an index of magic items <Icon link name='minus circle' color='grey' /></List.Description>
                  </List.Content>
                </List.Item>
              </List>
              <Icon link name='plus circle' size='large' color='grey' />
              <Select placeholder='Select a template' />
            </Card.Content>
            <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Dropdown.Menu direction='left'>
                <Dropdown.Item text='Delete this book' />
              </Dropdown.Menu>
            </Dropdown>
          </Card>

         </Card.Group> 
      </div>
    );
  };
};

export default BooksWorkspace;