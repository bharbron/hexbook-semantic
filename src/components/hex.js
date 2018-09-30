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

class HexEditModal extends Component {
  state = {
      changed: false,
      terrain: (this.props.hex) ? this.props.hex.terrain : undefined,
      territory: (this.props.hex) ? this.props.hex.territory : undefined,
      overrideEnabled: (this.props.hex && this.props.hex.entryDetails) ? true : false,
      entryDetails: (this.props.hex && this.props.hex.entryDetails) ? [...this.props.hex.entryDetails] : [],
  }

  static defaultProps = {
    header: 'Edit Hex',
    subheader: undefined,
  }

  primaryDisabled = () => {
    /*
    Determine whether or not the primary SAVE button should be enabled based on what data has been input or changed
    */
    return (this.state.changed ) ? false : true
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

  render () {
    return (
      <Modal open={this.props.open} onClose={this.handleClose} className='HexEditModal'>
        <Modal.Header style={{ borderBottom: '0px' }}>
          <Header as='h3' content={this.props.header} subheader={this.props.subheader} />
        </Modal.Header>
        <Modal.Content>
          <Divider horizontal>Basic</Divider>
          <HexEditBasic
            coordinates={this.props.coordinates}
            terrain={this.state.terrain}
            territory={this.state.territory}
            onChange={this.handleChangeBasic} 
          />
          <Divider horizontal>Advanced</Divider>
          <HexEditDetails
            enabled={this.state.limitEnabled}
            entryDetails={this.state.entryDetails} 
            onSubmit={this.handleSubmitDetails} 
            onRemove={this.handleRemoveDetails} 
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

function HexEditBasic(props) {
  return (
    <Form className='TableEntryEditBasic'>
      <Header as='h4' content='Basic' subheader='Generic weight and main text for this result.' />
      <Form.Group>
        <Form.Input
          name='coordinates'
          transparent
          inline
          width={4}
          placeholder='coordinates'
          icon='tag'
          iconPosition='lett'
          value={props.coordinates}
        />
        <Form.Input
          name='terrain'
          inline
          width={6}
          placeholder='terrain'
          icon='tag'
          iconPosition='lett'
          value={props.terrain}
          onChange={props.onChange}
        />
        <Form.Input
          name='territory'
          inline
          width={6}
          placeholder='territory'
          icon='tag'
          iconPosition='lett'
          value={props.territory}
          onChange={props.onChange}
        />
        </Form.Group>
    </Form>
  );
}

function HexEditDetails(props) {
  return (
    <div className='TableEntryEditDetails'>
      <Header as='h4' content='Hex Definition Override' subheader='Override the global hex definition with details specific to this hex' />
      <Form>
        <Form.Radio
          toggle
          name='overrideToggle'
          value={props.enabled}
          checked={props.enabled}
          onChange={props.onChange}
        />
      </Form>
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

export {HexEditModal}
