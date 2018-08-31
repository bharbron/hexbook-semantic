import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Divider,
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
          <Card>
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
                <List.Item icon='puzzle' header='Hexes' content='Template for printing the list of hexes' />
              </List>
            </Card.Content>
          </Card>

          <Card>
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
                <List.Item icon='puzzle' header='Key NPCs' content='Template for printing the list of important NPCs' />
                <List.Item icon='puzzle' header='Random NPCs' content='Template for printing additional random NPCs' />
                <List.Item icon='puzzle' header='Magic Items' content='Template for printing an index of magic items' />
              </List>
            </Card.Content>
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
      <Button circular color='google plus' size='massive' icon='pencil' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
    );
  };
};

export { BooksWorkspace, BooksMenu, BooksControls };
