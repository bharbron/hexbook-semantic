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

class TagsWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Card.Group itemsPerRow='1'>

          <Card>
            <Card.Content>
              <Card.Header>Terrain Tags</Card.Header>
              <Card.Meta>Type of terrain in a given hex. Typically used to determine random encounters.</Card.Meta>
              <Card.Description>
                <Label.Group tag color='green'>
                  <Label>grasslands<Icon name='delete' /></Label>
                  <Label>forest<Icon name='delete' /></Label>
                  <Label>hills<Icon name='delete' /></Label>
                  <Label>mountains<Icon name='delete' /></Label>
                  <Label>desert<Icon name='delete' /></Label>
                  <Label>swamp<Icon name='delete' /></Label>
                </Label.Group>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Input icon={<Icon name='plus' inverted circular link />} placeholder='tag' />
              <Popup trigger={<Button as='a' size='tiny' basic circular icon='trash alternate' negative inverted floated='right'/>} content='Delete all terrain tags' />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Territory Tags</Card.Header>
              <Card.Meta>Group that holds influence in a given hex. Typically used to determine adventure hooks and themes.</Card.Meta>
              <Card.Description>
                <Label.Group tag color='orange'>
                  <Label>goblins<Icon name='delete' /></Label>
                  <Label>dwarves<Icon name='delete' /></Label>
                  <Label>imperial<Icon name='delete' /></Label>
                  <Label>fae<Icon name='delete' /></Label>
                </Label.Group>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Input icon={<Icon name='plus' inverted circular link />} placeholder='tag' />
              <Popup trigger={<Button as='a' size='tiny' basic circular icon='trash alternate' negative inverted floated='right'/>} content='Delete all territory tags' />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Other Tags</Card.Header>
              <Card.Meta>Any other tags that table rolls may by filtered by.</Card.Meta>
              <Card.Description>
                <Label.Group tag color='teal'>
                  <Label>intelligent<Icon name='delete' /></Label>
                  <Label>animal<Icon name='delete' /></Label>
                  <Label>unintelligent<Icon name='delete' /></Label>
                  <Label>romantic<Icon name='delete' /></Label>
                  <Label>edible<Icon name='delete' /></Label>
                </Label.Group>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Input icon={<Icon name='plus' inverted circular link />} placeholder='tag' />
              <Popup trigger={<Button as='a' size='tiny' basic circular icon='trash alternate' negative inverted floated='right'/>} content='Delete all other tags' />
            </Card.Content>
          </Card>

        </Card.Group> 
      </div>
    );
  };
};

class TagsHelp extends Component {
  render() {
    return (
      <div id='TagsHelp'>
        <h2>Tags</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    )
  };
}

export { TagsControls, TagsWorkspace, TagsHelp };