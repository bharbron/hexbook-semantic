import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Button,
  Card,
  Form,
  Header,
  Label,
  List,
  Modal,
  Ref,
  Transition
} from 'semantic-ui-react';
import {HiddenSubmitButton, InputErrorPopup} from './forms'
import {TableCodeLabel, TemplatePluginLabel, TemplatePropertyLabel} from './labels'
import {COLORS} from '../constants/colors'
import {REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'
import './components.css';

function TemplateCardsGroup(props) {
  return (
    <Card.Group 
      itemsPerRow='2' 
      doubling 
      children={props.templates.map(template => <TemplateCard template={template} onClick={props.onClick} />)} 
      className='TemplateCardsGroup' 
    />
  )
}

function TemplateCard(props) {
  const PreviewComponent = props.template.plugin.preview
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card link className='TemplateCard' onClick={() => props.onClick(props.template)}>
        <Card.Content header={props.template.name} meta={props.template.description} />
        <Card.Content>
          <PreviewComponent template={props.template} />
        </Card.Content>
        <Card.Content extra>
          <TemplateLabels template={props.template} />
        </Card.Content>
      </Card>
    </Transition>
  )
}

function TemplateLabels(props) {
  return (
    <Label.Group>
      <TableCodeLabel code={props.template.table.code} />
      <TemplatePluginLabel plugin={props.template.plugin} />
      {Object.keys(props.template.properties).map(
        p => <TemplatePropertyLabel property={p} value={props.template.properties[p]} />
      )}
    </Label.Group>
  )
}

class TemplateInputModal extends Component {
  static defaultProps = {
    open: false,
    onSubmit: (name, description) => console.log(`default onSubmit`)
  }
  
  state = {
    value: {name: '', description: '', plugin: '', table: ''},
    valid: {name: false, description: false, plugin: false, table: false},
    error: {name: null, description: null, plugin: false, table: null},
  }

  nameRef = React.createRef()
  descriptionRef = React.createRef()

  pluginOptions = Object.keys(this.props.pluginsByName).sort().map(
    p => {
      return {key: p, value: p, text: p}
    }
  )

  tableOptions = Object.keys(this.props.tablesByCode).sort().map(
    t => {
      return {key: t, value: t, text: t}
    }
  )

  addButtonColor = () => {
    return (this.state.valid.name && this.state.valid.description && this.state.valid.plugin && this.state.valid.table) ? COLORS.SUBMIT_BUTTON : null
  }

  addButtonDisabled = () => {
    return (this.state.valid.name && this.state.valid.description && this.state.valid.plugin && this.state.valid.table) ? false : true
  }

  handleChange = (event, {name, value}) => {
    if (name === 'name') {
      if (value.match(REGEX.EMPTY)) {
        // name is required
        this.setState({
          value: {...this.state.value, 'name': value},
          valid: {...this.state.valid, 'name': false},
          error: {...this.state.error, 'name': ERRORS.REQUIRED}
        })
        return
      }
      if (value.match(REGEX.TEMPLATE_NAME)) {
        if (this.props.templatesByName[value]) {
          this.setState({
            value: {...this.state.value, 'name': value},
            valid: {...this.state.valid, 'name': false},
            error: {...this.state.error, 'name': ERRORS.TEMPLATE_NAME_DUPLICATE}
          })
          return
        }
        this.setState({
          value: {...this.state.value, 'name': value},
          valid: {...this.state.valid, 'name': true},
          error: {...this.state.error, 'name': null}
        })
        return
      }
      this.setState({
        value: {...this.state.value, 'name': value},
        valid: {...this.state.valid, 'name': false},
        error: {...this.state.error, 'name': ERRORS.TEMPLATE_NAME_INVALID_CHAR}
      })
      return
    }
    if (name === 'description') {
      if (value.match(REGEX.EMPTY)) {
        // description is not required, allowed to be empty
        this.setState({
          value: {...this.state.value, 'description': value},
          valid: {...this.state.valid, 'description': true},
          error: {...this.state.error, 'description': null}
        })
        return
      }
      if (value.match(REGEX.TEMPLATE_DESCRIPTION)) {
        this.setState({
          value: {...this.state.value, 'description': value},
          valid: {...this.state.valid, 'description': true},
          error: {...this.state.error, 'description': null}
        })
        return
      }
      this.setState({
        value: {...this.state.value, 'description': value},
        valid: {...this.state.valid, 'description': false},
        error: {...this.state.error, 'description': ERRORS.TEMPLATE_DESCRIPTION_INVALID_CHAR}
      })
      return
    }
    if (name === 'plugin') {
      this.setState({
        value: {...this.state.value, 'plugin': value},
        valid: {...this.state.valid, 'plugin': true},
      })
      return
    }
    if (name === 'table') {
      this.setState({
        value: {...this.state.value, 'table': value},
        valid: {...this.state.valid, 'table': true},
      })
      return
    }
  }

  handleSubmit = () => {
    if (this.state.valid.name && this.state.valid.description && this.state.valid.plugin && this.state.valid.table) {
      const value = this.state.value
      this.setState({
        value: {name: '', description: '', plugin: '', table: ''},
        valid: {name: false, description: false, plugin: false, table: false},
        error: {name: null, description: null, plugin: false, table: null},
      })
      this.props.onSubmit(value)
    }
  }

  handleClose = () => {
    this.props.onClose()
  }

  handleCancel = () => {
    this.setState({
      value: {name: '', description: '', plugin: '', table: ''},
      valid: {name: false, description: false, plugin: false, table: false},
      error: {name: null, description: null, plugin: false, table: null},
    })
    this.props.onClose()
  }

  handleNameRef = nameNode => this.setState({nameNode})
  handleDescriptionRef = descriptionNode => this.setState({descriptionNode})

  render() {
    return (
        <Modal size='tiny' open={this.props.open} onClose={this.handleClose} className='TemplateInputModal'>
          <Modal.Header style={{ borderBottom: '0px' }}>
            <Header as='h3' content='Add New Template' />
          </Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Ref innerRef={this.handleNameRef}>
                <Form.Input 
                  name='name'
                  label='Name'
                  error={this.state.error.name} 
                  autoFocus
                  transparent
                  placeholder='Enter name for the template...'
                  value={this.state.value.name}
                  onChange={this.handleChange}
                />
              </Ref>
              <InputErrorPopup context={this.state.nameNode} error={this.state.error.name} />
              <Ref innerRef={this.handleDescriptionRef}>
                <Form.Input
                  name='description'
                  label='Description'
                  error={this.state.error.description} 
                  transparent
                  placeholder='Enter description for the template...' 
                  value={this.state.value.description}
                  onChange={this.handleChange}
                />
              </Ref>
              <InputErrorPopup context={this.state.descriptionNode} error={this.state.error.description} />
              <Form.Select 
                name='plugin'
                label='Template Type'
                placeholder='' 
                search
                options={this.pluginOptions}
                value={this.state.value.plugin}
                onChange={this.handleChange} 
              />
              <Form.Select 
                name='table'
                label='Table Code'
                placeholder='' 
                search
                options={this.tableOptions}
                value={this.state.value.table}
                onChange={this.handleChange} 
              />
              <HiddenSubmitButton />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button className='modalSecondaryButton' onClick={this.handleCancel}>CANCEL</Button>
            <Button className='modalPrimaryButton' color={this.addButtonColor()} disabled={this.addButtonDisabled()} onClick={this.handleSubmit}>ADD</Button>
          </Modal.Actions>
        </Modal>
    );
  }
}

export {TemplateCardsGroup, TemplateInputModal}
