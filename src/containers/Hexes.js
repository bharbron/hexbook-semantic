import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addHexDetail, deleteHexDetail } from '../actions/hexes'
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
import { WideColumnWorkspace } from '../components/Workspaces'
import { SingleLineAdder } from '../components/Forms'
import { FloatingActionButton } from '../components/FloatingControls'
import { TextAreaInputModal } from '../components/Modals'
import { ListWithDeletableItems } from '../components/Lists'

import './containers.css';

function mapStateToProps(state) {
  return({
    tables: state.tables,
    entry_details: state.entry_details
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addHexDetail,
  deleteHexDetail
}, dispatch)

class HexesWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value_hexDetailInput: '',
      open_hexMapInputModal: false,
    };

    this.handleChange_hexDetailInput = this.handleChange_hexDetailInput.bind(this)
    this.handleSubmit_hexDetailInput = this.handleSubmit_hexDetailInput.bind(this)
    this.handleClose_hexMapInputModal = this.handleClose_hexMapInputModal.bind(this)
    this.handleCancelClick_hexMapInputModal = this.handleCancelClick_hexMapInputModal.bind(this)
    this.handleSaveClick_hexMapInputModal = this.handleSaveClick_hexMapInputModal.bind(this)
    this.handleClick_addToHexMapButton = this.handleClick_addToHexMapButton.bind(this)
    this.handleClick_deleteHexDetail = this.handleClick_deleteHexDetail.bind(this)
  };

  handleChange_hexDetailInput(event) {
    // can probably attach typing autosuggestion here, e.g. if [[ is at end of string, suggest TABLES_CODES
    // can probably also do live validation of input, print an error message on the input, disable submit if bad data has been entered
    this.setState({value_hexDetailInput: event.target.value})
  };

  handleSubmit_hexDetailInput() {
    // no value is sent on submit. instead, whatever the last value from onChange was
    const value = this.state.value_hexDetailInput
    this.setState({ value_hexDetailInput: '' })
    this.props.addHexDetail(value)
  }

  handleClick_deleteHexDetail(id) {
    console.log(this.props)
    console.log(id)
    this.props.deleteHexDetail(id)
  }

  handleClose_hexMapInputModal() {
    this.setState({open_hexMapInputModal: false})
  };

  handleCancelClick_hexMapInputModal() {
    this.setState({open_hexMapInputModal: false})
  };

  handleSaveClick_hexMapInputModal() {
    this.setState({open_hexMapInputModal: false})
  };

  handleClick_addToHexMapButton() {
    this.setState({open_hexMapInputModal: true})
  };

  render() {
    return (
      <div id='HexesWorkspace'>
        <WideColumnWorkspace>

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
                { this.props.entry_details.allIds.map((id) => <List.Item key={id}>{ this.props.entry_details.byId[id].text } <Icon onClick={() => this.handleClick_deleteHexDetail(id)} link name='minus circle' color='grey' /></List.Item>) }
              </Transition.Group>
              */}
              <ListWithDeletableItems bulleted='true' items={ this.props.entry_details.allIds.map((id) => ({key: id, content: this.props.entry_details.byId[id].text, onClick: () => this.handleClick_deleteHexDetail(id) })) } />
              <SingleLineAdder
                onSubmit={this.handleSubmit_hexDetailInput}
                name='hex_definition'
                placeholder='Enter [[NEW]] hex detail...'
                value={this.state.value_hexDetailInput}
                onChange={this.handleChange_hexDetailInput}
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
                  <Table.Cell>forest</Table.Cell>
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
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0104</Table.Cell>
                  <Table.Cell>garden</Table.Cell>
                  <Table.Cell>hearts</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0105</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>pale</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0106</Table.Cell>
                  <Table.Cell>mountain</Table.Cell>
                  <Table.Cell>pale</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0107</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>red</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0108</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>red</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0110</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>red</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0201</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>colorless</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0202</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>colorless</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Checkbox /></Table.Cell>
                  <Table.Cell>0203</Table.Cell>
                  <Table.Cell>forest</Table.Cell>
                  <Table.Cell>hearts</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
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
              onSubmit={null}
              name='hex'
              placeholder='coordinate,terrain,territory'
              value={''}
              onChange={null}
            />
          </Segment>

          <TextAreaInputModal
            header='Add to Hex Map'
            subheader='One hex per line, no spaces, all lowercase' 
            placeholder='coordinate,terrain,territory'
            open={this.state.open_hexMapInputModal}
            onClose={this.handleClose_hexMapInputModal}
            onCancelClick={this.handleCancelClick_hexMapInputModal}
            onSaveClick={this.handleSaveClick_hexMapInputModal}
          />

        </WideColumnWorkspace>

        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClick_addToHexMapButton} />
        
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HexesWorkspace)
