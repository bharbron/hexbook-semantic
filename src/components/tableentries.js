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

function TableEntriesSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content='Table Entries' subheader='Click a cell to edit' />
          <TableEntriesTable 
            tableEntries={props.table.entries}
            colorsByTag={props.colorsByTag}
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
          <Table.HeaderCell><Label color='grey' tag><Icon name='balance scale' /></Label></Table.HeaderCell>
          <Table.HeaderCell><Label color='grey' tag><Icon name='ban' /></Label></Table.HeaderCell>
          <Table.HeaderCell>Limit</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Transition.Group as={Table.Body}>
        {props.tableEntries && props.tableEntries.map(
          entry => <TableEntriesTableRow 
            tableEntry={entry}
            colorsByTag={props.colorsByTag}
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
      <Table.Cell><Checkbox /></Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>{props.tableEntry.weight}</Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>{props.tableEntry.text}</Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>
        <EntryDetailsList entryDetails={props.tableEntry.entryDetails} />
      </Table.Cell>
      <Table.Cell onClick={() => props.onClickEntry(props.tableEntry.id)}>
        <TagWeightsList tagWeights={props.tableEntry.tagWeights} colorsByTag={props.colorsByTag} />
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
    <Label.Group size='small'>
      {props.tagWeights.map(
        tagWeight => <TagWeightLabel 
          id={tagWeight.id} 
          color={props.colorsByTag[tagWeight.tag]}
          text={tagWeight.tag} 
          weight={tagWeight.weight}
        />
      )}
    </Label.Group>
  )
}

function TagBlacklist(props) {
  return (
    <Label.Group color={COLORS.BLACKLIST_TAG} size='small'>
      {props.tagBlacklist.map(
        tag => <TagLabel tag={tag} />
      )}
    </Label.Group>
  )
}

export {TableEntriesSegment}
