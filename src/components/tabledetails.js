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
          <SingleLineAdder placeholder='weight,text' />
        </Segment>
      </Segment.Group>
    </Transition>
  );
}

function TableDetailsList(props) {
  return (
    <List horizontal size='large'>
      <List.Item><Icon link name='pencil' color='grey'/></List.Item>
      <TableDetailsListItem header='Name' contents={props.table.name} icon={true} />
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
        {props.contents}
      </List.Content>
    </List.Item>
  );
}

function TableEntriesTable(props) {
  return (
    <Table selectable compact='very' striped>
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
