import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from './constants/routes.json'

import {
  Transition,
} from 'semantic-ui-react';

import HomeWorkspace from './containers/Home'
import HexesWorkspace from './containers/Hexes'
import TagsWorkspace from './containers/Tags'
import TablesWorkspace from './containers/Tables'
import TemplatesWorkspace from './containers/Templates'
import BooksWorkspace from './containers/Books'

import AppMenu from './containers/AppMenu'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
      
        {/* Workspaces */}
        <Route exact path={routes.HOME} component={HomeWorkspace} />
        <Route exact path={routes.HEXES} component={HexesWorkspace} />
        <Route exact path={routes.TAGS} component={TagsWorkspace} />
        <Route exact path={routes.TABLES} component={TablesWorkspace} />
        <Route exact path={routes.TEMPLATES} component={TemplatesWorkspace} />
        <Route exact path={routes.BOOKS} component={BooksWorkspace} />

        {/* Menu */}
        <AppMenu />
      </div>
    );
  }
}

export default App;
