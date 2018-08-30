import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Divider,
  Icon,
  Input,
  Popup,
  Segment,
  Table
} from 'semantic-ui-react';
import './Hexes.css';

class HexesControls extends Component {
  render() {
    return (
      <div id='HexesControls'>
        <Popup trigger={<Button primary content='Import' icon='download' />} content='Import hexes from file or clipboard' />
        <Popup trigger={<Button icon='upload' />} content='Export hexes to file or clipboard' />
        <Input icon={<Icon name='plus' inverted circular link />} placeholder='Coordinate, terrain, territory' style={{ width: '40%' }} />
        <Popup trigger={<Button basic circular icon='trash alternate' negative floated='right'/>} content='Delete all hexes' />
      </div>
    );
  };
};

class HexesWorkspace extends Component {
  render() {
    return (
      <div id='HexesWorkspace'>
        <Table selectable compact striped fixed singleLine>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Coordinates</Table.HeaderCell>
              <Table.HeaderCell>Terrain</Table.HeaderCell>
              <Table.HeaderCell>Territory</Table.HeaderCell>
              <Table.HeaderCell>Override</Table.HeaderCell>
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

class HexesHelp extends Component {
  render() {
    return (
      <div id='HexesHelp'>
        <h2>Hexes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    );
  };
};

export { HexesControls, HexesWorkspace, HexesHelp };