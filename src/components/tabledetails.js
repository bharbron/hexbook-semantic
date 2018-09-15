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
import {SingleLineAdder} from './forms'
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
          {props.table.entries && <Label circular>{props.table.entries.length}</Label>}
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
          <Header content='Table Entries' subheader='Click a row to edit' />
          <TableEntriesTable tableEntries={props.table.entries} />
          <SingleLineAdder placeholder='weight,text' onSubmit={(value) => props.onSubmitAddEntry(props.table, value)} />
        </Segment>
      </Segment.Group>
    </Transition>
  );
}

function TableDetailsList(props) {
  return (
    <List size='large'>
      <TableDetailsListItem header='Name' contents={props.table.name} />
      <TableDetailsListItem header='CODE' contents={props.table.code} />
      <TableDetailsListItem header='Description' contents={props.table.description} />
      <List.Item><List.Content floated='left'><Icon link circular name='settings' /></List.Content></List.Item>
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

function TableEntriesTable(props) {
  return (
    <Table basic='very' compact='very' striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell style={{ width: '3rem' }}><Checkbox /></Table.HeaderCell>
          <Table.HeaderCell>Weight</Table.HeaderCell>
          <Table.HeaderCell>Text</Table.HeaderCell>
          <Table.HeaderCell>Tags</Table.HeaderCell>
          <Table.HeaderCell>Details</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    </Table>
  )
}

export { TableDetailsSegment, TableEntriesSegment }
