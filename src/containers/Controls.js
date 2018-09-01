import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HexesControls from './Hexes/Controls'
import TagsControls from './Tags/Controls'
import TablesControls from './Tables/Controls'
import TemplatesControls from './Templates/Controls'
import BooksControls from './Books/Controls'
import routes from '../constants/routes.json'

import './containers.css';

class Controls extends Component {
  render() {
    return (
      <div id='Controls'>
        <Route exact path={routes.HEXES} component={HexesControls} />
        <Route exact path={routes.TAGS} component={TagsControls} />
        <Route exact path={routes.TABLES} component={TablesControls} />
        <Route exact path={routes.TEMPLATES} component={TemplatesControls} />
        <Route exact path={routes.BOOKS} component={BooksControls} />
      </div>
    )
  }
}

export default Controls