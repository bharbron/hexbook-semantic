import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Segment
} from 'semantic-ui-react';
import {TablesHelp} from './Project/Tables'
import './Help.css';

class Help extends Component {
  render() {
    return (
      <div id='Help'>
        <Segment tertiary id='HelpSegment'>
          <Route exact path='/project/tables' component={TablesHelp} />
        </Segment>
      </div>
    );
  };
};

export { Help };