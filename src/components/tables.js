import React, {Component} from 'react';
import {
  Button,
  Card,
  Form,
  Header,
  Input,
  Label,
  Message,
  Modal,
  Transition
} from 'semantic-ui-react';
import routes from '../constants/routes.json'
import {HiddenSubmitButton} from './forms'
import {TableEntriesCountLabel, TemplateLabel} from './labels'
import {COLORS} from '../constants/colors'
import {EMPTY_REGEX, VALID_TABLE_NAME_REGEX, VALID_TABLE_CODE_REGEX, VALID_TABLE_DESCRIPTION_REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'
import './components.css';

function TableSummaryLabels(props) {
  return (
    <Label.Group>
      <TableEntriesCountLabel count={props.table.entries.length} />
      {props.table.template && <TemplateLabel template={props.table.template.name} />}
    </Label.Group>
  );
}

function TableSummaryCard(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card link onClick={() => props.onClick(routes.TABLE_DETAILS + '/' + props.table.id)}>
        <Card.Content>
          <Card.Header>{props.table.name}</Card.Header>
          <Card.Meta>{props.table.code}</Card.Meta>
          <Card.Description>{props.table.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <TableSummaryLabels table={props.table} />
        </Card.Content>
      </Card>
    </Transition>
  );
}

function TableSummaryCardGroup(props) {
  return (
    <Card.Group children={props.tables.map(table => <TableSummaryCard table={table} onClick={props.onClick} />)} />
  );
}

class TableInputModal extends Component {
  state = {
    value: {name: '', code: '', description: ''},
    valid: {name: false, code: false, description: false},
    error: {name: null, code: null, description: null},
  }

  static defaultProps = {
    open: false,
    onSubmit: (name, code, description) => console.log(`default onSubmit: ${name}; ${code}; ${description}`)
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
        if (this.props.tablesByCode[adjValue]) {
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

  handleSubmit = () => {
    if (this.state.valid.name && this.state.valid.code && this.state.valid.description) {
      this.setState({
        error: {name: null, code: null, description: null},
        valid: {name: false, code: false, description: false},
        value: {name: '', code: '', description: ''}
      })
      this.props.onSubmit(this.state.value.name, this.state.value.code, this.state.value.description)
    }
  }

  handleClose = () => {
    this.props.onClose()
  }

  handleCancel = () => {
    this.setState({
        error: {name: null, code: null, description: null},
        valid: {name: true, code: true, description: true},
        value: {name: '', code: '', description: ''}
      })
    this.props.onClose()
  }

  addButtonColor = () => {
    return (this.state.valid.name && this.state.valid.code && this.state.valid.description) ? COLORS.SUBMIT_BUTTON : null
  }

  addButtonDisabled = () => {
    return (this.state.valid.name && this.state.valid.code && this.state.valid.description) ? false : true
  }

  render() {
    return (
      <Transition animation='fly up' mountOnShow unmountOnHide='true' visible={this.props.open}>
        <Modal size='tiny' open={true} onClose={this.handleClose} className='TableInputModal'>
          <Modal.Header style={{ borderBottom: '0px' }}>
            <Header as='h3' content='Add New Table' />
          </Modal.Header>
          <Modal.Content scrolling>
            <Form onSubmit={this.handleSubmit} error={this.state.error.name || this.state.error.code || this.state.error.description}>
              <Form.Input 
                name='name'
                label='Name' 
                autoFocus
                transparent
                placeholder='Enter name of table...' 
                value={this.state.value.name}
                onChange={this.handleChange}
              />
              <Message error size='tiny' content={this.state.error.name} />
              <Form.Input 
                name='code'
                label='CODE' 
                transparent
                placeholder='Enter reference CODE for table...' 
                value={this.state.value.code}
                onChange={this.handleChange} 
              />
              <Message error size='tiny' content={this.state.error.code} />
              <Form.Input
                name='description'
                label='Description'
                transparent
                placeholder='Enter description of the table...' 
                value={this.state.value.description}
                onChange={this.handleChange}
              />
              <Message error size='tiny' content={this.state.error.description} />
              <HiddenSubmitButton />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button id='TableInputModalCancel' onClick={this.handleCancel}>CANCEL</Button>
            <Button id='TableInputModalSave' color={this.addButtonColor()} disabled={this.addButtonDisabled()} onClick={this.handleSubmit}>ADD</Button>
          </Modal.Actions>
        </Modal>
      </Transition>
    );
  }
}

export { TableSummaryCardGroup, TableInputModal }
