import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
import { TablesWorkspace } from './Project/Tables'
import './Project.css';

class Workspace extends Component {
  render() {
    return (
      <div id='Workspace'>
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section active>Tables</Breadcrumb.Section>
        </Breadcrumb>
        <Segment basic id='WorkspaceSegmentScroll'>
        </Segment>  
      </div>
    );
  };
};

class WorkspaceControls extends Component {
  render() {
    return (
      <div id='WorkspaceControls'>
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section active>Tables</Breadcrumb.Section>
        </Breadcrumb>
        <Divider hidden/>
          <Popup trigger={<Button primary content='Add Table' icon='add' labelPosition='left' />} content='Create a new table' />
          <Popup trigger={<Button content='Import' icon='download' />} content='Import table[s]' />
          <Popup trigger={<Button content='Export' icon='upload' />} content='Export selected table[s] to file or clipboard' />
          <Popup trigger={<Button basic circular icon='trash alternate' negative floated='right'/>} content='Delete selected table[s]' />
        <Segment basic id='WorkspaceControlsSegmentScroll'>
          <Route exact path='/project/tables' component={TablesWorkspace} />
        </Segment>  
      </div>
    );
  };
};

export { Workspace, WorkspaceControls };