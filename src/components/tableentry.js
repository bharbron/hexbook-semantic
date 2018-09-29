import React, {Component} from 'react';
import {
  Button,
  Divider,
  Form,
  Header,
  Icon,
  Label,
  List,
  Modal,
} from 'semantic-ui-react';
import './components.css';
import {TagLabel, TagWeightLabel} from './labels'
import {COLORS} from '../constants/colors'
import {REGEX} from '../constants/regex'

const uuidv4 = require('uuid/v4');

function initializeTagOptions(allTagIds, tagWeights, tagBlacklist) {
  /*
  Create the list of initial tagOptions by removing any tags from the list of all tagsIDs that
  are already in the list of tagWeights or the tagBlacklist 
  */
  const tagWeightTags = []
  tagWeights.map(tw => tagWeightTags.push(tw.tag))
  const tagOptionsTags = [
    ...allTagIds.filter(t => !tagWeightTags.includes(t) && !tagBlacklist.includes(t))
  ].sort()
  const tagOptions = []
  tagOptionsTags.map(t => tagOptions.push({key: t, value: t, text: t}))
  return tagOptions
}

class TableEntryEditModal extends Component {
  state = {
      changed: false,
      weight: (this.props.tableEntry) ? this.props.tableEntry.weight : '',
      text: (this.props.tableEntry) ? this.props.tableEntry.text : '',
      entryDetails: (this.props.tableEntry) ? [...this.props.tableEntry.entryDetails] : [],
      tagOptions: (this.props.tableEntry) ? 
        initializeTagOptions(this.props.allTagIds, this.props.tableEntry.tagWeights, this.props.tableEntry.tagBlacklist) : 
        [],
      tagWeights: (this.props.tableEntry) ? [...this.props.tableEntry.tagWeights] : [],
      tagBlacklist: (this.props.tableEntry) ? [...this.props.tableEntry.tagBlacklist] : [],
      limitEnabled: (this.props.tableEntry && this.props.tableEntry.limit) ? true : false,
      limit: (this.props.tableEntry && this.props.tableEntry.limit) ? this.props.tableEntry.limit : '',
  }

  static initializeTagOptions = (allTagIds, tagWeights, tagBlacklist) => {
    /*
    Create the list of initial tagOptions by removing any tags from the list of all tagsIDs that
    are already in the list of tagWeights or the tagBlacklist 
    */
    const tagWeightTags = []
    tagWeights.map(tw => tagWeightTags.push(tw.tag))
    const tagOptionsTags = [
      ...allTagIds.filter(t => !tagWeightTags.includes(t) && !tagBlacklist.includes(t))
    ].sort()
    const tagOptions = []
    tagOptionsTags.map(t => tagOptions.push({key: t, value: t, text: t}))
    return tagOptions
  }

  primaryDisabled = () => {
    /*
    Determine whether or not the primary SAVE button should be enabled based on what data has been input or changed
    */
    return (this.state.changed && this.state.weight && this.state.text) ? false : true
  }

  handleClose = () => {
    /*
    Closing the modal
    */
    this.props.onClose()
  }

  handleCancel = () => {
    /*
    Clicking the modal cancel button
    */
    this.props.onClose()
  }

  handleSubmit = () => {
    /*
    Clicking the save button
    Assemble all the bits of data into a tableEntry object
    Send that to this.props.onSubmit()
    */
    const tableEntry = {
      ...this.props.tableEntry,
      weight: this.state.weight,
      text: this.state.text,
      entryDetails: [...this.state.entryDetails],
      tagWeights: [...this.state.tagWeights],
      tagBlacklist: [...this.state.tagBlacklist],
      limit: (this.state.limitEnabled) ? this.state.limit : null
    }
    this.props.onSubmit(tableEntry)
  }

  handleChangeBasic = (event, {name, value}) => {
    /*
    Handling input in the basic weight or text fields
    */
    if (name === 'weight' && value.match(REGEX.INTEGER)) {
      this.setState({weight: value, changed: true})
    }
    if (name === 'text') {
      this.setState({text: value, changed: true})
    }
  }

  handleSubmitDetails = (text) => {
    /*
    Add a newly submitted entry template detail.
    Need to assign a new uuid to it so we can track it.
    */
    this.setState({
      changed: true,
      entryDetails: [
        ...this.state.entryDetails,
        {id: uuidv4(), 'text': text}
      ]
    })
  }

  handleRemoveDetails = (id) => {
    /*
    Remove an entry detail based on the given id (uuid)
    */
    this.setState({
      changed: true,
      entryDetails: [
        ...this.state.entryDetails.filter(detail => detail.id !== id)
      ]
    })
  }

  handleSubmitTagWeight = ({tag, weight}) => {
    /*
    Add a newly submitted weighting by tag.
    Need to assign a new uuid to it so we can track it.
    Remove the tag from the remaining tagOptions
    */
    this.setState({
      changed: true,
      tagWeights: [
        ...this.state.tagWeights,
        {
          id: uuidv4(),
          tag: tag,
          weight: weight,
        }
      ].sort(this.compareTagWeights),
      tagOptions: [
        ...this.state.tagOptions.filter(tagOption => tagOption.key !== tag)
      ]
    })
  }

