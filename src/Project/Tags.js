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
import './Tags.css';

class TagsWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>

        <Segment.Group>
          <Segment>
            <Header content='Terrain Tags' subheader='Type of terrain in a given hex. Typically used to determine random encounters.' />
          </Segment>
          <Segment>
            <Label.Group tag color='olive'>
              <Label>grasslands</Label>
              <Label>forest</Label>
              <Label>hills</Label>
              <Label>mountains</Label>
              <Label>desert</Label>
              <Label>swamp</Label>
            </Label.Group>
          </Segment>
        </Segment.Group>

        <Segment.Group>
          <Segment>
            <Header content='Territory Tags' subheader='Group that holds influence in a given hex. Typically used to determine adventure hooks and themes.' />
          </Segment>
          <Segment>
            <Label.Group tag color='orange'>
              <Label>goblins</Label>
              <Label>dwarves</Label>
              <Label>imperial</Label>
              <Label>fae</Label>
            </Label.Group>
          </Segment>
        </Segment.Group>

        <Segment.Group>
          <Segment>
            <Header content='Other Tags' subheader='Any other tags that table rolls may by filtered by.' />
          </Segment>
          <Segment>
            <Label.Group tag color='teal'>
              <Label>intelligent<Icon name='delete' /></Label>
              <Label>animal<Icon name='delete' /></Label>
              <Label>unintelligent<Icon name='delete' /></Label>
              <Label>romantic<Icon name='delete' /></Label>
              <Label>edible<Icon name='delete' /></Label>
              <Icon link size='large' name='plus circle' color='grey' />
            </Label.Group>
          </Segment>
          <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import' />
              <Dropdown.Item text='Export' />
              <Dropdown.Item text='Delete Tags' />
            </Dropdown.Menu>
          </Dropdown>
        </Segment.Group>

      </div>
    );
  };
};

class TagsMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to='/project/hexes'><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to='/project/tags' active='true'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to='/project/tables'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to='/project/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to='/project/books'><Icon name='book' />Books</Menu.Item>
      </div>
    );
  };
};

class TagsControls extends Component {
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

export { TagsWorkspace, TagsMenu, TagsControls };
