import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu
} from 'semantic-ui-react';
import { HomeWorkspace, HomeMenu, HomeControls } from './Home'
import { HexesWorkspace, HexesMenu, HexesControls } from './Project/Hexes'
import { TagsWorkspace, TagsMenu, TagsControls } from './Project/Tags'
import { TablesWorkspace, TablesMenu, TablesControls } from './Project/Tables'
import { TemplatesWorkspace, TemplatesMenu, TemplatesControls } from './Project/Templates'
import { BooksWorkspace, BooksMenu, BooksControls } from './Project/Books'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Grid padded id='AppGrid'>
            <Grid.Row id='AppGridRow'>
              <Grid.Column />
              <Grid.Column width={14} id='AppGridRowColum'>
                <Route exact path='/' component={HomeWorkspace} />
                <Route exact path='/Project/Hexes' component={HexesWorkspace} />
                <Route exact path='/Project/Tags' component={TagsWorkspace} />
                <Route exact path='/Project/Tables' component={TablesWorkspace} />
                <Route exact path='/Project/Templates' component={TemplatesWorkspace} />
                <Route exact path='/Project/Books' component={BooksWorkspace} />
              </Grid.Column>
              <Grid.Column />
            </Grid.Row>
          </Grid>

          <Menu secondary pointing color='red' size='large' fixed='left' vertical style={{ width: '14rem' }}>
            <Menu.Item as={Link} to='/' id='AppMenuItemHexpop'>
              <Header as='h2' textAlign='center' icon inverted color='grey'>
                <Icon name='cubes' />
                HexPop!
              </Header>
            </Menu.Item>
            <Route exact path='/' component={HomeMenu} />
            <Route exact path='/Project/Hexes' component={HexesMenu} />
            <Route exact path='/Project/Tags' component={TagsMenu} />
            <Route exact path='/Project/Tables' component={TablesMenu} />
            <Route exact path='/Project/Templates' component={TemplatesMenu} />
            <Route exact path='/Project/Books' component={BooksMenu} />
            <Divider />
              <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE]]</span> Randomly roll on table CODE and insert result here</List.Item>
              <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE:+tag1,-tag2]]</span> Add tag1 to the filter, remove tag2, roll on CODE, insert result</List.Item>
              <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE:-ALL,+tag1]]</span> Remove all tags from the filter, add tag1, roll on CODE, insert result</List.Item>
          </Menu>
        
        <Route exact path='/' component={HomeControls} />
        <Route exact path='/Project/Hexes' component={HexesControls} />
        <Route exact path='/Project/Tags' component={TagsControls} />
        <Route exact path='/Project/Tables' component={TablesControls} />
        <Route exact path='/Project/Templates' component={TemplatesControls} />
        <Route exact path='/Project/Books' component={BooksControls} />

        </div>
      </Router>
    );
  }
}

export default App;
