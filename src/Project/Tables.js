import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  Form,
  Header,
  Icon,
  Input,
  Label,
  Menu,
  Popup,
  Radio,
  Segment,
  Tab,
  TextArea
} from 'semantic-ui-react';
import './Tables.css';

class TablesWorkspace extends Component {
  render() {
    return (
      <div id='TablesWorkspace'>
        <Card.Group>
          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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

          <Card link>
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
      </div>
    );
  };
};

class TablesMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to='/project/hexes'><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to='/project/tags'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to='/project/tables' active='true'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to='/project/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to='/project/books'><Icon name='book' />Books</Menu.Item>
      </div>
    );
  };
};

class TablesControls extends Component {
  render() {
    return (
      <div>
        <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '1rem' }} >
            <Dropdown.Menu direction='left'>
              <Dropdown.Item icon='download' text='Import' />
              <Dropdown.Item icon='upload' text='Export' />
              <Dropdown.Item icon='trash alternate' text='Clear Items' />
            </Dropdown.Menu>
          </Dropdown>
        <Button circular color='google plus' size='massive' icon='pencil' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
      </div>
    );
  };
};

export { TablesWorkspace, TablesMenu, TablesControls };
