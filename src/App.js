import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Menu,
  Popup,
  Rail,
  Sidebar,
  Segment,
  Sticky,
  Table
} from 'semantic-ui-react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
      <Grid padded columns='equal' style={{ height: '100%' }}>



        <Grid.Row>
          <Grid.Column floated='left' style={{ marginLeft: '11.5rem'}}>
            <Grid.Row>
              <Segment basic>
              <Popup trigger={<Button icon='add' primary/>} content='Add table' />
              <Popup trigger={<Button icon='download'/>} content='Import table[s]' />
              <Popup trigger={<Button icon='upload'/>} content='Export selected table[s]' />
              <Popup trigger={<Button icon='trash' negative floated='right'/>} content='Delete selected table[s]' />
              </Segment>
            </Grid.Row>
            <Grid.Row style={{ height: '92%' }}>
              <Grid.Column style={{ height: '100%' }}>
              <div style={{ height: '100%', 'overflow': 'auto', paddingRight: '0.7rem' }}>
              <Table selectable striped compact>
                <Table.Header fullWidth>
                  <Table.Row>
                    <Table.HeaderCell collapsing><Checkbox /></Table.HeaderCell>
                    <Table.HeaderCell>Code</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>ENCOUNTERS</Table.Cell>
                    <Table.Cell>Random Encounters</Table.Cell>
                    <Table.Cell>Table for any case where an encounter or NPC needs to be chosen at random.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>TREASURE</Table.Cell>
                    <Table.Cell>Treasures</Table.Cell>
                    <Table.Cell>List of random valuable items.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>MAGIC_ITEMS</Table.Cell>
                    <Table.Cell>Magic Items</Table.Cell>
                    <Table.Cell>Items that hold some kind of magic power.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing><Checkbox /></Table.Cell>
                    <Table.Cell>FOOBAR</Table.Cell>
                    <Table.Cell>Foobar</Table.Cell>
                    <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              </div>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column floated='right' width={3} style={{height: '100%'}}>
            <Segment tertiary style={{height: '100%', overflow: 'auto'}}>
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique. Nulla aliquet porttitor lacus luctus accumsan tortor posuere.</p>
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique. Nulla aliquet porttitor lacus luctus accumsan tortor posuere.</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>



            <Menu borderless compact fixed='left' inverted pointing icon='labeled' vertical>
              <Menu.Item>
                <h1>HexBook</h1>
              </Menu.Item>
              <Menu.Item as='a'><Icon name='book' />Books</Menu.Item>
              <Menu.Item as='a'><Icon name='map' />Map</Menu.Item>
              <Menu.Item as='a'><Icon name='th list' />Indexes</Menu.Item>
              <Menu.Item as='a' active='true'><Icon name='random' />Tables</Menu.Item>
              <Menu.Item as='a'><Icon name='tag' />Tags</Menu.Item>
            </Menu>
      </div>
    )
  };
}

export default App