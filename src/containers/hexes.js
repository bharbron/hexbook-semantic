import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Checkbox,
  Header,
  Icon,
  Segment,
  Table,
  Transition
} from 'semantic-ui-react';
import {WideColumnWorkspace} from '../components/workspaces'
import {FloatingActionButton} from '../components/floatingcontrols'
import {TextAreaInputModal} from '../components/modals'
import {HexDefinitionSegment, HexMapSegment} from '../components/hexes'
import {REGEX} from '../constants/regex'
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
  state = {
    openHexMapInputModal: false,
  }

  handleSubmitHexDefinitionInput = (value) => {
    this.props.addHexDefinition(value)
  }

  handleClickDeleteHexDefinition = (id) => {
    this.props.deleteHexDefinition(id)
  }

  handleSubmitHexInput = (value) => {
    //split into coordinate,terrain,territory
    let [newCoordinates, newTerrain, newTerritory] = value.split(',')
    if (!newCoordinates || newCoordinates.match(REGEX.EMPTY) || !newCoordinates.match(REGEX.HEX_MAP_COORDINATES)) {
      //can't have a hex with invalid coordinates, so do nothing
      return
    }
    newCoordinates = newCoordinates.toUpperCase()
    newTerrain = newTerrain && newTerrain.match(REGEX.HEX_MAP_TERRAIN) ? newTerrain : undefined
    newTerritory = newTerritory && newTerritory.match(REGEX.HEX_MAP_TERRITORY) ? newTerritory : undefined
    this.props.addHex(newCoordinates, newTerrain, newTerritory)
  }

  handleCloseHexMapInputModal = () => {
    this.setState({openHexMapInputModal: false})
  }

  handleSubmitHexMapInputModal = (value) => {
    this.setState({openHexMapInputModal: false})
    const lines = value.split('\n')
    lines.map(
      line => {
        let [newCoordinates, newTerrain, newTerritory] = line.split(',')
        if (!newCoordinates || newCoordinates.match(REGEX.EMPTY) || !newCoordinates.match(REGEX.HEX_MAP_COORDINATES)) {
          //can't have a hex with invalid coordinates, so do nothing
          return false
        }
        newCoordinates = newCoordinates.toUpperCase()
        newTerrain = newTerrain && newTerrain.match(REGEX.HEX_MAP_TERRAIN) ? newTerrain : undefined
        newTerritory = newTerritory && newTerritory.match(REGEX.HEX_MAP_TERRITORY) ? newTerritory : undefined
        this.props.addHex(newCoordinates, newTerrain, newTerritory)
        return true
      }
    )
  }

  handleClickAddToHexMapButton = () => {
    this.setState({openHexMapInputModal: true})
  }

  handleSubmitTag = (coordinates, terrain, territory) => {
    this.props.updateHexTags(coordinates, terrain, territory)
  }

  render() {
    return (
      <div id='HexesWorkspace'>
        <WideColumnWorkspace>
          <HexDefinitionSegment
            hexDefinitions={this.props.hexDefinitions}
            onSubmit={this.handleSubmitHexDefinitionInput}
            onDelete={this.handleClickDeleteHexDefinition}
          />
          <HexMapSegment 
            hexes={this.props.hexes}
            onSubmit={this.handleSubmitHexInput} 
          />
          <Transition transitionOnMount='true' animation='fade up'>
            <Segment>
              <Header content='Hex Map' subheader='Mapping of map coordinates to terrain and territory' />
              <Table basic='very' compact='very' fixed singleLine>
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
                    <Table.Cell>0103</Table.Cell>
                    <Table.Cell>forest</Table.Cell>
                    <Table.Cell>hearts</Table.Cell>
                    <Table.Cell><Icon color='yellow' name='flag' /> sed do eiusmod [[TEMPOR]] incididunt</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>
          </Transition>
          <TextAreaInputModal
            header='Add to Hex Map'
            subheader='One hex per line, no spaces, all lowercase' 
            placeholder='coordinate,terrain,territory'
            open={this.state.openHexMapInputModal}
            onClose={this.handleCloseHexMapInputModal}
            onSubmit={this.handleSubmitHexMapInputModal}
          />
        </WideColumnWorkspace>
        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddToHexMapButton} /> 
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HexesWorkspace)
