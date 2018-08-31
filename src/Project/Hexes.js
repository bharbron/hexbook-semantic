import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  Icon,
  Input,
  Label,
  List,
  Menu,
  Popup,
  Segment,
  Table,
  Tab
} from 'semantic-ui-react';
import './Hexes.css';

class HexesWorkspace extends Component {
  render() {
    return (
      <div id='HexesWorkspace'>
        <Card.Group itemsPerRow='2' doubling>
          <Card raised>
            <Card.Content>
              <Card.Header>Hex Definition</Card.Header>
              <Card.Meta>What information should be randomly generated for each hex.</Card.Meta>
            </Card.Content>
            <Card.Content description>
              <List bulleted size='large'>
                <List.Item>Lorem ipsum [[DOLLAR]] sit amet, consectetur <Icon link name='minus circle' color='grey' /></List.Item>
                <List.Item>[[CONSECTETUR]] adipiscing elit <Icon link name='minus circle' color='grey' /></List.Item>
                <List.Item>sed do eiusmod [[TEMPOR]] incididunt <Icon link name='minus circle' color='grey' /></List.Item>
              </List>
              <Icon link name='plus circle' size='large' color='grey' />
            </Card.Content>
            <Card.Content extra>
              <Label color='grey'>[[]]<Label.Detail>HEX</Label.Detail></Label>
            </Card.Content>
            <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Dropdown.Menu direction='left'>
                <Dropdown.Item text='Import' />
                <Dropdown.Item text='Export' />
              </Dropdown.Menu>
            </Dropdown>
          </Card>
        </Card.Group>

        <Table selectable compact='very' color='olive' striped fixed singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Coordinates</Table.HeaderCell>
              <Table.HeaderCell>Terrain</Table.HeaderCell>
              <Table.HeaderCell>Territory</Table.HeaderCell>
              <Table.HeaderCell>Override Definition</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0102</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0103</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox checked /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0104</Table.Cell>
              <Table.Cell>garden</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0105</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>pale</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0106</Table.Cell>
              <Table.Cell>mountain</Table.Cell>
              <Table.Cell>pale</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0107</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>red</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0108</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell><Input fluid /></Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0110</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>red</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0201</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>colorless</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0202</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>colorless</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0203</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0101</Table.Cell>
              <Table.Cell>forest</Table.Cell>
              <Table.Cell>hearts</Table.Cell>
              <Table.Cell><Checkbox /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  };
};

class HexesMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to='/project/hexes' active='true'><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to='/project/tags'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to='/project/tables'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to='/project/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to='/project/books'><Icon name='book' />Books</Menu.Item>
      </div>
    );
  };
};

class HexesControls extends Component {
  render() {
    return (
      <div>
        <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '2rem' }} >
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

export { HexesWorkspace, HexesMenu, HexesControls };
