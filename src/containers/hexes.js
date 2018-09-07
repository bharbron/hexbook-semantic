import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Header,
  Icon,
  Input,
  Label,
  List,
  Modal,
  Segment,
  Table,
  Transition
} from 'semantic-ui-react';
import { WideColumnWorkspace } from '../components/workspaces'
import { SingleLineAdder } from '../components/forms'
import { FloatingActionButton } from '../components/floatingcontrols'
import { TextAreaInputModal } from '../components/modals'
import { ListWithDeletableItems } from '../components/lists'
import { DirectInputTableCell } from '../components/tables'

import { 
  addHexDetail, 
  deleteHexDetail, 
  addHex, 
  updateHexTags,
  updateHexCoordinates
} from '../actions/hexes'

import './containers.css';

const mapStateToProps = state => ({
  tables: state.entities.tables,
  entryDetails: state.entities.entryDetails,
  tableEntries: state.entities.tableEntries,
  tags: state.entities.tags,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addHexDetail,
  deleteHexDetail,
  addHex,
  updateHexTags,
  updateHexCoordinates
}, dispatch)

class HexesWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueHexDetailInput: '',
      openHexMapInputModal: false,
    };

    this.handleSubmitHexDetailInput = this.handleSubmitHexDetailInput.bind(this)
    this.handleCloseHexMapInputModal = this.handleCloseHexMapInputModal.bind(this)
    this.handleSubmitClickHexMapInputModal = this.handleSubmitClickHexMapInputModal.bind(this)
    this.handleClickAddToHexMapButton = this.handleClickAddToHexMapButton.bind(this)
    this.handleClickDeleteHexDetail = this.handleClickDeleteHexDetail.bind(this)
    this.handleSubmitHexInput = this.handleSubmitHexInput.bind(this)
    this.handleSubmitTerrain = this.handleSubmitTerrain.bind(this)
    this.handleSubmitTerritory = this.handleSubmitTerritory.bind(this)
    this.handleSubmitCoordinates = this.handleSubmitCoordinates.bind(this)
  };

  handleSubmitHexDetailInput(value) {
    this.props.addHexDetail(value)
  }

  handleClickDeleteHexDetail(id) {
    this.props.deleteHexDetail(id)
  }

  handleSubmitHexInput(value) {
    //split into coordinate,terrain,territory
    const hexLineRegEx = /^[a-zA-Z0-9]+$|^[a-zA-Z0-9]+,[a-z]*$|^[a-zA-Z0-9]+,[a-z]*,[a-z]*$/
    const hexTagRegEx = /^[a-z]+$/ 
    if ( value.match(hexLineRegEx) ) {
      let [coordinates, terrain, territory] = value.split(',')
      terrain = ( terrain.match(hexTagRegEx) ? terrain : null )
      territory = ( territory.match(hexTagRegEx) ? territory : null )
      this.props.addHex(coordinates, terrain, territory)
    }
  }

  handleCloseHexMapInputModal() {
    this.setState({openHexMapInputModal: false})
  };

  handleSubmitClickHexMapInputModal(value) {
    console.log(`handleSubmitClickHexMapInputModal: ${value}`)
    this.setState({openHexMapInputModal: false})
    const lines = value.split('\n')
    const hexLineRegEx = /^[a-zA-Z0-9]+$|^[a-zA-Z0-9]+,[a-z]*$|^[a-zA-Z0-9]+,[a-z]*,[a-z]*$/
    const hexTagRegEx = /^[a-z]+$/ 
    for (let i = 0; i < lines.length; i++) {
      if ( lines[i].match(hexLineRegEx) ) {
        let [coordinates, terrain, territory] = lines[i].split(',')
        terrain = ( terrain.match(hexTagRegEx) ? terrain : null )
        territory = ( territory.match(hexTagRegEx) ? territory : null )
        this.props.addHex(coordinates, terrain, territory)
      }
    }
  };

  handleClickAddToHexMapButton() {
    this.setState({openHexMapInputModal: true})
  };

  handleSubmitTerrain(coordinates, value) {
    const oldTerrain = this.props.tableEntries.byId[coordinates].addTags[0]
    const oldTerritory = this.props.tableEntries.byId[coordinates].addTags[1]
    const newTerrain = value
    const newTerritory = this.props.tableEntries.byId[coordinates].addTags[1]
    this.props.updateHexTags(coordinates, oldTerrain, oldTerritory, newTerrain, newTerritory)
  }

  handleSubmitTerritory(coordinates, value) {
    const oldTerrain = this.props.tableEntries.byId[coordinates].addTags[0]
    const oldTerritory = this.props.tableEntries.byId[coordinates].addTags[1]
    const newTerrain = this.props.tableEntries.byId[coordinates].addTags[0]
    const newTerritory = value
    this.props.updateHexTags(coordinates, oldTerrain, oldTerritory, newTerrain, newTerritory)
  }

  handleSubmitCoordinates(coordinates, value) {
    const oldCoordinates = coordinates
    const newCoordinates = value
    this.props.updateHexCoordinates(oldCoordinates, newCoordinates)
  }

  createHexDataTable(tables, tableEntries, tags, onSubmitCoordinates, onSubmitTerrain, onSubmitTerritory) {
    const rows = []
    for (let i = 0; i < tables.byId['HEX'].entries.length; i++) {
      const coordinates = tables.byId['HEX'].entries[i]
      const terrain = tableEntries.byId[coordinates].addTags[0]
      const territory = tableEntries.byId[coordinates].addTags[1]
      const override = ''
      rows.push(
        <Table.Row key={coordinates}>
          <Table.Cell><Checkbox /></Table.Cell>
          <DirectInputTableCell onSubmit={(value) => onSubmitCoordinates(coordinates, value)} content={ coordinates } />
          <DirectInputTableCell onSubmit={(value) => onSubmitTerrain(coordinates, value)} content={ terrain } />
          <DirectInputTableCell onSubmit={(value) => onSubmitTerritory(coordinates, value)} content={ territory } />
          <Table.Cell>{ override }</Table.Cell>
        </Table.Row>
      )
    }
    return rows
  }

  render() {
    return (
      <div id='HexesWorkspace'>
        <WideColumnWorkspace>

          <Transition transitionOnMount='true' animation='fade up'>
          <Segment.Group>
            <Segment>
              <Header content='Hex Definition' subheader='What details should be randomly generated for each hex.' />
            </Segment>
            <Segment>
              {/*}
              <List bulleted size='large'>
                <List.Item>Lorem ipsum [[DOLLAR]] sit amet, consectetur <Icon link name='minus circle' color='grey' /></List.Item>
                <List.Item>[[CONSECTETUR]] adipiscing elit <Icon link name='minus circle' color='grey' /></List.Item>
                <List.Item>sed do eiusmod [[TEMPOR]] incididunt <Icon link name='minus circle' color='grey' /></List.Item>
              </List>
              */}
              {/*
              <Transition.Group as={List} bulleted size='large'>
                { this.props.entryDetails.allIds.map((id) => <List.Item key={id}>{ this.props.entryDetails.byId[id].text } <Icon onClick={() => this.handleClickDeleteHexDetail(id)} link name='minus circle' color='grey' /></List.Item>) }
              </Transition.Group>
              */}
              <ListWithDeletableItems bulleted='true' items={ this.props.entryDetails.allIds.map((id) => ({key: id, content: this.props.entryDetails.byId[id].text, onClick: () => this.handleClickDeleteHexDetail(id) })) } />
              <SingleLineAdder
                onSubmit={this.handleSubmitHexDetailInput}
                name='hex_definition'
                placeholder='Enter [[NEW]] hex detail...'
              />
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
          </Transition>

          <Transition transitionOnMount='true' animation='fade up'>
          <Segment>
            <Header content='Hex Map' subheader='Mapping of hex coordinates to terrain and territory' />
            <Table selectable compact='very' striped fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{ width: '3rem' }}><Checkbox /></Table.HeaderCell>
                  <Table.HeaderCell>Coordinates</Table.HeaderCell>
                  <Table.HeaderCell>Terrain</Table.HeaderCell>
                  <Table.HeaderCell>Territory</Table.HeaderCell>
                  <Table.HeaderCell>Definition Override</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0101</Table.Cell>
                  <DirectInputTableCell content='forest' />
                  <Table.Cell>hearts</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0102</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>hearts</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0103</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>hearts</Table.Cell>
                  <Table.Cell><Icon color='yellow' name='flag' /> sed do eiusmod [[TEMPOR]] incididunt</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

            <Table selectable compact='very' striped fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{ width: '3rem' }}><Checkbox /></Table.HeaderCell>
                  <Table.HeaderCell>Coordinates</Table.HeaderCell>
                  <Table.HeaderCell>Terrain</Table.HeaderCell>
                  <Table.HeaderCell>Territory</Table.HeaderCell>
                  <Table.HeaderCell>Definition Override</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Transition.Group as={Table.Body}>
              { this.createHexDataTable(
                  this.props.tables, 
                  this.props.tableEntries, 
                  this.props.tags, 
                  this.handleSubmitCoordinates, 
                  this.handleSubmitTerrain, 
                  this.handleSubmitTerritory
                ) 
              }
              </Transition.Group>
            </Table>

            <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Dropdown.Menu direction='left'>
                <Dropdown.Item text='Import hex[es] ...' />
                <Dropdown.Item text='Export hexes ...' />
                <Dropdown.Item text='Edit selected hex[es] ...' />
                <Dropdown.Item text='Delete selected hex[es]' />
              </Dropdown.Menu>
            </Dropdown>
            <SingleLineAdder
              name='hex'
              placeholder='coordinate,terrain,territory'
              onSubmit={this.handleSubmitHexInput}
            />
          </Segment>
          </Transition>

          <TextAreaInputModal
            header='Add to Hex Map'
            subheader='One hex per line, no spaces, all lowercase' 
            placeholder='coordinate,terrain,territory'
            open={this.state.openHexMapInputModal}
            onClose={this.handleCloseHexMapInputModal}
            onSubmit={this.handleSubmitClickHexMapInputModal}
          />

        </WideColumnWorkspace>

        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddToHexMapButton} />
        
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HexesWorkspace)
