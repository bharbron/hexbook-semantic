import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {WideColumnWorkspace} from '../components/workspaces'
import {FloatingActionButton} from '../components/floatingcontrols'
import {TextAreaInputModal} from '../components/modals'
import {HexEditModal} from '../components/hex'
import {HexDefinitionSegment, HexMapSegment} from '../components/hexes'
import {REGEX} from '../constants/regex'
import {getFullTableById} from '../selectors/tables'
import {getHexes, getHexDefinitions, getByIdHexes} from '../selectors/hexes'
import {addHexDefinition, deleteHexDefinition, addHex, updateHex} from '../actions/hexes'

import './containers.css';

const mapStateToProps = state => ({
  hexTable: getFullTableById(state, 'HEX'),
  hexes: getHexes(state),
  hexesById: getByIdHexes(state),
  hexDefinitions: getHexDefinitions(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addHexDefinition,
  deleteHexDefinition,
  addHex,
  updateHex,
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
    newTerrain = newTerrain && newTerrain.match(REGEX.HEX_MAP_TERRAIN) ? newTerrain.toLowerCase() : undefined
    newTerritory = newTerritory && newTerritory.match(REGEX.HEX_MAP_TERRITORY) ? newTerritory.toLowerCase() : undefined
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
        newTerrain = newTerrain && newTerrain.match(REGEX.HEX_MAP_TERRAIN) ? newTerrain.toLowerCase() : undefined
        newTerritory = newTerritory && newTerritory.match(REGEX.HEX_MAP_TERRITORY) ? newTerritory.toLowerCase() : undefined
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

  handleCloseHexEditModal = () => {
    this.setState({openHexEditModal: false})
  }

  handleSubmitHexEditModal = (hex, prevHex) => {
    console.log('hexes.handleSubmitHexEditModal')
    console.log('hex')
    console.log(hex)
    console.log('prevHex')
    console.log(prevHex)
    this.setState({openHexEditModal: false})
    this.props.updateHex(hex, prevHex)
  }

  render() {
    return (
      <div id='HexesWorkspace'>
        <WideColumnWorkspace>
          <HexDefinitionSegment
            hexTable={this.props.hexTable}
            hexDefinitions={this.props.hexDefinitions}
            onSubmit={this.handleSubmitHexDefinitionInput}
            onDelete={this.handleClickDeleteHexDefinition}
          />
          <HexMapSegment
            hexes={this.props.hexes}
            onSubmit={this.handleSubmitHexInput}
            onClickHex={this.handleClickHex}
          />
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
