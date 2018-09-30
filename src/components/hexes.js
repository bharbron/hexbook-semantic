import React, {Component} from 'react';
import {
  Checkbox,
  Dropdown,
  Header,
  Icon,
  Label,
  List,
  Segment,
  Table,
  Transition
} from 'semantic-ui-react';
import {SingleLineAdderV2} from './forms'
import {TableCodeLabel} from './labels'
import {ListWithDeletableItems} from './lists'
import {COLORS} from '../constants/colors'
import {REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'

import './components.css';

class HexDefinitionSegment extends Component {
  state = {
    value: '',
    valid: false,
    error: null
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
    return
  }

  handleSubmit = (event) => {
    if (this.state.valid) {
      const value = this.state.value
      this.setState({value: '', valid: false, error: null})
      this.props.onSubmit(value)
    }
  }

  handleBlur = (event) => {
  }

  handleKeyDown = (event) => {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({value: '', valid: false, error: null})
    }
  }

  render() {
    return (
      <Transition transitionOnMount='true' animation='fade up'>
        <Segment.Group className='HexDefinitionSegment'>
          <Segment>
            <Header content='Hex Definition' subheader='What details should be randomly generated for all hexes' />
            <ListWithDeletableItems 
              bulleted='true' 
              items={ 
                this.props.hexDefinitions.map(
                  (hexDefinition) => ({
                    key: hexDefinition.id, 
                    content: hexDefinition.text, 
                    onClick: () => this.props.onDelete(hexDefinition.id)
                  })
                )
              }
            />
            <SingleLineAdderV2
              name='hexdefinition'
              placeholder='Enter [[NEW]] hex detail...'
              value={this.state.value}
              valid={this.state.valid}
              error={this.state.error}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onBlur={this.handleBlur}
            />
          </Segment>
          <Segment>
            <TableCodeLabel code='HEX' />
          </Segment>
          <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import definition ...' />
              <Dropdown.Item text='Export definition ...' />
            </Dropdown.Menu>
          </Dropdown>
        </Segment.Group>
      </Transition>
    )
  }
}

class HexMapSegment extends Component {
  state = {
    value: '',
    valid: false,
    error: null
  }

  handleSubmit = (event) => {
    if (this.state.valid) {
      const value = this.state.value
      this.setState({value: '', valid: false, error: null})
      this.props.onSubmit(value)
    }
  }

  handleChange = (event, {name, value}) => {
    if (value.match(REGEX.EMPTY)) {
      this.setState({value: value, valid: false, error: null})
      return
    }
    const [coordinates, terrain, territory] = value.split(',')
    if (!coordinates || coordinates.match(REGEX.EMPTY)) {
      this.setState({value: value, valid: false, error: ERRORS.REQUIRED})
      return
    }
    if (coordinates && !coordinates.match(REGEX.HEX_MAP_COORDINATES)) {
      this.setState({value: value, valid: false, error: ERRORS.HEX_COORDINATE_INVALID_CHAR})
      return
    }
    if (terrain && !terrain.match(REGEX.HEX_MAP_TERRAIN)) {
      this.setState({value: value, valid: false, error: ERRORS.TAG_INVALID_CHAR})
      return
    }
    if (territory && !territory.match(REGEX.HEX_MAP_TERRITORY)) {
      this.setState({value: value, valid: false, error: ERRORS.TAG_INVALID_CHAR})
      return
    }
    this.setState({value: value, valid: true, error: null})
    return
  }

  handleKeyDown = (event) => {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({value: '', valid: false, error: null})
    }
  }

  handleBlur = (event) => {
  }

  render() {
    return (
      <Transition transitionOnMount='true' animation='fade up'>
        <Segment className='HexMapSegment'>
          <Header content='Hex Map' subheader='Mapping of map coordinates to terrain and territory' />
          <HexMapTable hexes={this.props.hexes} onClickHex={this.props.onClickHex} />
          <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import hex[es] ...' />
              <Dropdown.Item text='Export hexes ...' />
              <Dropdown.Item text='Edit selected hex[es] ...' />
              <Dropdown.Item text='Delete selected hex[es]' />
            </Dropdown.Menu>
          </Dropdown>
          <SingleLineAdderV2
            name='hexmap'
            placeholder='coordinate,terrain,territory'
            value={this.state.value}
            valid={this.state.valid}
            error={this.state.error}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onBlur={this.handleBlur}
          />
        </Segment>
      </Transition>
    )
  }
}

function HexMapTable(props) {
  return (
    <Table basic='very' compact='very' singleLine selectable className='HexMapTable'>
      <Table.Header>
        <Table.Row verticalAlign='bottom'>
          <Table.HeaderCell style={{ width: '3rem' }}><Checkbox /></Table.HeaderCell>
          <Table.HeaderCell>Coordinates</Table.HeaderCell>
          <Table.HeaderCell><Label color={COLORS.TERRAIN_TAG} tag>Terrain</Label></Table.HeaderCell>
          <Table.HeaderCell><Label color={COLORS.TERRITORY_TAG} tag>Territory</Label></Table.HeaderCell>
          <Table.HeaderCell>Definition Override</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.hexes.map(
          hex => <HexMapTableRow hex={hex} onClick={props.onClickHex} />
        )}
      </Table.Body>
    </Table>
  )
}

function HexMapTableRow(props) {
  return (
    <Table.Row key={props.hex.coordinates} verticalAlign='top' className='HexMapTableRow'>
      <Table.Cell><Checkbox /></Table.Cell>
      <Table.Cell onClick={() => props.onClick(props.hex.coordinates)}>{props.hex.coordinates}</Table.Cell>
      <Table.Cell onClick={() => props.onClick(props.hex.coordinates)}>{props.hex.terrain}</Table.Cell>
      <Table.Cell onClick={() => props.onClick(props.hex.coordinates)}>{props.hex.territory}</Table.Cell>
      <Table.Cell onClick={() => props.onClick(props.hex.coordinates)}>
        <HexDetailsList entryDetails={props.hex.entryDetails} />
      </Table.Cell>
    </Table.Row>
  )
}

function HexDetailsList(props) {
  return (
    <List bulleted size='tiny'>
      {props.entryDetails.map(
        ed => <List.Item key={ed.id}>
          {ed.text}
        </List.Item>
      )}
    </List>
  )
}

export {HexDefinitionSegment, HexMapSegment}
