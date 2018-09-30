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
import {HexEditModal} from '../components/hex'
import {HexDefinitionSegment, HexMapSegment} from '../components/hexes'
import {REGEX} from '../constants/regex'
import {getHexes, getHexDefinitions, getByIdHexes} from '../selectors/hexes'

import { 
  addHexDefinition, 
  deleteHexDefinition, 
  addHex, 
  updateHexTags
} from '../actions/hexes'

import './containers.css';

const mapStateToProps = state => ({
  hexes: getHexes(state.entities),
  hexesById: getByIdHexes(state.entities),
  hexDefinitions: getHexDefinitions(state.entities),
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
    openHexEditModal: false,
    editingHexId: null
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

  handleClickHex = (id) => {
    /*
    A hex was clicked in the table. Let's open the hex edit modal
    id: The hex id
    */
    this.setState({
      openHexEditModal: true,
      editingHexId: id,
    })
  }

  handleClickAddToHexMapButton = () => {
    this.setState({openHexMapInputModal: true})
  }

  handleSubmitTag = (coordinates, terrain, territory) => {
    this.props.updateHexTags(coordinates, terrain, territory)
  }

  handleCloseHexEditModal = () => {
    this.setState({openHexEditModal: false})
  }

  handleSubmitHexEditModal = (hex) => {
    alert('handleSubmitHexEditModal')
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
            onClickHex={this.handleClickHex}
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
          <HexEditModal
            key={this.state.editingHexId} //This is IMPORTANT! https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
            header={this.state.editingHexId+ ' > Edit Hex'}
            hex={this.props.hexesById[this.state.editingHexId]}
            open={this.state.openHexEditModal}
            onClose={this.handleCloseHexEditModal}
            onSubmit={this.handleSubmitHexEditModal}
          />
        </WideColumnWorkspace>
        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddToHexMapButton} /> 
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HexesWorkspace)
