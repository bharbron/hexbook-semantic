import React, {Component} from 'react';
import {
  Button,
  Form,
  Header,
  Icon,
  List,
  Modal,
  Ref,
} from 'semantic-ui-react';
import './components.css';
import {InputErrorPopup} from './forms'
import {ERRORS} from '../constants/strings'
import {REGEX} from '../constants/regex'

const uuidv4 = require('uuid/v4');

class HexEditModal extends Component {
  state = {
    changed: false,
    coordinates: (this.props.hex) ? this.props.hex.coordinates: undefined,
    terrain: (this.props.hex) ? this.props.hex.terrain : undefined,
    terrainValid: true,
    terrainError: null,
    territory: (this.props.hex) ? this.props.hex.territory : undefined,
    territoryValid: true,
    territoryError: null,
    overrideEnabled: (this.props.hex && this.props.hex.entryDetails && this.props.hex.entryDetails.length > 0) ? true : false,
    entryDetails: (this.props.hex && this.props.hex.entryDetails) ? [...this.props.hex.entryDetails] : [],
  }

  initialState = {
    changed: false,
    coordinates: (this.props.hex) ? this.props.hex.coordinates: undefined,
    terrain: (this.props.hex) ? this.props.hex.terrain : undefined,
    terrainValid: true,
    terrainError: null,
    territory: (this.props.hex) ? this.props.hex.territory : undefined,
    territoryValid: true,
    territoryError: null,
    overrideEnabled: (this.props.hex && this.props.hex.entryDetails && this.props.hex.entryDetails.length > 0) ? true : false,
    entryDetails: (this.props.hex && this.props.hex.entryDetails) ? [...this.props.hex.entryDetails] : [],
  }

  static defaultProps = {
    header: 'Edit Hex',
    subheader: undefined,
  }

  primaryDisabled = () => {
    /*
    Determine whether or not the primary SAVE button should be enabled based on what data has been input or changed
    */
    return (this.state.changed && this.state.terrainValid && this.state.territoryValid) ? false : true
  }

  handleClose = () => {
    /*
    Closing the modal
    */
    this.setState({...this.initialState})
    this.props.onClose()
  }

  handleChangeBasic = (event, {name, value}) => {
    if (name === 'terrain') {
      if (value.match(REGEX.EMPTY) || value.match(REGEX.HEX_MAP_TERRAIN)) {
        this.setState({changed: true, terrain: value, terrainValid: true, terrainError: null})
        return
      }
      this.setState({changed: true, terrain: value, terrainValid: false, terrainError: 'bad terrain'})
    }
    if (name === 'territory') {
      if (value.match(REGEX.EMPTY) || value.match(REGEX.HEX_MAP_TERRITORY)) {
        this.setState({changed: true, territory: value, territoryValid: true, territoryError: null})
        return
      }
      this.setState({changed: true, territory: value, territoryValid: false, territoryError: 'bad territory'})
    }
  }

  handleChangeDetails = (event, {name, value}) => {
    if (name === 'overrideToggle') {
      this.setState({changed: true, overrideEnabled: !this.state.overrideEnabled})
    }
  }

  handleSubmitDetails = (text) => {
    /*
    Add a newly submitted entry template detail.
    Need to assign a new uuid to it so we can track it.
    */
    this.setState({
      changed: true,
      entryDetails: [
        ...this.state.entryDetails,
        {id: uuidv4(), 'text': text}
      ]
    })
  }

  handleRemoveDetails = (id) => {
    /*
    Remove an entry detail based on the given id (uuid)
    */
    this.setState({
      changed: true,
      entryDetails: [
        ...this.state.entryDetails.filter(detail => detail.id !== id)
      ]
    })
  }

  handleSubmit = (event) => {
    /*
    Clicking the save button
    Assemble all the bits of data into a hex object
    Send that to this.props.onSubmit()
    */
    const terrain = (this.state.terrain) ? this.state.terrain.toLowerCase() : undefined
    const territory = (this.state.territory) ? this.state.territory.toLowerCase() : undefined
    const prevHex = this.props.hex
    const hex = {
      ...this.props.hex,
      terrain: terrain,
      territory: territory,
      addTags: [terrain, territory],
      entryDetails: (this.state.overrideEnabled) ? [...this.state.entryDetails] : [],
    }
    //we enabled override for a hex that wasn't previously overridden. need a new group ID
    if (this.state.overrideEnabled && this.props.hex.entryDetailsGroup === 'HEX' && this.state.entryDetails.length > 0) {
      hex['entryDetailsGroup'] = uuidv4()
    }
    //no override, so use the default 'HEX' group ID
    if (!this.state.overrideEnabled || this.state.entryDetails.length === 0) {
      hex['entryDetailsGroup'] = 'HEX'
      // also wipe the entryDetails to fix an edge case where they reappear if you immediatley reopen the modal for the same hex
      this.setState({overrideEnabled: false, entryDetails: []})
    }
    this.setState({changed: false})

    this.props.onSubmit(hex, prevHex)
  }

