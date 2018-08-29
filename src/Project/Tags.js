import React, { Component } from 'react';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Icon,
  Input,
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
        <Popup trigger={<Button basic circular icon='trash alternate' negative floated='right'/>} content='Delete selected tag[s]' />
      </div>
    );
  };
};

class TagsWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Segment basic id='TagsWorkspaceSegmentScroll'>
          <p>Tags stuff goes here</p>
        </Segment>  
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