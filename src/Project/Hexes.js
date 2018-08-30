import React, { Component } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Icon,
  Input,
  Label,
  List,
  Popup,
  Segment,
  Table,
  Tab
} from 'semantic-ui-react';
import './Hexes.css';

class HexesLeftWorkspace extends Component {
  render() {
    return (
      <div id='HexesLeftWorkspace'>
        <Card fluid>
          <Card.Content header='Hex Contents' meta='Definition of what information should be randomly generated for each hex.' />
          <Card.Content description>
            <List bulleted>
              <List.Item>Lorem ipsum [[DOLLAR]] sit amet, consectetur</List.Item>
              <List.Item>[[CONSECTETUR]] adipiscing elit</List.Item>
              <List.Item>sed do eiusmod [[TEMPOR]] incididunt</List.Item>
            </List>
          </Card.Content>
          <Card.Content extra>
            <Label color='grey'>[[]]<Label.Detail>HEX</Label.Detail></Label>
          </Card.Content>
        </Card>

        <Table selectable compact='very' color='olive' striped fixed singleLine>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Coordinates</Table.HeaderCell>
              <Table.HeaderCell>Terrain</Table.HeaderCell>
              <Table.HeaderCell>Territory</Table.HeaderCell>
              <Table.HeaderCell>Override Contents</Table.HeaderCell>
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

class HexesRightWorkspace extends Component {
  render() {
    const plusContent = 'Tab 1 Content'

    const helpContent = 
      <div>
        <h2>Hexes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    const panes = [
      { menuItem: { icon: 'plus' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>{plusContent}</Tab.Pane> },
      { menuItem: { icon: 'code' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>Tab 2 Content</Tab.Pane> },
      { menuItem: { icon: 'download' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>Tab 3 Content</Tab.Pane> },
      { menuItem: { icon: 'upload' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>Tab 4 Content</Tab.Pane> },
      { menuItem: { icon: 'help' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>{helpContent}</Tab.Pane> },
    ];

    return (
      <Tab menu={{ pointing: true }} panes={panes} className='workspace_tab'/>
    );
  };
};

export { HexesLeftWorkspace, HexesRightWorkspace };
