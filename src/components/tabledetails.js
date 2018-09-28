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
  Popup,
  Segment,
  Table,
  Transition
} from 'semantic-ui-react';
import {DirectInputTableCell} from './datatables'
import {SingleLineAdder} from './forms'
import {TableCodeLabel, TableEntriesCountLabel, TemplateLabel, TagLabel, TagWeightLabel} from './labels'
import {COLORS} from '../constants/colors'
import {EMPTY_REGEX, VALID_TABLE_NAME_REGEX, VALID_TABLE_CODE_REGEX, VALID_TABLE_DESCRIPTION_REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'
import './components.css';

class TableDetailsSegment extends Component {
  state = {
    error: {name: null, code: null, description: null},
    valid: {name: true, code: true, description: true},
    editMode: {name: false, code: false, description: false},
    value: {name: this.props.table.name, code: this.props.table.code, description: this.props.table.description}
  }

  static defaultProps = {
    onSubmit: () => console.log('default onSubmit')
  }

  handleClick = (event, field) => {
    const newEditMode = {
      ...this.state.editMode,
      [field]: true
    }
    this.setState({editMode: newEditMode})
  }

  handleBlur = (event, field) => {
    const contents = {
      'name': this.props.table.name,
      'code': this.props.table.code,
      'description': this.props.table.description
    }
    const newValue = {
      ...this.state.value,
      [field]: contents[field]
    }
    const newEditMode = {
      ...this.state.editMode,
      [field]: false
    }
    const newError = {
      ...this.state.error,
      [field]: null
    }
    this.setState({value: newValue, editMode: newEditMode, error: newError})
  }

  handleKeyDown = (event, field) => {
    //exit on escape
    if (event.keyCode === 27) {
      const contents = {
      'name': this.props.table.name,
      'code': this.props.table.code,
      'description': this.props.table.description
      }
      const newValue = {
        ...this.state.value,
        [field]: contents[field]
      }
      const newEditMode = {
        ...this.state.editMode,
        [field]: false
      }
      const newError = {
        ...this.state.error,
        [field]: null
      }
      this.setState({value: newValue, editMode: newEditMode, error: newError})
      }
  }

  handleChange = (event, {name, value}) => {
    /*
    In general:
    1. Make any "adjustments" to the input, e.g. autocapitalization
    2. Match against regex (which allows empty input)
    3. If match, perform any more detailed checks, e.g. is the value already in use somewhere
    4. If okay, update state

    If it fails at any step, set any appropriate error text
    */
    if (name === 'name') {
      if (value.match(EMPTY_REGEX)) {
        this.setState({
          value: {...this.state.value, 'name': value},
          valid: {...this.state.valid, 'name': false},
          error: {...this.state.error, 'name': ERRORS.REQUIRED}
        })
        return
      }
      if (value.match(VALID_TABLE_NAME_REGEX)) {
        this.setState({
          value: {...this.state.value, 'name': value},
          valid: {...this.state.valid, 'name': true},
          error: {...this.state.error, 'name': null}
        })
        return
      }
      this.setState({
        error: {...this.state.error, 'name': ERRORS.TABLE_NAME_INVALID_CHAR}
      })
      return
    }

    if (name === 'code') {
      const adjValue = value.toUpperCase()
      if (adjValue.match(EMPTY_REGEX)) {
        this.setState({
          value: {...this.state.value, 'code': adjValue},
          valid: {...this.state.valid, 'code': false},
          error: {...this.state.error, 'code': ERRORS.REQUIRED}
        })
        return
      }
      if (adjValue.match(VALID_TABLE_CODE_REGEX)) {
        if (adjValue !== this.props.table.code && this.props.tablesByCode[adjValue] ) {
          this.setState({
            value: {...this.state.value, 'code': adjValue},
            valid: {...this.state.valid, 'code': false},
            error: {...this.state.error, 'code': ERRORS.TABLE_CODE_DUPLICATE}
          })
          return
        }
        this.setState({
          value: {...this.state.value, 'code': adjValue},
          valid: {...this.state.valid, 'code': true},
          error: {...this.state.error, 'code': null}
        })
        return
      }
      this.setState({
        error: {...this.state.error, 'code': ERRORS.TABLE_CODE_INVALID_CHAR}
      })
      return
    }

    if (name === 'description') {
      if (value.match(EMPTY_REGEX)) {
        this.setState({
          value: {...this.state.value, 'description': value},
          valid: {...this.state.valid, 'description': false},
          error: {...this.state.error, 'description': ERRORS.REQUIRED}
        })
        return
      }
      if (value.match(VALID_TABLE_DESCRIPTION_REGEX)) {
        this.setState({
          value: {...this.state.value, 'description': value},
          valid: {...this.state.valid, 'description': true},
          error: {...this.state.error, 'description': null}
        })
        return
      }
      this.setState({
        error: {...this.state.error, 'description': ERRORS.TABLE_DESCRIPTION_INVALID_CHAR}
      })
      return
    }
  }

  handleSubmit = (field) => {
    if (this.state.valid[field]) {
      const contents = {
        'name': this.props.table.name,
        'code': this.props.table.code,
        'description': this.props.table.description
      }
      contents[field] = this.state.value[field]
      this.setState({
        error: {name: null, code: null, description: null},
        valid: {name: true, code: true, description: true},
        editMode: {name: false, code: false, description: false},
        value: {name: contents.name, code: contents.code, description: contents.description}
      })
      this.props.onSubmit(contents.name, contents.code, contents.description)
    }
  }

  render() {
    return (
      <Transition transitionOnMount='true' animation='fade up'>
        <Segment.Group>
          <Segment>
            <Header content='Table Settings' subheader='Click pencil to edit' />
            <TableDetailsList 
              table={this.props.table}
              onBlur={this.handleBlur}
              editMode={this.state.editMode}
              onClick={this.handleClick}
              onSubmit={this.handleSubmit}
              value={this.state.value}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              error={this.state.error} />
          </Segment>
          <Segment>
            <TableDetailsLabels table={this.props.table} />
          </Segment>
        </Segment.Group>
      </Transition>
    )
  }
}

function TableDetailsList(props) {
  return (
    <List size='large'>
      <TableDetailsListItem 
        header='Name'
        name='name'
        content={props.table.name}
        onBlur={props.onBlur}
        editMode={props.editMode.name} 
        onClick={props.onClick}
        onSubmit={props.onSubmit} 
        value={props.value.name}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        error={props.error.name} />
      <TableDetailsListItem 
        header='CODE' 
        name='code'
        content={props.table.code}
        onBlur={props.onBlur}
        editMode={props.editMode.code} 
        onClick={props.onClick}
        onSubmit={props.onSubmit} 
        value={props.value.code}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        error={props.error.code} />
      <TableDetailsListItem 
        header='Description' 
        name='description'
        content={props.table.description}
        onBlur={props.onBlur}
        editMode={props.editMode.description} 
        onClick={props.onClick}
        onSubmit={props.onSubmit} 
        value={props.value.description}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        error={props.error.description} />
    </List>
  );
}

function TableDetailsListItem(props) {
  return (
    <List.Item>
      <List.Content>
        <List.Header>{props.header}</List.Header>
        <List.Description>
        {!props.editMode && props.content}   {!props.editMode && <Icon link name='pencil' onClick={(e) => props.onClick(e, props.name)} />}
        {props.editMode && 
          <Form onSubmit={() => props.onSubmit(props.name)}>
            <Popup
              trigger={
                <Form.Input
                  name={props.name}
                  focus
                  size='tiny'
                  autoFocus
                  value={props.value}
                  error={props.error}
                  onChange={props.onChange}
                  onKeyDown={(event) => props.onKeyDown(event, props.name)}
                  onBlur={(event) => props.onBlur(event, props.name)}
                />
              }
              content={props.error}
              open={props.error}
              position='left center'
              size='small'
            />
          </Form>}
        </List.Description>
      </List.Content>
    </List.Item>
  )
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

export {TableDetailsSegment}
