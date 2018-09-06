import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addHexDetail, deleteHexDetail, addHex, updateHexTags } from '../actions/hexes'
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
  Transition,
} from 'semantic-ui-react';
import { WideColumnWorkspace } from '../components/workspaces'
import { SingleLineAdder } from '../components/forms'
import { FloatingActionButton } from '../components/floatingcontrols'
import { TextAreaInputModal } from '../components/modals'
import { ListWithDeletableItems } from '../components/lists'
import { DirectInputTableCell } from '../components/tables'

import { hexesDataArray } from '../helpers'

import './containers.css';

function mapStateToProps(state) {
  return({
    tables: state.entities.tables,
    entryDetails: state.entities.entryDetails,
    tableEntries: state.entities.tableEntries,
    tags: state.entities.tags,
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addHexDetail,
  deleteHexDetail,
  addHex,
  updateHexTags
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
    this.handleCancelClickHexMapInputModal = this.handleCancelClickHexMapInputModal.bind(this)
    this.handleSaveClickHexMapInputModal = this.handleSaveClickHexMapInputModal.bind(this)
    this.handleClickAddToHexMapButton = this.handleClickAddToHexMapButton.bind(this)
    this.handleClickDeleteHexDetail = this.handleClickDeleteHexDetail.bind(this)
    this.handleSubmitHexInput = this.handleSubmitHexInput.bind(this)
    this.handleSubmitTerrain = this.handleSubmitTerrain.bind(this)
    this.handleSubmitTerritory = this.handleSubmitTerritory.bind(this)
  };

  handleSubmitHexDetailInput(value) {
    this.props.addHexDetail(value)
  }

  handleClickDeleteHexDetail(id) {
    this.props.deleteHexDetail(id)
  }

  handleSubmitHexInput(value) {
    //split into coordinate,terrain,territory
    const [coordinates, terrain, territory] = value.split(',')
    this.props.addHex(coordinates, terrain, territory)
  }

  handleCloseHexMapInputModal() {
    this.setState({openHexMapInputModal: false})
  };

  handleCancelClickHexMapInputModal() {
    this.setState({openHexMapInputModal: false})
  };

  handleSaveClickHexMapInputModal() {
    this.setState({openHexMapInputModal: false})
  };

  handleClickAddToHexMapButton() {
    this.setState({openHexMapInputModal: true})
  };

  handleSubmitTerrain(coordinates, value) {
    const terrain = value
    const territory = this.props.tableEntries.byId[coordinates].addTags[1]
    this.props.updateHexTags(coordinates, terrain, territory)
  }

  handleSubmitTerritory(coordinates, value) {
    const terrain = this.props.tableEntries.byId[coordinates].addTags[0]
    const territory = value
    this.props.updateHexTags(coordinates, terrain, territory)
  }

  createHexDataTable(tables, tableEntries, tags, onSubmitTerrain, onSubmitTerritory) {
    const rows = []
    for (let i = 0; i < tables.byId['HEX'].entries.length; i++) {
      const coordinates = tables.byId['HEX'].entries[i]
      const terrain = tableEntries.byId[coordinates].addTags[0]
      const territory = tableEntries.byId[coordinates].addTags[1]
      const override = ''
      rows.push(
        <Table.Row>
          <Table.Cell><Checkbox /></Table.Cell>
          <Table.Cell>{ coordinates }</Table.Cell>
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
          { console.log(hexesDataArray(this.props.tables, this.props.tableEntries, this.props.tags, this.props.handleSubmitTerrain, this.props.handleSubmitTerritory)) }

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
              <Table.Body>
              { this.createHexDataTable(this.props.tables, this.props.tableEntries, this.props.tags, this.handleSubmitTerrain, this.handleSubmitTerritory) }
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
            onCancelClick={this.handleCancelClickHexMapInputModal}
            onSaveClick={this.handleSaveClickHexMapInputModal}
          />

        </WideColumnWorkspace>

        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddToHexMapButton} />
        
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HexesWorkspace)
