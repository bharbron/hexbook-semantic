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
import {TableDetailsSegment, TableEntriesSegment} from '../components/tabledetails'
import {addTableEntry} from '../actions/tabledetails'
import {getTableId, getFullTableById} from '../selectors/tabledetails'
import './containers.css';

const mapStateToProps = state => ({
  tableId: getTableId(state.router),
  table: getFullTableById(state.entities, getTableId(state.router))
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addTableEntry
}, dispatch)

class TableDetailsWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.handleSubmitAddEntry = this.handleSubmitAddEntry.bind(this)
  }

  handleSubmitAddEntry(table, value) {
    console.log('handleSubmitAddEntry(table, value)')
    console.log(table)
    console.log(value)
    const tableEntryRegEx = /^[0-9]+,.+$/
    if (value.match(tableEntryRegEx)) {
      const index = table.entries.length
      const entry = value.split(',')
      const weight = entry[0]
      const text = entry.slice(1).join(',')
      console.log('weight')
      console.log(weight)
      console.log('text')
      console.log(text)
      this.props.addTableEntry(table, index, weight, text)
    }
  }
    
  render() {
    return (
      <div id='TableDetailsWorkspace'>
      {console.log(this.props.tableId)}
        <WideColumnWorkspace>
          <TableDetailsSegment table={this.props.table} />
          <TableEntriesSegment table={this.props.table} onSubmitAddEntry={this.handleSubmitAddEntry} />
        </WideColumnWorkspace>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableDetailsWorkspace)