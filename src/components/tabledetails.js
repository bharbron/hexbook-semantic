import React, {Component} from 'react';
import {
  Button,
  Card,
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
  Transition
} from 'semantic-ui-react';
import {DirectInputTableCell} from './datatables'
import {SingleLineAdder} from './forms'
import {TableCodeLabel, TableEntriesCountLabel, TemplateLabel} from './labels'
import './components.css';

function TableDetailsSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content={props.table.name} subheader='Click below to edit settings' />
          <TableDetailsList table={props.table} />
        </Segment>
        <Segment>
          <TableDetailsLabels table={props.table} />
        </Segment>
      </Segment.Group>
    </Transition>
  );
}

function TableDetailsList(props) {
  return (
    <List size='large'>
      <List.Item><List.Content floated='left'><Icon link circular name='settings' /></List.Content></List.Item>
      <TableDetailsListItem header='Name' contents={props.table.name} />
      <TableDetailsListItem header='CODE' contents={props.table.code} />
      <TableDetailsListItem header='Description' contents={props.table.description} />
    </List>
  );
}

function TableDetailsListItem(props) {
  return (
    <List.Item>
      <List.Content>
        <List.Header>{props.header}</List.Header>
        <List.Description>{props.contents}</List.Description>
      </List.Content>
    </List.Item>
  );
}

function TableDetailsLabels(props) {
  return (
    <Label.Group>
      {props.table.entries && <TableEntriesCountLabel count={props.table.entries.length} />}
      <TableCodeLabel code={props.table.code} />
      {props.table.template && <TemplateLabel template={props.table.template.name} />}
    </Label.Group>
  )
}

function TableEntriesSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content='Table Entries' subheader='Click a cell to edit' />
          <TableEntriesTable 
            tableEntries={props.table.entries}
            onSubmitUpdateWeight={props.onSubmitUpdateWeight}
            onSubmitUpdateText={props.onSubmitUpdateText}
          />
          <SingleLineAdder placeholder='Weight,Result text' onSubmit={props.onSubmitAddEntry} />
        </Segment>
      </Segment.Group>
    </Transition>
  );
}

function TableEntriesTable(props) {
  return (
    <Table basic='very' compact='very' striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell style={{ width: '3rem' }}><Checkbox /></Table.HeaderCell>
          <Table.HeaderCell><Icon name='balance scale' /></Table.HeaderCell>
          <Table.HeaderCell>Result</Table.HeaderCell>
          <Table.HeaderCell>Template Details</Table.HeaderCell>
          <Table.HeaderCell><Label tag><Icon name='balance scale' /></Label></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Transition.Group as={Table.Body}>
        {props.tableEntries && props.tableEntries.map(
          entry => <TableEntriesTableRow 
            tableEntry={entry}
            onSubmitUpdateWeight={props.onSubmitUpdateWeight}
            onSubmitUpdateText={props.onSubmitUpdateText}
          />
        )}
      </Transition.Group>
    </Table>
  )
}

function TableEntriesTableRow(props) {
  return (
    <Table.Row key={props.tableEntry.id}>
      <Table.Cell><Checkbox /></Table.Cell>
      <DirectInputTableCell content={props.tableEntry.weight} onSubmit={(weight) => props.onSubmitUpdateWeight(props.tableEntry, weight)} />
      <DirectInputTableCell content={props.tableEntry.text} onSubmit={(text) => props.onSubmitUpdateText(props.tableEntry, text)} />
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell><Icon link name='clone' color='grey' /></Table.Cell>
    </Table.Row>
  )
}

class TableEntryEditModal extends Component {
  state = {
      primaryColor: null,
      primaryDisabled: true,
      value: ''
  }

  static defaultProps = {
    open: false,
    primaryText: 'SAVE',
    onSubmit: (value) => console.log(`default onSubmit: ${value}`)
  }

  handleChange = (event) => {
    if ( event.target.value ) { 
      this.setState({value: event.target.value, primaryColor: 'blue', primaryDisabled: false})
    }
    else {
      this.setState({value: event.target.value, primaryColor: null, primaryDisabled: true})
    }
  }

  handleSubmit = ()  => {
    const value = this.state.value
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onSubmit(value)
  }

  handleClose = () => {
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onClose()
  }

  handleCancel = () => {
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onClose()
  }

  render () {
    return (
      <Transition animation='fly up' mountOnShow unmountOnHide='true' visible={this.props.open}>
        <Modal open={true} onClose={this.handleClose} className='TextAreaInputModal'>
          <Modal.Header style={{ borderBottom: '0px' }}>
            <Header as='h3' content={this.props.header} subheader={this.props.subheader} />
          </Modal.Header>
          <Modal.Content scrolling>
            <Form>
              <Header as='h4' content='Basic' />
              <Form.Group>
                <Form.Input inline width={2} label='Weight' placeholder='#' value='1' />
                <Form.Input inline width={14} label='Result' placeholder='Main text for this result on the table' value='A slime appears' />
              </Form.Group>
              <Header as='h4' content='Template Details' subheader='Additional details to be printed only if a template is attached to this table' />
                <List bulleted>
                  <List.Item>One <Icon color='grey' name='minus circle' /></List.Item>
                  <List.Item>Two <Icon color='grey' name='minus circle' /></List.Item>
                </List>
                <Form.Button circular label='' icon='plus' />
                <Input placeholder='Enter new detail...' />
              <Header as='h4' content='Weights by tag' />
              <Label.Group tag>
                <Label color='teal'>animal<Label.Detail>2</Label.Detail><Icon name='delete' /></Label>
                <Label color='olive'>garden<Label.Detail>1</Label.Detail><Icon name='delete' /></Label>
              </Label.Group>
              <Form.Group>
                <Form.Button circular label='' icon='plus' />
                <Form.Input width={2} label='Weight' placeholder='#' />
                <Form.Select width={4} label='Tag' placeholder='forest' search />
              </Form.Group>
              <Header as='h4' content='Blacklist' subheader='Exclude this result if any of the following tags are present' />
              <Label.Group tag color='red'>
                <Label>day<Icon name='delete' /></Label>
                <Label>romantic<Icon name='delete' /></Label>
              </Label.Group>
              <Form.Group>
                <Form.Button circular label='' icon='plus' />
                <Form.Select width={4} label='Tag' placeholder='forest' search />
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button id='TextAreaInputModalCancel' onClick={this.handleCancel}>CANCEL</Button>
            <Button id='TextAreaInputModalSave' color={this.state.primaryColor} disabled={this.state.primaryDisabled} onClick={this.handleSubmit}>{this.props.primaryText}</Button>
          </Modal.Actions>
        </Modal>
      </Transition>
    )
  }
}

export {TableDetailsSegment, TableEntriesSegment, TableEntryEditModal}
