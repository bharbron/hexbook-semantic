import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  Header,
  Icon,
  Input,
  Label,
  Menu,
  Segment
} from 'semantic-ui-react';

import './Workspace.css';

class TagsWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>

        <Segment.Group>
          <Segment>
            <Header content='Terrain Tags' subheader='Automatically generated and tagged by the hex map. Type of terrain in a given hex. Typically used by random encounter tables.' />
          </Segment>
          <Segment>
            <Label.Group tag color='olive'>
              <Label>forest</Label>
              <Label>garden</Label>
              <Label>mountain</Label>
            </Label.Group>
          </Segment>
        </Segment.Group>

        <Segment.Group>
          <Segment>
            <Header content='Territory Tags' subheader='Automatically generated and tagged by the hex map. Group that holds influence in a given hex. Typically used by adventure hook and theme tables.' />
          </Segment>
          <Segment>
            <Label.Group tag color='orange'>
              <Label>colorless</Label>
              <Label>hearts</Label>
              <Label>pale</Label>
              <Label>red</Label>
            </Label.Group>
          </Segment>
        </Segment.Group>

        <Segment.Group>
          <Segment>
            <Header content='Other Tags' subheader='Any other user-defined tags that table rolls may by filtered by.' />
          </Segment>
          <Segment>
            <Label.Group tag color='teal'>
              <Label>animal<Icon name='delete' /></Label>
              <Label>day<Icon name='delete' /></Label>
              <Label>edible<Icon name='delete' /></Label>
              <Label>intelligent<Icon name='delete' /></Label>
              <Label>interior<Icon name='delete' /></Label>
              <Label>monarch<Icon name='delete' /></Label>
              <Label>night<Icon name='delete' /></Label>
              <Label>romantic<Icon name='delete' /></Label>
              <Label>unintelligent<Icon name='delete' /></Label>
              <Input
                icon={<Icon name='circle plus' link />}
                iconPosition='left'
                transparent
                fluid
                size='large'
                placeholder='enter new tag...'
                id='OtherTagsInput'
              />
            </Label.Group>
          </Segment>
          <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import tag[s] ...' />
              <Dropdown.Item text='Export tags ...' />
              <Dropdown.Item text='Delete all tags' />
            </Dropdown.Menu>
          </Dropdown>
        </Segment.Group>

      </div>
    );
  };
};

export default TagsWorkspace