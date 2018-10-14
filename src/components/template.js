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
  Ref,
} from 'semantic-ui-react';
import {InputErrorPopup} from './forms'
import {TableCodeLabel, TemplatePluginLabel, TemplatePropertyLabel} from './labels'
import {COLORS} from '../constants/colors'
import {REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'
import './components.css';

const uuidv4 = require('uuid/v4');

class TemplateEditModal extends Component {
  state = {
      changed: false,
      name: {
        value: (this.props.template) ? this.props.template.name : '',
        valid: (this.props.template && this.props.template.name),
        error: null
      },
      description: {
        value: (this.props.template) ? this.props.template.description : '',
        valid: true, 
        error: null
      },
      properties: {
        value: (this.props.template) ? this.props.template.properties : {},
        valid: true, 
        error: null
      },
      metadata: {
        value: (this.props.template) ? this.props.template.metadata : {},
        valid: true, 
        error: null
      },
  }

  primaryDisabled = () => {
    /*
    Determine whether or not the primary SAVE button should be enabled based on what data has been input or changed
    */
    return (this.state.changed && this.state.name.valid && this.state.description.valid && this.state.properties.valid && this.state.metadata.valid) ? false : true
  }

  handleClose = () => {
    /*
    Closing the modal
    */
    // Reset state to defaults
    this.props.onClose()
  }

  handleCancel = () => {
    /*
    Clicking the modal cancel button
    */
    // Reset state to defaults
    this.props.onClose()
  }

  handleSubmit = () => {
    if (this.state.changed, this.state.name.valid && this.state.description.valid && this.state.properties.valid && this.state.metadata.valid) {
      // capture the previous template
      const prevTemplate = {...this.props.template} 
      // assemble the updated template
      const template = {
        ...this.props.template,
        name: this.state.name,
        description: this.state.description,
        properties: {...this.state.properties},
        metadata: {...this.state.metadata},
      }
      this.props.onSubmit(template, prevTemplate)
    }
  }

  handleChangeBasic = (event, {name, value}) => {
    if (name === 'name') {
      if (value.match(REGEX.EMPTY)) {
        // name is required
        this.setState({
          changed: true,
          name: {value: value, valid: false, error: ERRORS.REQUIRED}
        })
        return
      }
      if (value.match(REGEX.TEMPLATE_NAME)) {
        if (value !== this.props.template.name && this.props.templatesByName[value]) {
          this.setState({
            changed: true,
            name: {value: value, valid: false, error: ERRORS.TEMPLATE_NAME_DUPLICATE}
          })
          return
        }
        this.setState({
          changed: true,
          name: {value: value, valid: true, error: null}
        })
        return
      }
      this.setState({
        changed: true,
        name: {value: value, valid: false, error: ERRORS.TEMPLATE_NAME_INVALID_CHAR}
      })
      return
    }
    if (name === 'description') {
      if (value.match(REGEX.EMPTY)) {
        // description is not required, allowed to be empty
        this.setState({
          changed: true,
          description: {value: value, valid: true, error: null}
        })
        return
      }
      if (value.match(REGEX.TEMPLATE_DESCRIPTION)) {
        this.setState({
          changed: true,
          description: {value: value, valid: true, error: null}
        })
        return
      }
      this.setState({
        changed: true,
        description: {value: value, valid: false, error: ERRORS.TEMPLATE_DESCRIPTION_INVALID_CHAR}
      })
      return
    }
  }

  handleChangeProperties = ({value, valid, error}) => {
    console.log('components.template.TemplateEditModal.handleChangeProperties')
    console.log('value')
    console.log(value)
    console.log('valid')
    console.log(valid)
    console.log('error')
    console.log(error)
    this.setState({
      changed: true,
      properties: {value: value, valid: valid, error: error}
    })
  }

  handleChangeMetadata = ({value, valid, error}) => {
    console.log('components.template.TemplateEditModal.handleChangeMetadata')
    console.log('value')
    console.log(value)
    console.log('valid')
    console.log(valid)
    console.log('error')
    console.log(error)
    this.setState({
      changed: true,
      metadata: {value: value, valid: valid, error: error}
    })
  }

  render () {
    const EditPropertiesComponent = (this.props.template.id) ? this.props.template.plugin.editProperties : undefined
    const EditMetadataComponent = (this.props.template.id) ? this.props.template.plugin.editMetadata : undefined
    return (
      <Modal open={this.props.open} onClose={this.handleClose} className='TemplateEditModal'>
        <Modal.Header style={{ borderBottom: '0px' }}>
          <Header as='h3' content={this.props.template.name + ' > Edit Template'} />
        </Modal.Header>
        <Modal.Content>
          <TemplateEditBasic
            name={this.state.name}
            disabled={this.props.template.id === 'HEX'} // Basic settings for the default 'HEX' template are set in place
            description={this.state.description}
            onChange={this.handleChangeBasic} 
          />
          <EditPropertiesComponent template={this.props.template} onChange={this.handleChangeProperties} />
          <EditMetadataComponent template={this.props.template} onChange={this.handleChangeMetadata} />
        </Modal.Content>
        <Modal.Actions>
          <Button id='TemplateEditModalCancel' onClick={this.handleCancel}>CANCEL</Button>
          <Button 
            id='TemplateEditModalSave'
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

class TemplateEditBasic extends Component {
  state = {}

  nameRef = React.createRef()
  descriptionRef = React.createRef()

  handleNameRef = nameNode => this.setState({nameNode})
  handleDescriptionRef = descriptionNode => this.setState({descriptionNode})

  render() {
    return (
      <Form className='TemplateEditBasic'>
        <Form.Group>
          <Ref innerRef={this.handleNameRef}>
            <Form.Input 
              name='name'
              label='Name'
              inline
              width={4} 
              disabled={this.props.disabled}
              error={this.props.name.error} 
              autoFocus
              placeholder='Enter name for the template...'
              value={this.props.name.value}
              onChange={this.props.onChange}
            />
          </Ref>
          <InputErrorPopup context={this.state.nameNode} error={this.props.name.error} />
          <Ref innerRef={this.handleDescriptionRef}>
            <Form.Input
              name='description'
              label='Description'
              inline
              width={12} 
              disabled={this.props.disabled}
              error={this.props.description.error}
              placeholder='Enter description for the template...' 
              value={this.props.description.value}
              onChange={this.props.onChange}
            />
          </Ref>
          <InputErrorPopup context={this.state.descriptionNode} error={this.props.description.error} />
        </Form.Group>
      </Form>
    )
  }
}

export {TemplateEditModal}
