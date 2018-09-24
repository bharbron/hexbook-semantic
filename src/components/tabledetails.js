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
import {TableCodeLabel, TableEntriesCountLabel, TemplateLabel, TagLabel, TagWeightLabel} from './labels'
import {COLORS} from '../constants/colors'
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
            onClickEntry={props.onClickEntry}
            onClickClone={props.onClickClone}
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
          <Table.HeaderCell><Label tag><Icon name='ban' /></Label></Table.HeaderCell>
          <Table.HeaderCell>Limit</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Transition.Group as={Table.Body}>
        {props.tableEntries && props.tableEntries.map(
          entry => <TableEntriesTableRow 
            tableEntry={entry}
            onClickEntry={props.onClickEntry}
            onClickClone={props.onClickClone}
          />
        )}
      </Transition.Group>
    </Table>
  )
}

function TableEntriesTableRow(props) {
  return (
    <Table.Row key={props.tableEntry.id}>
      {console.log('props.tableEntry')}
      {console.log(props.tableEntry)}
      <Table.Cell><Checkbox /></Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>{props.tableEntry.weight}</Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>{props.tableEntry.text}</Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>
        <EntryDetailsList entryDetails={props.tableEntry.entryDetails} />
      </Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>
        <TagWeightsList tagWeights={props.tableEntry.tagWeights} />
      </Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>
        <TagBlacklist tagBlacklist={props.tableEntry.tagBlacklist} />
      </Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>{props.tableEntry.limit}</Table.Cell>
      <Table.Cell><Icon link name='clone' onClick={() => props.onClickClone(props.tableEntry.id)} /></Table.Cell>
    </Table.Row>
  )
}

function EntryDetailsList(props) {
  return (
    <List bulleted size='small'>
      {console.log('props.entryDetails')}
      {console.log(props.entryDetails)}
      {props.entryDetails.map(
        ed => <List.Item key={ed.id}>
          {ed.text}
        </List.Item>
      )}
    </List>
  )
}

function TagWeightsList(props) {
  return (
    <Label.Group tag size='small'>
      {props.tagWeights.map(
        tagWeight => <TagWeightLabel 
          id={tagWeight.id} 
          color='blue'
          text={tagWeight.tag} 
          weight={tagWeight.weight}
        />
      )}
    </Label.Group>
  )
}

function TagBlacklist(props) {
  return (
    <Label.Group tag color={COLORS.BLACKLIST_TAG} size='small'>
      {props.tagBlacklist.map(
        tag => <TagLabel tag={tag} />
      )}
    </Label.Group>
  )
}

export {TableDetailsSegment, TableEntriesSegment}