  compareTagWeights = (a, b) => {
    /*
    tagWeights is an array of objects, so we can't do a straight .sort() on the array
    We need to provide a comparison function to compare specific keys in the objects
    */
    if (a.tag < b.tag) {
      return -1
    }
    if (a.tag > b.tag) {
      return 1
    }
    return 0
  }

  handleRemoveTagWeight = (tagWeight) => {
    /*
    Remove the given tagWeight
    We receive a full tagWeight object as input, as we need information on multiple properties of the object
    Make sure to add the tag back to the available tagOptions when done
    */
    this.setState({
      changed: true,
      tagWeights: [
        ...this.state.tagWeights.filter(tw => tw.id !== tagWeight.id)
      ],
      tagOptions: [
        ...this.state.tagOptions,
        {key: tagWeight.tag, value: tagWeight.tag, text: tagWeight.tag}
      ].sort(this.compareTagOptions)
    })
  }

  compareTagOptions = (a, b) => {
    /*
    tagOptions is an array of objects, so we can't do a straight .sort() on the array
    We need to provide a comparison function to compare specific keys in the objects
    */
    if (a.key < b.key) {
      return -1
    }
    if (a.key > b.key) {
      return 1
    }
    return 0
  }

  handleSubmitBlacklist = (tag) => {
    /*
    Add the given tag to the blacklist
    tagBlacklist is simply an array of tag names, so nothing fancy
    Make sure to remove the tag from the array of available tagOptions when done
    */
    this.setState({
      changed: true,
      tagBlacklist: [
        ...this.state.tagBlacklist,
        tag
      ].sort(), 
      tagOptions: [
        ...this.state.tagOptions.filter(tagOption => tagOption.key !== tag)
      ]
    })
  }

  handleRemoveBlacklist = (tag) => {
    /*
    Remove the given tag from the blacklist
    Make sure to add the tag back to the array of available tagOptions when done
    */
    this.setState({
      changed: true,
      tagBlacklist: [
        ...this.state.tagBlacklist.filter(t => t !== tag)
      ],
      tagOptions: [
        ...this.state.tagOptions,
        {key: tag, 'value': tag, text: tag}
      ].sort(this.compareTagOptions)
    })
  }

  handleChangeLimit = (event, {name, value}) => {
    /*
    Manages changes to the Max Occurences section
    */
    if (name === 'limitToggle') {
      this.setState({limitEnabled: !this.state.limitEnabled, changed: true})
    }
    if (name === 'limit' && value.match(REGEX.INTEGER)) {
      this.setState({limit: value, changed: true})
    }
  }

