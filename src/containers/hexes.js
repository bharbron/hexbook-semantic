import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
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
import {WideColumnWorkspace} from '../components/workspaces'
import {SingleLineAdder} from '../components/forms'
import {FloatingActionButton} from '../components/floatingcontrols'
import {TextAreaInputModal} from '../components/modals'
import {ListWithDeletableItems} from '../components/lists'
import {DirectInputTableCell} from '../components/datatables'
import {HexDefinitionSegment} from '../components/hexes'
import {getHexes, getHexDefinitions} from '../selectors/hexes'

import { 
  addHexDefinition, 
  deleteHexDefinition, 
  addHex, 
  updateHexTags
} from '../actions/hexes'

import './containers.css';

const mapStateToProps = state => ({
  hexes: getHexes(state),
  hexDefinitions: getHexDefinitions(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addHexDefinition,
  deleteHexDefinition,
  addHex,
  updateHexTags,
}, dispatch)

class HexesWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueHexDefinitionInput: '',
      openHexMapInputModal: false,
    };

    this.handleSubmitHexDefinitionInput = this.handleSubmitHexDefinitionInput.bind(this)
    this.handleCloseHexMapInputModal = this.handleCloseHexMapInputModal.bind(this)
    this.handleSubmitClickHexMapInputModal = this.handleSubmitClickHexMapInputModal.bind(this)
    this.handleClickAddToHexMapButton = this.handleClickAddToHexMapButton.bind(this)
    this.handleClickDeleteHexDefinition = this.handleClickDeleteHexDefinition.bind(this)
    this.handleSubmitHexInput = this.handleSubmitHexInput.bind(this)
    this.handleSubmitTerrain = this.handleSubmitTerrain.bind(this)
    this.handleSubmitTerritory = this.handleSubmitTerritory.bind(this)
  };

  handleSubmitHexDefinitionInput(value) {
    console.log(`value: ${value}`)
    this.props.addHexDefinition(value)
  }

  handleClickDeleteHexDefinition(id) {
    console.log(`id: ${id}`)
    this.props.deleteHexDefinition(id)
  }

  handleSubmitHexInput(value) {
    //split into coordinate,terrain,territory
    const hexLineRegEx = /^[a-zA-Z0-9]+$|^[a-zA-Z0-9]+,[a-z]*$|^[a-zA-Z0-9]+,[a-z]*,[a-z]*$/
    const hexTagRegEx = /^[a-z]+$/ 
    if ( value.match(hexLineRegEx) ) {
      let [newCoordinates, newTerrain, newTerritory] = value.split(',')
      newTerrain = newTerrain && newTerrain.match(hexTagRegEx) ? newTerrain : undefined
      newTerritory = newTerritory && newTerritory.match(hexTagRegEx) ? newTerritory : undefined
      this.props.addHex(newCoordinates, newTerrain, newTerritory)
    }
  }

  handleCloseHexMapInputModal() {
    this.setState({openHexMapInputModal: false})
  };

  handleSubmitClickHexMapInputModal(value) {
    this.setState({openHexMapInputModal: false})
    const lines = value.split('\n')
    const hexLineRegEx = /^[a-zA-Z0-9]+$|^[a-zA-Z0-9]+,[a-z]*$|^[a-zA-Z0-9]+,[a-z]*,[a-z]*$/
    const hexTagRegEx = /^[a-z]+$/ 
    for (let i = 0; i < lines.length; i++) {
      if ( lines[i].match(hexLineRegEx) ) {
        let [newCoordinates, newTerrain, newTerritory] = lines[i].split(',')
      newTerrain = newTerrain && newTerrain.match(hexTagRegEx) ? newTerrain : undefined
      newTerritory = newTerritory && newTerritory.match(hexTagRegEx) ? newTerritory : undefined
      this.props.addHex(newCoordinates, newTerrain, newTerritory)
      }
    }
  };

  handleClickAddToHexMapButton() {
    this.setState({openHexMapInputModal: true})
  };

  handleSubmitTerrain(coordinates, value) {
    const newTerrain = value
    const newTerritory = this.props.tableEntries.byId[coordinates].addTags[1]
    this.props.updateHexTags(coordinates, newTerrain, newTerritory)
  }

  handleSubmitTerritory(coordinates, value) {
    const newTerrain = this.props.tableEntries.byId[coordinates].addTags[0]
    const newTerritory = value
    this.props.updateHexTags(coordinates, newTerrain, newTerritory)
  }

  createHexDataTable(hexes, onSubmitCoordinates, onSubmitTerrain, onSubmitTerritory) {
    const rows = []
    for (let i = 0; i < hexes.length; i++) {
      const coordinates = hexes[i].coordinates
      const terrain = hexes[i].terrain
      const territory = hexes[i].territory
      const override = ''
      rows.push(
        <Table.Row key={coordinates}>
          <Table.Cell><Checkbox /></Table.Cell>
          <Table.Cell>{coordinates}</Table.Cell>
          <DirectInputTableCell onSubmit={(value) => onSubmitTerrain(coordinates, value)} content={ terrain } />
          <DirectInputTableCell onSubmit={(value) => onSubmitTerritory(coordinates, value)} content={ territory } />
          <Table.Cell>{override}</Table.Cell>
        </Table.Row>
      )
    }
    return rows
  }

  render() {
    console.log(this.props.hexDefinitions)

    return (
      <div id='HexesWorkspace'>
        <WideColumnWorkspace>

          <HexDefinitionSegment
            hexDefinitions={this.props.hexDefinitions}
            onSubmitHexDefinition={this.handleSubmitHexDefinitionInput}
            onDeleteHexDefinition={this.handleClickDeleteHexDefinition}
          />

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
                  this.props.hexes, 
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
