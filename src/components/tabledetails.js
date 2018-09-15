import React from 'react';
import {
  Card,
  Checkbox,
  Dropdown,
  Header,
  Icon,
  Input,
  Label,
  List,
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

export { TableDetailsSegment, TableEntriesSegment }
