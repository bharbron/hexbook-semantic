import React, {Component} from 'react';
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Card,
  Dropdown,
  Label
} from 'semantic-ui-react';
import {WideColumnWorkspace} from '../components/workspaces'
import {FloatingActionButton, FloatingWorkspaceMenu} from '../components/floatingcontrols'
import {TableSummaryCardGroup, TableInputModal} from '../components/tables'
import {addTable, deleteTable} from '../actions/tables'
import {getTables, getByCodeTables} from '../selectors/tables'
import './containers.css';

const mapStateToProps = state => ({
  // We don't want to manage the HEX table on this screen, so filter it out
  tables: [...getTables(state).filter(t => t.code !== 'HEX')],
  tablesByCode: getByCodeTables(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: url => push(url),
  addTable,
  deleteTable,
}, dispatch)

class TablesWorkspace extends Component {
  state = {
    openTableInputModal: false,
  }

  handleCloseTableInputModal = () => {
    this.setState({openTableInputModal: false})
  }

  handleSubmitTableInputModal = (name, code, description) => {
    console.log('handleSubmitTableInputModal')
    console.log(name)
    console.log(code)
    console.log(description) 
    this.setState({openTableInputModal: false})
    this.props.addTable(name, code, description)
  }

  handleClickAddTableButton = () => {
    this.setState({openTableInputModal: true})
  }

  handleClickTableSummaryCard = (url) => {
    this.props.changePage(url)
  }
    
  render() {
    return (
      <div id='TablesWorkspace'>
        <WideColumnWorkspace>
          <TableSummaryCardGroup tables={this.props.tables} onClick={this.handleClickTableSummaryCard} />
          <TableInputModal 
            open={this.state.openTableInputModal}
            onClose={this.handleCloseTableInputModal}
            onSubmit={this.handleSubmitTableInputModal}
            tablesByCode={this.props.tablesByCode}
          />
        </WideColumnWorkspace>

        <FloatingWorkspaceMenu>
          <Dropdown.Item text='Import table[s] ...' />
          <Dropdown.Item text='Export tables ...' />
          <Dropdown.Item text='Delete all tables' />
        </FloatingWorkspaceMenu>

        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddTableButton} />
        
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesWorkspace)