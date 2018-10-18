import React, {Component} from 'react';
import {
  Checkbox,
  Header,
  Icon,
  Label,
  List,
  Segment,
  Table,
  Transition
} from 'semantic-ui-react';
import {SingleLineAdderV2} from './forms'
import {TagLabel, TagWeightLabel} from './labels'
import {COLORS} from '../constants/colors'
import {REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'
import './components.css';

class TableEntriesSegment extends Component {
  initialState = {
    value: '',
    valid: false,
    error: null
  }

  state = {...this.initialState}

  handleSubmit = () => {
    if (this.state.valid) {
      const value = this.state.value
      this.setState(this.initialState)
      this.props.onSubmitAddEntry(value)
    }
  }

  handleChange = (event, {name, value}) => {
    if (value.match(REGEX.EMPTY)) {
      this.setState({value: value, valid: false, error: null})
      return
    }
    const [weight, text] = value.split(',')
    if (!weight || weight.match(REGEX.EMPTY)) {
      this.setState({value: value, valid: false, error: ERRORS.REQUIRED})
      return
    }
    if (!weight.match(REGEX.TABLE_ENTRY_WEIGHT)) {
      this.setState({value: value, valid: false, error: 'Invalid weight'})
      return
    }
    if (!text || text.match(REGEX.EMPTY)) {
      this.setState({value: value, valid: false, error: null})
      return
    } 
    if (!text.match(REGEX.TABLE_ENTRY_TEXT)) {
      this.setState({value: value, valid: false, error: 'Invalid table entry text'})
      return
    }
    this.setState({value: value, valid: true, error: null})
    return
  }

  handleBlur = (event) => {
  }

  handleKeyDown = (event) => {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState(this.initialState)
    }
  }

  render() {
    return (
      <Transition transitionOnMount='true' animation='fade up'>
        <Segment.Group>
          <Segment>
            <Header content='Table Entries' subheader='Click a cell to edit' />
            <TableEntriesTable 
              tableEntries={this.props.table.entries}
              colorsByTag={this.props.colorsByTag}
              onClickEntry={this.props.onClickEntry}
              onClickClone={this.props.onClickClone}
            />
            <SingleLineAdderV2 
              name='addtableentry'
              placeholder='Weight,Result text'
              value={this.state.value}
              valid={this.state.valid}
              error={this.state.error}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onBlur={this.handleBlur}
            />
          </Segment>
        </Segment.Group>
      </Transition>
    )
  }
}

function TableEntriesTable(props) {
  return (
    <Table basic='very' compact='very' selectable>
      <Table.Header>
        <Table.Row verticalAlign='bottom'>
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
      <Table.Body>
        {props.tableEntries && props.tableEntries.map(
          entry => <TableEntriesTableRow 
            tableEntry={entry}
            colorsByTag={props.colorsByTag}
            onClickEntry={props.onClickEntry}
            onClickClone={props.onClickClone}
          />
        )}
      </Table.Body>
    </Table>
  )
}

function TableEntriesTableRow(props) {
  return (
    <Table.Row key={props.tableEntry.id} verticalAlign='top'>
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
    <List bulleted size='tiny'>
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
