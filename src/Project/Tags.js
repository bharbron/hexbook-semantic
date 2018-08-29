import React, { Component } from 'react';
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
  Table
} from 'semantic-ui-react';
import './Tags.css';

class TagsControls extends Component {
  render() {
    return (
      <div id='TagsControls'>
        <Popup trigger={<Button content='Import' icon='download' />} content='Import tags[s]' />
        <Popup trigger={<Button content='Export' icon='upload' />} content='Export all tags to file or clipboard' />
      </div>
    );
  };
};

class TagsLeftWorkspace extends Component {
  render() {
    return (
      <div id='TagsLeftWorkspace'>
        <Card.Group itemsPerRow='1'>

          <Card>
            <Card.Content header='Terrain Tags' meta='Type of terrain in a given hex. Typically used to determine random encounters.' />
            <Card.Content>
              <Card.Description>
                <Label.Group tag color='green'>
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
                  <Icon name='plus' />
                </Label.Group>
              </Card.Description>
            </Card.Content>
          </Card>

        </Card.Group> 
      </div>
    );
  };
};

class TagsRightWorkspaceMenu extends Component {
  render() {
    return (
      <Menu pointing id='TagsRightWorkspaceMenu'>
        <Menu.Item color='blue' icon='plus' active='true' />
        <Menu.Item icon='code' />
        <Menu.Item icon='download' />
        <Menu.Item icon='upload' />
      </Menu>
    );
  };
};

export { TagsLeftWorkspace, TagsRightWorkspaceMenu };