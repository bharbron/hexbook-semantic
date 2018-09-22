import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Card,
  Dropdown,
  Label
} from 'semantic-ui-react';
import {WideColumnWorkspace} from '../components/workspaces'
import {FloatingActionButton, FloatingWorkspaceMenu} from '../components/floatingcontrols'
import {TextAreaInputModal} from '../components/modals'
import {TableDetailsSegment, TableEntriesSegment} from '../components/tabledetails'
import {TableEntryEditModal} from '../components/tableentry'
import {addTableEntry, updateTableEntryWeight, updateTableEntryText} from '../actions/tabledetails'
import {getTableId, getFullTableById} from '../selectors/tabledetails'
import {getFullTableEntries} from '../selectors/tableentries'
import {getTerrainTags, getTerritoryTags} from '../selectors/tags'
import {VALID_INTEGER_REGEX, VALID_TABLE_ENTRY_REGEX} from '../constants/regex'
import './containers.css';

const mapStateToProps = state => ({
  tableId: getTableId(state.router),
  table: getFullTableById(state.entities, getTableId(state.router)),
  tableEntriesById: getFullTableEntries(state.entities),
  allTagIds: state.entities.tags.allIds,
  terrainTagIds: getTerrainTags(state.entities.tags),
  territoryTagIds: getTerritoryTags(state.entities.tags),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addTableEntry,
  updateTableEntryWeight,
  updateTableEntryText
}, dispatch)

class TableDetailsWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTableEntriesInputModal: false,
      openTableEntryEditModal: false,
      editingTableEntryId: null
    }

    this.handleSubmitAddEntry = this.handleSubmitAddEntry.bind(this)
    this.handleSubmitUpdateTableEntryWeight = this.handleSubmitUpdateTableEntryWeight.bind(this)
    this.handleSubmitUpdateTableEntryText = this.handleSubmitUpdateTableEntryText.bind(this)
    this.handleCloseTableEntriesInputModal = this.handleCloseTableEntriesInputModal.bind(this)
    this.handleSubmitTableEntriesInputModal = this.handleSubmitTableEntriesInputModal.bind(this)
    this.handleClickAddTableEntriesButton = this.handleClickAddTableEntriesButton.bind(this)
  }

  handleSubmitAddEntry(value) {
    if (value.match(VALID_TABLE_ENTRY_REGEX)) {
      const entry = value.split(',')
      const weight = entry[0]
      const text = entry.slice(1).join(',')
      this.props.addTableEntry(this.props.table, weight, text)
    }
  }

  handleSubmitUpdateTableEntryWeight(tableEntry, weight) {
    if (weight.match(VALID_INTEGER_REGEX)) {
      this.props.updateTableEntryWeight(tableEntry, weight)
    }
  }

  handleSubmitUpdateTableEntryText(tableEntry, text) {
    this.props.updateTableEntryText(tableEntry, text)
  }

  handleCloseTableEntriesInputModal() {
    this.setState({openTableEntriesInputModal: false})
  };

  handleSubmitTableEntriesInputModal(value) {
    this.setState({openTableEntriesInputModal: false})
    const lines = value.split('\n')
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(VALID_TABLE_ENTRY_REGEX)) {
        const entry = lines[i].split(',')
        const weight = entry[0]
        const text = entry.slice(1).join(',')
        this.props.addTableEntry(this.props.table, weight, text)
      }
    }
  }

  handleClickAddTableEntriesButton() {
    this.setState({openTableEntriesInputModal: true})
  }
    
  render() {
    return (
      <div id='TableDetailsWorkspace'>
      {console.log(this.props.tableId)}
        <WideColumnWorkspace>
          <TableDetailsSegment table={this.props.table} />
          <TableEntriesSegment 
            table={this.props.table} 
            onSubmitAddEntry={this.handleSubmitAddEntry} 
            onSubmitUpdateWeight={this.handleSubmitUpdateTableEntryWeight}
            onSubmitUpdateText={this.handleSubmitUpdateTableEntryText}
          />

          <TextAreaInputModal
            header='Add Entries to Table'
            subheader='One entry per line' 
            placeholder='Weight,Result text'
            open={this.state.openTableEntriesInputModal}
            onClose={this.handleCloseTableEntriesInputModal}
            onSubmit={this.handleSubmitTableEntriesInputModal}
          />
          <TableEntryEditModal 
            header={this.props.table.name + ' > Edit Entry'}
            open={this.state.openTableEntryEditModal} 
            tableEntry={this.props.tableEntriesById[this.state.editingTableEntryId]}
          />
        </WideColumnWorkspace>
        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddTableEntriesButton} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableDetailsWorkspace)