import React, {Component} from 'react';
import {
  Button,
  Form,
  Header,
  Icon,
  Label,
  List,
  Modal,
  Transition
} from 'semantic-ui-react';
import './components.css';
import {TagLabel, TagWeightLabel} from './labels'

const uuidv4 = require('uuid/v4');

class TableEntryEditModal extends Component {
  state = {
      primaryColor: null,
      primaryDisabled: true,
      weight: (this.props.tableEntry) ? this.props.tableEntry.weight : undefined,
      text: (this.props.tableEntry) ? this.props.tableEntry.text : undefined,
      maxOccurences: (this.props.tableEntry) ? this.props.tableEntry.maxOccurences : undefined,
      entryDetails: (this.props.tableEntry) ? [...this.props.tableEntry.entryDetails] : [],
      tagWeights: (this.props.tableEntry) ? [...this.props.tableEntry.tagWeights] : [],
      tagWeightOptions: [
        {key: 'forest', value: 'forest', text: 'forest'},
        {key: 'garden', value: 'garden', text: 'garden'},
        {key: 'mountain', value: 'mountain', text: 'mountain'},
      ],
      tagBlacklist: (this.props.tableEntry) ? [...this.props.tableEntry.tagBlacklist] : [],
      tagBlacklistOptions: [
        {key: 'forest', value: 'forest', text: 'forest'},
        {key: 'garden', value: 'garden', text: 'garden'},
        {key: 'mountain', value: 'mountain', text: 'mountain'},
      ],
  }

  static defaultProps = {
    open: false,
    primaryText: 'SAVE',
    onSubmit: (value) => console.log(`default onSubmit: ${value}`)
  }

  handleClose = (event) => {
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onClose()
  }

  handleCancel = (event) => {
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onClose()
  }

  handleChangeBasic = (event, {name, value}) => {
    if (name == 'weight' && value.match(/^[0-9]*$/)) {
      this.setState({weight: value})
    }
    if (name == 'text') {
      this.setState({text: value})
    }
  }

  handleSubmitDetails = (value) => {
    this.setState({entryDetails: [
      ...this.state.entryDetails,
      {id: uuidv4(), text: value}
    ]})
  }

  handleSubmitTagWeight = ({tag, weight}) => {
    //TODO: Set color based on whether the tag is terrain, territory, or other
    //TODO: Remove the tag from this.state.options when it is added
    //TODO: Avoid duplicates in this.state.tags
    //TODO: Maintain alphabetical order in this.state.tags
    console.log(tag)
    console.log(weight)
    this.setState({
      tagWeights: [
        ...this.state.tagWeights,
        {
          id: uuidv4(),
          tag: tag,
          color: 'teal',
          weight: weight,
        }
      ]
    })
  }

  render () {
    return (
      <Transition animation='fly up' mountOnShow unmountOnHide='true' visible={this.props.open}>
        <Modal open={true} onClose={this.handleClose} className='TextAreaInputModal'>
          <Modal.Header style={{ borderBottom: '0px' }}>
            <Header as='h3' content={this.props.header} subheader={this.props.subheader} />
          </Modal.Header>
          <Modal.Content scrolling>
            <TableEntryEditBasic weight={this.state.weight} text={this.state.text} onChange={this.handleChangeBasic} />
            <TableEntryEditDetails entryDetails={this.state.entryDetails} onSubmit={this.handleSubmitDetails} />
            <TableEntryEditTagWeight tagWeights={this.state.tagWeights} options={this.state.tagWeightOptions} onSubmit={this.handleSubmitTagWeight} />
            <TableEntryEditBlacklist options={this.state.tagBlacklistOptions} />
          {/*TODO: Form for editing max number of occurrences*/}
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

function TableEntryEditBasic(props) {
  return (
    <Form className='TableEntryEditBasic'>
      <Header as='h4' content='Basic' />
      <Form.Group>
        <Form.Input name='weight' inline width={2} label='Weight' placeholder='#' value={props.weight} onChange={props.onChange} />
        <Form.Input name='text' inline width={14} label='Result' placeholder='Main text for this result on the table' value={props.text} onChange={props.onChange} />
      </Form.Group>
    </Form>
  );
}

function TableEntryEditDetails(props) {
  return (
    <div className='TableEntryEditDetails'>
      <Header as='h4' content='Template Details' subheader='Additional details to be printed only if a template is attached to this table' />
      <List bulleted>
        {props.entryDetails.map(
          entryDetail => <EntryDetailListItem entryDetail={entryDetail} />
        )}
      </List>
      <EntryDetailAdder onSubmit={props.onSubmit} />
    </div>
  )
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

  handleChange = (event, {name, value}) => {
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

function TableEntryEditTagWeight(props) {
  return (
    <div className='TableEntryEditTagWeight'>
      <Header as='h4' content='Weights by tag' />
      <Label.Group tag>
        {props.tagWeights.map(
          tagWeight => <TagWeightLabel id={tagWeight.id} color={tagWeight.color} text={tagWeight.tag} weight={tagWeight.weight} />
        )}
      </Label.Group>
      <TagWeightAdder options={props.options} onSubmit={props.onSubmit} />
    </div>
  )
}

class TagWeightAdder extends Component {
  state = {
    weight: '',
    tag: ''
  }

  handleChange = (event, {name, value}) => {
    if (name == 'weight' && value.match(/^[0-9]*$/)) {
      this.setState({weight: value})
    }
    if (name == 'tag') {
      this.setState({tag: value})
    }
  }

  handleSubmit = () => {
    const weight = this.state.weight
    const tag = this.state.tag
    this.setState({'weight': '', 'tag': ''})
    this.props.onSubmit({'weight': weight, 'tag': tag})
  }

  render () {
    return (
      <Form className='TagWeightAdder' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Button type='submit' circular icon='plus' />
          <Form.Input 
            name='weight' 
            width={2} 
            label='Weight' 
            placeholder='#' 
            value={this.state.weight} 
            onChange={this.handleChange} 
          />
          <Form.Select 
            name='tag' 
            width={4} 
            label='Tag' 
            placeholder='tag' 
            search
            options={this.props.options}
            value={this.state.tag} 
            onChange={this.handleChange} 
          />
        </Form.Group>
      </Form>
    )
  }
}

class TableEntryEditBlacklist extends Component {
  state = {
    tags: this.props.tags,
    options: this.props.options
  }

  static defaultProps = {
    tags: [],
    options: []
  }

  handleSubmit = ({tag}) => {
    console.log(tag)
    this.setState({
      tags: [
        ...this.state.tags,
        tag
      ].sort()
    })
  }

  render () {
    return (
      <div className='TableEntryEditBlacklist'>
        <Header as='h4' content='Blacklist' subheader='Exclude this result if any of the following tags are present' />
        <Label.Group tag color='red'>
          {this.state.tags.map(
            tag => <TagLabel tag={tag} />
          )}
          <Label>romantic<Icon name='delete' /></Label>
        </Label.Group>
        <BlacklistAdder options={this.state.options} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

class BlacklistAdder extends Component {
  state = {
    tag: ''
  }

  handleChange = (event, {name, value}) => {
    if (name == 'tag') {
      this.setState({tag: value})
    }
  }

  handleSubmit = () => {
    const tag = this.state.tag
    this.setState({'tag': ''})
    this.props.onSubmit({'tag': tag})
  }

  render() {
    return (
      <Form className='BlacklistAdder' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Button type='submit' circular label='' icon='plus' />
          <Form.Select 
            name='tag'
            width={4} 
            label='Tag' 
            placeholder='tag' 
            search
            options={this.props.options}
            value={this.state.value}
            onChange={this.handleChange} 
          />
        </Form.Group>
      </Form>
    )
  }
}

export {TableEntryEditModal}