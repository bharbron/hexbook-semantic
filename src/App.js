import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Label,
  Menu,
  Segment
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

          <Menu borderless fixed='left' inverted pointing vertical style={{ width: '12rem' }}>
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
