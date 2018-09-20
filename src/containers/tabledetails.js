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
import './containers.css';

const mapStateToProps = state => ({
  tableId: getTableId(state.router),
  table: getFullTableById(state.entities, getTableId(state.router))
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
    }

    this.handleSubmitAddEntry = this.handleSubmitAddEntry.bind(this)
    this.handleSubmitUpdateTableEntryWeight = this.handleSubmitUpdateTableEntryWeight.bind(this)
    this.handleSubmitUpdateTableEntryText = this.handleSubmitUpdateTableEntryText.bind(this)
    this.handleCloseTableEntriesInputModal = this.handleCloseTableEntriesInputModal.bind(this)
    this.handleSubmitTableEntriesInputModal = this.handleSubmitTableEntriesInputModal.bind(this)
    this.handleClickAddTableEntriesButton = this.handleClickAddTableEntriesButton.bind(this)
  }

  handleSubmitAddEntry(value) {
    const tableEntryRegEx = /^[0-9]+,.+$/
    if (value.match(tableEntryRegEx)) {
      const entry = value.split(',')
      const weight = entry[0]
      const text = entry.slice(1).join(',')
      this.props.addTableEntry(this.props.table, weight, text)
    }
  }

  handleSubmitUpdateTableEntryWeight(tableEntry, weight) {
    const tableEntryWeightRegEx = /^[0-9]+$/
    if (weight.match(tableEntryWeightRegEx)) {
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
    const tableEntryRegEx = /^[0-9]+,.+$/
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(tableEntryRegEx)) {
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
          <TableEntryEditModal header='> Edit Entry' open={true} />
        </WideColumnWorkspace>
        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddTableEntriesButton} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableDetailsWorkspace)