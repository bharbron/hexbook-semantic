import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  Header,
  Icon,
  Input,
  Label,
  List,
  Menu,
  Popup,
  Segment,
  Table,
  Tab
} from 'semantic-ui-react';
import './Books.css';

class BooksWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
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
            </Card.Content>
            <Icon link name='pencil' color='grey' style={{ position: 'absolute', top: '1rem', right: '1rem' }} />
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
            </Card.Content>
            <Icon link name='pencil' color='grey' style={{ position: 'absolute', top: '1rem', right: '1rem' }} />
          </Card>

         </Card.Group> 
      </div>
    );
  };
};

class BooksMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to='/project/hexes'><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to='/project/tags'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to='/project/tables'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to='/project/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to='/project/books' active='true'><Icon name='book' />Books</Menu.Item>
      </div>
    );
  };
};

class BooksControls extends Component {
  render() {
    return (
      <div>
        <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '1rem' }} >
            <Dropdown.Menu direction='left'>
              <Dropdown.Item icon='download' text='Import' />
              <Dropdown.Item icon='upload' text='Export' />
              <Dropdown.Item icon='trash alternate' text='Clear Items' />
            </Dropdown.Menu>
          </Dropdown>
        <Button circular color='google plus' size='massive' icon='pencil' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
      </div>
    );
  };
};

export { BooksWorkspace, BooksMenu, BooksControls };
