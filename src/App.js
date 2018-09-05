import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from './constants/routes.json'

import {
  Transition,
} from 'semantic-ui-react';

import HomeWorkspace from './containers/home'
import HexesWorkspace from './containers/hexes'
import TagsWorkspace from './containers/tags'
import TablesWorkspace from './containers/tables'
import TemplatesWorkspace from './containers/templates'
import BooksWorkspace from './containers/books'

import AppMenu from './containers/appmenu'

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
