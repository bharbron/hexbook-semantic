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
  List,
  Menu,
  Modal,
  Popup,
  Segment,
  Table,
  Tab,
  TextArea
} from 'semantic-ui-react';
import './Hexes.css';

class HexesWorkspace extends Component {
  render() {
    return (
      <div id='HexesWorkspace'>
        <Segment.Group>
          <Segment>
            <Header content='Hex Definition' subheader='What information should be randomly generated for each hex.' />
          </Segment>
          <Segment>
            <List bulleted size='large'>
              <List.Item>Lorem ipsum [[DOLLAR]] sit amet, consectetur <Icon link name='minus circle' color='grey' /></List.Item>
              <List.Item>[[CONSECTETUR]] adipiscing elit <Icon link name='minus circle' color='grey' /></List.Item>
              <List.Item>sed do eiusmod [[TEMPOR]] incididunt <Icon link name='minus circle' color='grey' /></List.Item>
            </List>
            <Modal size='small' dimmer='inverted' centered={false} trigger={<Icon link name='plus circle' size='large' color='grey' />}>
              <Modal.Header>New Hex Definition</Modal.Header>
              <Modal.Actions>
                <Input fluid placeholder='Lorem ipsum [[DOLOR]] sit amet' action={<Button color='green'>Add</Button>} />
              </Modal.Actions>
            </Modal>
          </Segment>
          <Segment>
            <Label color='grey'>[[]]<Label.Detail>HEX</Label.Detail></Label>
          </Segment>
          <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import definition ...' />
              <Dropdown.Item text='Export definition ...' />
            </Dropdown.Menu>
          </Dropdown>
        </Segment.Group>

        <Segment>
          <Header content='Hex Map' subheader='Mapping of hex coordinates to terrain and territory' />
          <Table selectable compact='very' striped fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell style={{ width: '3rem' }}><Checkbox /></Table.HeaderCell>
                <Table.HeaderCell>Coordinates</Table.HeaderCell>
                <Table.HeaderCell>Terrain</Table.HeaderCell>
                <Table.HeaderCell>Territory</Table.HeaderCell>
                <Table.HeaderCell>Override Definition</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0102</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0103</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox checked /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0104</Table.Cell>
                <Table.Cell>garden</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0105</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>pale</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0106</Table.Cell>
                <Table.Cell>mountain</Table.Cell>
                <Table.Cell>pale</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0107</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>red</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0108</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell><Input fluid /></Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0110</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>red</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0201</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>colorless</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0202</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>colorless</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0203</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Checkbox /></Table.Cell>
                <Table.Cell>0101</Table.Cell>
                <Table.Cell>forest</Table.Cell>
                <Table.Cell>hearts</Table.Cell>
                <Table.Cell><Checkbox /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import hex[es] ...' />
              <Dropdown.Item text='Export hexes ...' />
              <Dropdown.Item text='Edit selected hex[es] ...' />
              <Dropdown.Item text='Delete selected hex[es]' />
            </Dropdown.Menu>
          </Dropdown>
        </Segment>
      </div>
    );
  };
};

class HexesMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to='/project/hexes' active={true}><Icon name='cube' />Hexes</Menu.Item>
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
        <Modal
          size='tiny'
          centered={false}
          closeIcon
          closeOnDimmerClick={false}
          dimmer='inverted'
          trigger={
            <Button
              circular
              color='google plus'
              size='massive'
              icon='plus'
              style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
            />
          }
        >
          <Modal.Content>
            <Form>
              <Header content='Add New Hex[es]' subheader='Enter one hex per line, all lowercase, no spaces' />
              <label style={{ fontFamily: 'courier' }}>coordinate,terrain,territory</label>
              <TextArea autoHeight style={{ minHeight: '20rem', fontFamily: 'courier' }} />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button>Cancel</Button>
            <Button color='green'>Add</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  };
};

export { HexesWorkspace, HexesMenu, HexesControls };
