import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Grid
} from 'semantic-ui-react';
import HomeWorkspace from './Home/Workspace'
import HexesWorkspace from './Hexes/Workspace'
import TagsWorkspace from './Tags/Workspace'
import TablesWorkspace from './Tables/Workspace'
import TemplatesWorkspace from './Templates/Workspace'
import BooksWorkspace from './Books/Workspace'
import routes from '../constants/routes.json'
import { WideColumnWorkspace } from '../components/Workspaces'

import './containers.css'

class Workspace extends Component {
  render () {
    return (
      <WideColumnWorkspace>
            <Route exact path={routes.HOME} component={HomeWorkspace} />
            <Route exact path={routes.HEXES} component={HexesWorkspace} />
            <Route exact path={routes.TAGS} component={TagsWorkspace} />
            <Route exact path={routes.TABLES} component={TablesWorkspace} />
            <Route exact path={routes.TEMPLATES} component={TemplatesWorkspace} />
            <Route exact path={routes.BOOKS} component={BooksWorkspace} />
      </WideColumnWorkspace>
    )
  }
}

export default Workspace