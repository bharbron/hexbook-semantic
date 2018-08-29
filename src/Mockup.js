import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Label,
  List,
  Menu,
  Segment,
  TextArea
} from 'semantic-ui-react';
import { Home, HomeHelp } from './Home';
import { Workspace, WorkspaceControls } from './Project';
import { HexesHelp } from './Project/Hexes'
import { TagsHelp } from './Project/Tags'
import { TablesHelp } from './Project/Tables'
import { TemplatesHelp } from './Project/Templates'
import { BooksHelp } from './Project/Books'
import './Mockup.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>

          <Grid padded id='AppGrid'>
            <Grid.Row id='AppGridRowWorkspace'>
              <Grid.Column width='10' id='AppGridLeftWorkspace'>
                <Segment basic style={{ height: '100%', overflow: 'auto' }}>
                <Segment>
  <div>
    <Segment vertical><Label circular>10</Label> Te eum [[DOMING]] eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. Te eum doming eirmod, nominati pertinacia argumentum ad his. <List> <Label tag>grassland</Label><Label tag invertedl>forest</Label></List></Segment>
    <Segment vertical>Pellentesque habitant morbi tristique senectus.</Segment>
    <Segment vertical>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</Segment>
  </div>
  </Segment>
                  <Card.Group itemsPerRow='1'>
                    <Card>
                      <Card.Content>
                        <Card.Header>Random Encounters</Card.Header>
                        <Card.Meta>ENCOUNTERS</Card.Meta>
                        <Card.Description>Table for any case where an encounter or NPC needs to be chosen at random.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>50</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Treasure</Card.Header>
                        <Card.Meta>TREASURE</Card.Meta>
                        <Card.Description>List of random valuable items.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>12</Label>
                          <Label color='grey'>Static</Label>
                          <Label color='green'>Generator</Label>
                          <Label color='blue'>Desired<Label.Detail>50</Label.Detail></Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Magic Iterms</Card.Header>
                        <Card.Meta>MAGIC_ITEMS</Card.Meta>
                        <Card.Description>Items that hold some kind of magic power.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>10</Label>
                          <Label color='grey'>Static</Label>
                          <Label color='green'>Generator</Label>
                          <Label color='blue'>Desired<Label.Detail>40</Label.Detail></Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Header>Random Foobar</Card.Header>
                        <Card.Meta>FOOBAR</Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Label.Group>
                          <Label circular>15</Label>
                        </Label.Group>
                      </Card.Content>
                    </Card>

                  </Card.Group> 
                </Segment>
              </Grid.Column>
              <Grid.Column width='6' id='AppGridRightWorkspace'>
                <Menu pointing id='buttonmenu'>
                  <Menu.Item color='blue' icon='plus' active='true' />
                  <Menu.Item icon='code' />
                  <Menu.Item icon='download' />
                  <Menu.Item icon='upload' />
                </Menu>
                <Segment style={{ maxHeight: 'calc(100% - 5rem)', overflow: 'auto' }}>
                  <Header as='h1'>Add Table</Header>
                  <Form>
                    <Form.Field>
                      <label>Name</label>
                      <input placeholder='Name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Reference Code</label>
                      <input placeholder='CODE' />
                    </Form.Field>
                    <Form.Field control={TextArea} label='Description' placeholder='Describe the purpose of this table...' />
                    <Form.Field>
                      <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button primary type='submit'>Add</Button>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Menu borderless compact fixed='left' inverted pointing icon='labeled' vertical>
            <Menu.Item as={Link} to='/' id='AppMenuItemHexpop'><Icon name='map marker alternate' />HexPop!</Menu.Item>
            <Divider inverted />
            <Menu.Item as={Link} to='/project/hexes'><Icon name='globe' />Hexes</Menu.Item>
            <Menu.Item as={Link} to='/project/tags'><Icon name='tags' />Tags</Menu.Item>
            <Menu.Item as={Link} to='/project/tables' active='true'><Icon name='list' />Tables</Menu.Item>
            <Menu.Item as={Link} to='/project/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
            <Menu.Item as={Link} to='/project/books'><Icon name='book' />Books</Menu.Item>
          </Menu>

        </div>
      </Router>
    );
  }
}

export default App;
