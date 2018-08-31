import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  Menu,
  Segment
} from 'semantic-ui-react';

import './Mockup.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Grid padded id='AppGrid'>
            <Grid.Row id='AppGridRow'>
              <Grid.Column />
              <Grid.Column width={14} color='teal' id='AppGridRowColum'>
              <Card.Group centered>
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
                <Label color='olive'>Generator<Label.Detail>50</Label.Detail></Label>
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
                <Label color='olive'>Generator<Label.Detail>40</Label.Detail></Label>
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
                <Label color='olive'>Generator<Label.Detail>30</Label.Detail></Label>
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
            <Menu.Item as={Link} to='/project/hexes'><Icon name='cube' />Hexes</Menu.Item>
            <Menu.Item as={Link} to='/project/tags'><Icon name='tags' />Tags</Menu.Item>
            <Menu.Item as={Link} to='/project/tables' active='true'><Icon name='list' />Tables</Menu.Item>
            <Menu.Item as={Link} to='/project/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
            <Menu.Item as={Link} to='/project/books'><Icon name='book' />Books</Menu.Item>
          </Menu>
        
        <Button circular color='google plus' size='massive' icon='pencil' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />

        </div>
      </Router>
    );
  }
}

export default App;
