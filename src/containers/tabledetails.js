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
import {addTable, deleteTable} from '../actions/tables'
import {getTableId, getFullTableById} from '../selectors/tabledetails'
import './containers.css';

const mapStateToProps = state => ({
  tableId: getTableId(state.router),
  table: getFullTableById(state.entities, getTableId(state.router))
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

class TableDetailsWorkspace extends Component {
    
  render() {
    return (
      <div id='TableDetailsWorkspace'>
      {console.log(this.props.tableId)}
        <WideColumnWorkspace>
          <TableDetailsSegment table={this.props.table} />
          <TableEntriesSegment table={this.props.table} />
        </WideColumnWorkspace>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableDetailsWorkspace)