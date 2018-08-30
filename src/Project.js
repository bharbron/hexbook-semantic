import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Icon,
  Input,
  Menu,
  Popup,
  Segment,
  Table
} from 'semantic-ui-react';
import { HexesWorkspace } from './Project/Hexes'
import { TablesLeftWorkspace, TablesRightWorkspace } from './Project/Tables';
import { TagsLeftWorkspace, TagsRightWorkspace } from './Project/Tags';
import { TemplatesWorkspace } from './Project/Templates';
import './Project.css';

class LeftWorkspace extends Component {
  render() {
    return (
      <Segment basic id='ProjectLeftWorkspaceSegment'>
        <Route exact path='/project/hexes' component={HexesWorkspace} />
        <Route exact path='/project/tags' component={TagsLeftWorkspace} />
        <Route exact path='/project/tables' component={TablesLeftWorkspace} />
        <Route exact path='/project/templates' component={TemplatesWorkspace} />
      </Segment>
    );
  };
};

class RightWorkspace extends Component {
  render() {
    return (
      <div id='ProjectRightWorkspace'>
        <Route exact path='/project/tags' component={TagsRightWorkspace} />
        <Route exact path='/project/tables' component={TablesRightWorkspace} />
      </div>
    );
  };
};

export { LeftWorkspace, RightWorkspace };