  render () {
    return (
      <Modal open={this.props.open} onClose={this.handleClose} className='HexEditModal'>
        <Modal.Header style={{ borderBottom: '0px' }}>
          <Header as='h3' content={this.props.header} subheader={this.props.subheader} />
        </Modal.Header>
        <Modal.Content>
          <HexEditBasic
            coordinates={this.state.coordinates}
            terrain={this.state.terrain}
            territory={this.state.territory}
            terrainError={this.state.terrainError}
            territoryError={this.state.territoryError}
            onChange={this.handleChangeBasic} 
          />
          <HexEditDetails
            enabled={this.state.overrideEnabled}
            entryDetails={this.state.entryDetails}
            onChange={this.handleChangeDetails}
            onSubmit={this.handleSubmitDetails} 
            onRemove={this.handleRemoveDetails} 
          />
        </Modal.Content>
        <Modal.Actions>
          <Button className='modalSecondaryButton' onClick={this.handleClose}>CANCEL</Button>
          <Button 
            className='modalPrimaryButton'
            primary={!this.primaryDisabled()} 
            disabled={this.primaryDisabled()} 
            onClick={this.handleSubmit}
          >
            SAVE
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

class HexEditBasic extends Component {
  state = {}

  handleTerrainRef = nodeTerrain => this.setState({ nodeTerrain })
  handleTerritoryRef = nodeTerritory => this.setState({ nodeTerritory })

  render() {
    return (
      <Form className='HexEditBasic'>
        <Header as='h4' content='Tags' subheader='Terrain and territory tags (if any) for this hex' />
        <Form.Group>
          <Ref innerRef={this.handleTerrainRef}>
            <Form.Input
              name='terrain'
              inline
              width={6}
              placeholder='terrain'
              icon='tag'
              iconPosition='left'
              value={this.props.terrain}
              error={this.props.terrainError}
              onChange={this.props.onChange}
            />
          </Ref>
          <InputErrorPopup context={this.state.nodeTerrain} error={this.props.terrainError} />
          <Ref innerRef={this.handleTerritoryRef}>
            <Form.Input
              name='territory'
              inline
              width={6}
              placeholder='territory'
              icon='tag'
              iconPosition='left'
              value={this.props.territory}
              error={this.props.territoryError}
              onChange={this.props.onChange}
            />
          </Ref>
          <InputErrorPopup context={this.state.nodeTerritory} error={this.props.territoryError} />
          </Form.Group>
      </Form>
    );
  }
}

function HexEditDetails(props) {
  return (
    <div className='HexEditDetails'>
      <Header as='h4' content='Hex Definition Override' subheader='Override the global hex definition with details specific to this hex' />
      <Form>
        <Form.Radio
          toggle
          name='overrideToggle'
          value={props.enabled}
          checked={props.enabled}
          onChange={props.onChange}
        />
      </Form>
      {props.enabled && <HexDetailsList entryDetails={props.entryDetails} onRemove={props.onRemove} onSubmit={props.onSubmit} />}
    </div>
  )
}

function HexDetailsList(props) {
  return (
    <div className='HexDetailsList'>
      <List bulleted size='large'>
        {props.entryDetails.map(
          entryDetail => <HexDetailListItem entryDetail={entryDetail} onRemove={props.onRemove} />
        )}
      </List>
      <HexDetailAdder onSubmit={props.onSubmit} />
    </div>
  )
}

function HexDetailListItem(props) {
  return (
    <List.Item key={props.entryDetail.id} className='HexDetailListItem'>
      {props.entryDetail.text} <Icon link name='minus circle' color='grey' onClick={() => props.onRemove(props.entryDetail.id)} />
    </List.Item>
  )
}

class HexDetailAdder extends Component {
  state = {
    value: '',
    valid: false,
    error: null,
  }

  buttonDisabled = () => {
    return (this.state.valid) ? false : true
  }

  handleChange = (event, {name, value}) => {
    if (value.match(REGEX.EMPTY)) {
      this.setState({value: value, valid: false, error: null})
      return
    }
    if (value.match(REGEX.ENTRY_DETAIL)) {
      this.setState({value: value, valid: true, error: null})
      return
    }
    this.setState({value: value, valid: false, error: ERRORS.ENTRY_DETAIL_INVALID_CHAR})
  }

  handleSubmit = () => {
    if (this.state.valid) {
      const value = this.state.value
      this.setState({value: '', valid: false, error: null})
      this.props.onSubmit(value)
    }
  }

  handleRef = node => this.setState({ node })

  render () {
    return (
      <Form className='HexDetailAdder' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Button 
            type='submit' 
            inline 
            circular 
            icon='plus' 
            disabled={this.buttonDisabled()}
          />
          <Ref innerRef={this.handleRef}>
            <Form.Input
              name='newDetail'
              width={16}
              placeholder='Enter new detail...'
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              value={this.state.value}
              error={this.state.error}
            />
          </Ref>
          <InputErrorPopup context={this.state.node} error={this.state.error} />
        </Form.Group>
      </Form>
    )
  }
}

export {HexEditModal}
