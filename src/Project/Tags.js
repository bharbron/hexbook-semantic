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

class TagsWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section active>Tags</Breadcrumb.Section>
        </Breadcrumb>
        <Divider hidden/>
          <Popup trigger={<Button primary content='Add Table' icon='add' labelPosition='left' />} content='Create a new table' />
          <Popup trigger={<Button content='Import' icon='download' />} content='Import table[s]' />
          <Popup trigger={<Button content='Export' icon='upload' />} content='Export selected table[s] to file or clipboard' />
          <Popup trigger={<Button basic circular icon='trash alternate' negative floated='right'/>} content='Delete selected table[s]' />
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
        <Segment tertiary id='TagsHelpSegment'>
          <h2>Tags</h2>
        </Segment>
      </div>
    )
  };
}

export { TagsWorkspace, TagsHelp };