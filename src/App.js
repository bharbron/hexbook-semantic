import React, { Component } from 'react';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Grid,
  Icon,
  Input,
  Menu,
  Popup,
  Segment,
  Table
} from 'semantic-ui-react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div style={{ height: 'inherit' }}>

        <Grid padded style={{ height: 'inherit' }}>
          <Grid.Row style={{ marginLeft: '6.7rem', height: 'inherit' }}>
            <Grid.Column width='13' style={{ height: 'inherit' }}>
              <Breadcrumb>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section active>Tables</Breadcrumb.Section>
              </Breadcrumb>
              <Divider hidden/>
                <Popup trigger={<Button primary content='Add Table' icon='add' labelPosition='left' />} content='Create a new table' />
                <Popup trigger={<Button content='Import' icon='download' />} content='Import table[s]' />
                <Popup trigger={<Button content='Export' icon='upload' />} content='Export selected table[s] to file or clipboard' />
                <Popup trigger={<Button basic circular icon='trash alternate' negative floated='right'/>} content='Delete selected table[s]' />
              <Segment basic style={{ height: `calc(100% - 7.15rem)`, overflow: 'auto' }}>
                <Table selectable striped compact>
                  <Table.Header fullWidth>
                    <Table.Row>
                      <Table.HeaderCell collapsing><Checkbox /></Table.HeaderCell>
                      <Table.HeaderCell>Code</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Description</Table.HeaderCell>
                      <Table.HeaderCell>Static</Table.HeaderCell>
                      <Table.HeaderCell>No. of Entries</Table.HeaderCell>
                      <Table.HeaderCell>Generator</Table.HeaderCell>
                      <Table.HeaderCell>Desired #</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>ENCOUNTERS</Table.Cell>
                      <Table.Cell>Random Encounters</Table.Cell>
                      <Table.Cell>Table for any case where an encounter or NPC needs to be chosen at random.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>50</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>TREASURE</Table.Cell>
                      <Table.Cell>Treasures</Table.Cell>
                      <Table.Cell>List of random valuable items.</Table.Cell>
                      <Table.Cell>✔︎</Table.Cell>
                      <Table.Cell>12</Table.Cell>
                      <Table.Cell>✔︎</Table.Cell>
                      <Table.Cell>100</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>MAGIC_ITEMS</Table.Cell>
                      <Table.Cell>Magic Items</Table.Cell>
                      <Table.Cell>Items that hold some kind of magic power.</Table.Cell>
                      <Table.Cell>✔︎</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>✔︎</Table.Cell>
                      <Table.Cell>40</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell><Input fluid /></Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing><Checkbox /></Table.Cell>
                      <Table.Cell>FOOBAR</Table.Cell>
                      <Table.Cell>Foobar</Table.Cell>
                      <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>15</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column width='3' stretched>
              <Segment tertiary style={{ overflow: 'auto' }}>
                <h2>Random Tables</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Code</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Static</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>No. of Entries</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Generator</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Desired #</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Menu borderless compact fixed='left' inverted pointing icon='labeled' vertical>
          <Menu.Item style={{ marginTop: '1rem' }}><Icon name='map marker alternate' />HexPop!</Menu.Item>
          <Divider inverted />
          <Menu.Item as='a'><Icon name='tags' />Tags</Menu.Item>
          <Menu.Item as='a' active='true'><Icon name='list' />Tables</Menu.Item>
          <Menu.Item as='a'><Icon name='puzzle piece' />Templates</Menu.Item>
          <Menu.Item as='a'><Icon name='globe' />Hexes</Menu.Item>
          <Menu.Item as='a'><Icon name='book' />Books</Menu.Item>
        </Menu>

      </div>
    )
  };
}

export default App