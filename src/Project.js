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
import { HexesLeftWorkspace, HexesRightWorkspace } from './Project/Hexes'
import { TablesLeftWorkspace, TablesRightWorkspace } from './Project/Tables';
import { TagsLeftWorkspace, TagsRightWorkspace } from './Project/Tags';
import { TemplatesLeftWorkspace, TemplatesRightWorkspace } from './Project/Templates';
import { BooksLeftWorkspace, BooksRightWorkspace } from './Project/Books';
import './Project.css';

class LeftWorkspace extends Component {
  render() {
    return (
      <Segment basic id='ProjectLeftWorkspace'>
        <Route exact path='/project/hexes' component={HexesLeftWorkspace} />
        <Route exact path='/project/tags' component={TagsLeftWorkspace} />
        <Route exact path='/project/tables' component={TablesLeftWorkspace} />
        <Route exact path='/project/templates' component={TemplatesLeftWorkspace} />
        <Route exact path='/project/books' component={BooksLeftWorkspace} /> 
      </Segment>
    );
  };
};

class RightWorkspace extends Component {
  render() {
    return (
      <div id='ProjectRightWorkspace'>
        <Route exact path='/project/hexes' component={HexesRightWorkspace} />
        <Route exact path='/project/tags' component={TagsRightWorkspace} />
        <Route exact path='/project/tables' component={TablesRightWorkspace} />
        <Route exact path='/project/templates' component={TemplatesRightWorkspace} />
        <Route exact path='/project/books' component={BooksRightWorkspace} />
      </div>
    );
  };
};

export { LeftWorkspace, RightWorkspace };