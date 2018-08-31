import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Divider,
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
        <Card.Group itemsPerRow='1'>

          <Card>
            <Card.Content header='Terrain Tags' meta='Type of terrain in a given hex. Typically used to determine random encounters.' />
            <Card.Content>
              <Card.Description>
                <Label.Group tag color='olive'>
                  <Label>grasslands</Label>
                  <Label>forest</Label>
                  <Label>hills</Label>
                  <Label>mountains</Label>
                  <Label>desert</Label>
                  <Label>swamp</Label>
                </Label.Group>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Territory Tags' meta='Group that holds influence in a given hex. Typically used to determine adventure hooks and themes.' />
            <Card.Content>
              <Card.Description>
                <Label.Group tag color='orange'>
                  <Label>goblins</Label>
                  <Label>dwarves</Label>
                  <Label>imperial</Label>
                  <Label>fae</Label>
                </Label.Group>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Other Tags</Card.Header>
              <Card.Meta>Any other tags that table rolls may by filtered by.</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <Label.Group tag color='teal'>
                  <Label>intelligent<Icon name='delete' /></Label>
                  <Label>animal<Icon name='delete' /></Label>
                  <Label>unintelligent<Icon name='delete' /></Label>
                  <Label>romantic<Icon name='delete' /></Label>
                  <Label>edible<Icon name='delete' /></Label>
                  <Icon size='large' name='plus circle' />
                </Label.Group>
              </Card.Description>
            </Card.Content>
          </Card>

        </Card.Group> 
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
      <Button circular color='google plus' size='massive' icon='pencil' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
    );
  };
};

export { TagsWorkspace, TagsMenu, TagsControls };