  render () {
    return (
      <Modal open={this.props.open} onClose={this.handleClose} className='TableEntryEditModal'>
        <Modal.Header style={{ borderBottom: '0px' }}>
          <Header as='h3' content={this.props.header} subheader={this.props.subheader} />
        </Modal.Header>
        <Modal.Content>
          <Divider horizontal>Required</Divider>
          <TableEntryEditBasic weight={this.state.weight} text={this.state.text} onChange={this.handleChangeBasic} />
          <Divider horizontal>Optional</Divider>
          <TableEntryEditDetails 
            entryDetails={this.state.entryDetails} 
            onSubmit={this.handleSubmitDetails} 
            onRemove={this.handleRemoveDetails} 
          />
          <TableEntryEditTagWeight 
            tagWeights={this.state.tagWeights}
            colorsByTag={this.props.colorsByTag}
            options={this.state.tagOptions} 
            onSubmit={this.handleSubmitTagWeight} 
            onRemove={this.handleRemoveTagWeight} 
          />
          <TableEntryEditBlacklist 
            tagBlacklist={this.state.tagBlacklist} 
            options={this.state.tagOptions} 
            onSubmit={this.handleSubmitBlacklist} 
            onRemove={this.handleRemoveBlacklist} 
          />
          <TableEntryEditLimit 
            enabled={this.state.limitEnabled}
            limit={this.state.limit}
            onChange={this.handleChangeLimit}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button id='TextAreaInputModalCancel' onClick={this.handleCancel}>CANCEL</Button>
          <Button 
            id='TextAreaInputModalSave' 
            primary={!this.primaryDisabled()} 
            disabled={this.primaryDisabled()} 
            onClick={this.handleSubmit}
          >
            SAVE
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

function TableEntryEditBasic(props) {
  return (
    <Form className='TableEntryEditBasic'>
      <Header as='h4' content='Basic' subheader='Generic weight and main text for this result.' />
      <Form.Group>
        <Form.Input 
          name='weight' 
          inline 
          width={3} 
          placeholder='Weight'
          icon='balance scale'
          iconPosition='left'
          value={props.weight} 
          onChange={props.onChange}
        />
        <Form.Input name='text' inline width={13} placeholder='Main text for this result on the table' value={props.text} onChange={props.onChange} />
      </Form.Group>
    </Form>
  );
}

function TableEntryEditDetails(props) {
  return (
    <div className='TableEntryEditDetails'>
      <Header as='h4' content='Template Details' subheader='Additional details for use by any directly attached templates.' />
      <List bulleted size='large'>
        {props.entryDetails.map(
          entryDetail => <EntryDetailListItem entryDetail={entryDetail} onRemove={props.onRemove} />
        )}
      </List>
      <EntryDetailAdder onSubmit={props.onSubmit} />
    </div>
  )
}

function EntryDetailListItem(props) {
  return (
    <List.Item key={props.entryDetail.id}>
      {props.entryDetail.text} <Icon link name='minus circle' color='grey' onClick={() => props.onRemove(props.entryDetail.id)} />
    </List.Item>
  )
}

class EntryDetailAdder extends Component {
  state = {
    value: ''
  }

  adderDisabled = () => {
    return (this.state.value) ? false : true
  }

  handleChange = (event, {name, value}) => {
    this.setState({value: value})
  }

  handleSubmit = () => {
    const value = this.state.value
    this.setState({value: ''})
    this.props.onSubmit(value)
  }

  render () {
    return (
      <Form className='EntryDetailAdder' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Button 
            type='submit' 
            inline 
            circular 
            icon='plus' 
            disabled={this.adderDisabled()}
          />
          <Form.Input
            name='newDetail'
            width={16}
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
      <Header as='h4' content='Weights by tag' subheader='Will increase the weight of this result for each matching tag below.' />
      <Label.Group tag size='large'>
        {props.tagWeights.map(
          tagWeight => <TagWeightLabel 
            id={tagWeight.id} 
            color={props.colorsByTag[tagWeight.tag]} 
            text={tagWeight.tag} 
            weight={tagWeight.weight} 
            onRemove={() => props.onRemove(tagWeight)}
          />
        )}
      </Label.Group>
      <TagWeightAdder options={props.options} onSubmit={props.onSubmit} />
    </div>
  )
}

class TagWeightAdder extends Component {
  state = {
    weight: '',
    tag: '',
  }

  adderDisabled = () => {
    return (this.state.weight && this.state.tag) ? false : true
  }

  handleChange = (event, {name, value}) => {
    if (name === 'weight' && value.match(REGEX.INTEGER)) {
      this.setState({weight: value})
    }
    if (name === 'tag') {
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
          <Form.Button 
            type='submit' 
            inline 
            circular 
            icon='plus'
            disabled={this.adderDisabled()}
          />
          <Form.Select 
            name='tag' 
            inline
            placeholder='Tag' 
            search
            options={this.props.options}
            value={this.state.tag} 
            onChange={this.handleChange} 
          />
          <Form.Input 
            name='weight'
            inline
            width={3} 
            icon='balance scale'
            iconPosition='left'
            placeholder='Weight' 
            value={this.state.weight} 
            onChange={this.handleChange} 
          />
        </Form.Group>
      </Form>
    )
  }
}

function TableEntryEditBlacklist(props) {
  return (
    <div className='TableEntryEditBlacklist'>
      <Header as='h4' content='Blacklist' subheader='Exclude this result if any of the following tags are present.' />
      <Label.Group tag color={COLORS.BLACKLIST_TAG} size='large'>
        {props.tagBlacklist.map(
          tag => <TagLabel tag={tag} onRemove={() => props.onRemove(tag)} />
        )}
      </Label.Group>
      <BlacklistAdder options={props.options} onSubmit={props.onSubmit} />
    </div>
  )
}

class BlacklistAdder extends Component {
  state = {
    tag: ''
  }

  adderDisabled = () => {
    return (this.state.tag) ? false : true
  }

  handleChange = (event, {name, value}) => {
    if (name === 'tag') {
      this.setState({tag: value})
    }
  }

  handleSubmit = () => {
    const tag = this.state.tag
    this.setState({'tag': ''})
    this.props.onSubmit(tag)
  }

  render() {
    return (
      <Form className='BlacklistAdder' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Button 
            type='submit' 
            inline 
            circular 
            icon='plus'
            disabled={this.adderDisabled()}
          />
          <Form.Select 
            name='tag'
            inline
            placeholder='Tag' 
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

function TableEntryEditLimit(props) {
  return (
    <Form className='TableEntryEditLimit'>
      <Header as='h4' content='Maximum occurrences' subheader='If enabled, will put a limit on the maximum number of times this result can be rolled on the table.' />
      <Form.Group>
        <Form.Radio 
          toggle
          name='limitToggle'
          value={props.enabled}
          checked={props.enabled}
          onChange={props.onChange}
        />
        <Form.Input 
          name='limit' 
          inline 
          width={3} 
          icon='stop circle'
          iconPosition='left'
          placeholder='Limit'
          disabled={!props.enabled}
          value={props.limit}
          onChange={props.onChange}
        />
      </Form.Group>
    </Form>
  )
}

export {TableEntryEditModal}
