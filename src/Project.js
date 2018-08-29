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
import { HexesControls, HexesWorkspace } from './Project/Hexes'
import { TablesControls, TablesWorkspace } from './Project/Tables';
import { TagsControls, TagsWorkspace } from './Project/Tags';
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
          <Route exact path='/project/hexes' component={HexesControls} />
          <Route exact path='/project/tags' component={TagsControls} />
          <Route exact path='/project/tables' component={TablesControls} />
        <Segment basic id='WorkspaceControlsSegmentScroll'>
          <Route exact path='/project/hexes' component={HexesWorkspace} />
          <Route exact path='/project/tags' component={TagsWorkspace} />
          <Route exact path='/project/tables' component={TablesWorkspace} />
        </Segment>  
      </div>
    );
  };
};

export { Workspace, WorkspaceControls };