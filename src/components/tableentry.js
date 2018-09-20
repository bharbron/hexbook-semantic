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
import './components.css';

const uuidv4 = require('uuid/v4');

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

  handleClick = (event)  => {
    const value = this.state.value
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onSubmit(value)
  }

  handleClose = (event) => {
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onClose()
  }

  handleCancel = (event) => {
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
            <TableEntryEditBasic />
            <TableEntryEditDetails />
            <TableEntryEditTagWeight />
            <Form>
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

class TableEntryEditBasic extends Component {
  state = {
    weight: this.props.weight,
    text: this.props.text
  }

  handleChange = (event) => {
    if (event.target.name == 'weight' && event.target.value.match(/^[0-9]*$/)) {
      this.setState({weight: event.target.value})
    }
    if (event.target.name == 'text') {
      this.setState({text: event.target.value})
    }
  }

  render () {
    return (
      <Form className='TableEntryEditBasic'>
        <Header as='h4' content='Basic' />
        <Form.Group>
          <Form.Input name='weight' inline width={2} label='Weight' placeholder='#' value={this.state.weight} onChange={this.handleChange} />
          <Form.Input name='text' inline width={14} label='Result' placeholder='Main text for this result on the table' value={this.state.text} onChange={this.handleChange} />
        </Form.Group>
      </Form>
    );
  }
}

class TableEntryEditDetails extends Component {
  state = {
    entryDetails: this.props.entryDetails
  }

  static defaultProps = {
    entryDetails: []
  }

  handleSubmit = (value) => {
    this.setState({entryDetails: [
      ...this.state.entryDetails,
      {id: uuidv4(), text: value}
    ]})
  }

  render () {
    return (
      <div className='TableEntryEditDetails'>
        <Header as='h4' content='Template Details' subheader='Additional details to be printed only if a template is attached to this table' />
        <List bulleted>
          <EntryDetailListItem entryDetail={{text: 'One', id: uuidv4()}} />
          {this.state.entryDetails && this.state.entryDetails.map(
            entryDetail => <EntryDetailListItem entryDetail={entryDetail} />
          )}
        </List>
        <EntryDetailAdder onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

function EntryDetailListItem(props) {
  return (
    <List.Item key={props.entryDetail.id}>
      {props.entryDetail.text} <Icon link name='minus circle' color='grey' onClick={props.onClick} />
    </List.Item>
  )
}

class EntryDetailAdder extends Component {
  state = {
    value: '',
    color: undefined,
    disabled: true
  }

  handleChange = (event) => {
    const value = event.target.value
    if (value) {
      this.setState({value: value, color: 'blue', disabled: false})
    }
    else {
      this.setState({value: value, color: undefined, disabled: true})
    }
  }

  handleSubmit = () => {
    const value = this.state.value
    this.setState({value: '', color: undefined, disabled: true})
    this.props.onSubmit(value)
  }

  render () {
    return (
      <Form className='EntryDetailAdder' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            name='newDetail'
            action={{ color: this.state.color, disabled: this.state.disabled, icon: 'plus' }}
            actionPosition='left'
            placeholder='Enter new detail...'
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            value={this.state.value}
          />
        </Form.Group>
      </Form>
    )
  }
}

class TableEntryEditTagWeight extends Component {
  state = {
    tags: this.props.tags
  }

  render () {
    return (
      <div className='TableEntryEditTagWeight'>
        <Header as='h4' content='Weights by tag' />
        <Label.Group tag>
          <TagWeightLabel tag={{id: 'fdfd', color: 'teal', name: 'animal', weight: 1}} onRemove={() => console.log('foo')} />
        </Label.Group>
        <TagWeightAdder />
      </div>
    )
  }
}

function TagWeightLabel(props) {
  return (
    <Label 
      key={props.tag.id} 
      color={props.tag.color}
      onRemove={props.onRemove}
      content={props.tag.name}
      detail={props.tag.weight}
    />
  )
}

class TagWeightAdder extends Component {
  state = {
    weight: '',
    tag: ''
  }

  onChange = (event) => {
    if (event.target.name == 'weight' && event.target.value.match(/^[0-9]*$/)) {
      this.setState({weight: event.target.value})
    }
    if (event.target.name == 'tag') {
      this.setState({tag: event.target.value})
    }
  }

  render () {
    return (
      <Form className='TagWeightAdder'>
        <Form.Group>
          <Form.Button circular label='' icon='plus' />
          <Form.Input 
            name='weight' 
            width={2} 
            label='Weight' 
            placeholder='#' 
            value={this.state.weight} 
            onChange={this.onChange} 
          />
          <Form.Select 
            name='tag' 
            width={4} 
            label='Tag' 
            placeholder='tag' 
            search
            options={this.props.tags}
            value={this.state.tag} 
            onChange={this.onChange} 
          />
        </Form.Group>
      </Form>
    )
  }
}

export {TableEntryEditModal}
