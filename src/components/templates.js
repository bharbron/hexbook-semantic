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
import {InputErrorPopup} from './forms'
import {TableCodeLabel, TemplatePluginLabel, TemplatePropertyLabel} from './labels'
import {COLORS} from '../constants/colors'
import './components.css';

function TemplateCardsGroup(props) {
  return (
    <Card.Group 
      itemsPerRow='2' 
      doubling 
      children={props.templates.map(template => <TemplateCard template={template} plugin={props.plugins[template.pluginId]} />)} 
      className='TemplateCardsGroup' 
    />
  )
}

function TemplateCard(props) {
  const PreviewComponent = props.plugin.preview
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card link className='TemplateCard'>
        <Card.Content header={props.template.name} meta={props.template.description} />
        <Card.Content>
          <PreviewComponent template={props.template} />
        </Card.Content>
        <Card.Content extra>
          <TemplateLabels template={props.template} plugin={props.plugin} />
        </Card.Content>
      </Card>
    </Transition>
  )
}

function TemplateLabels(props) {
  return (
    <Label.Group>
      <TableCodeLabel code={props.template.table} />
      <TemplatePluginLabel template='Index' color={props.plugin.color} />
      {Object.keys(props.template.properties).map(
        p => <TemplatePropertyLabel property={p} value={props.template.properties[p]} />
      )}
    </Label.Group>
  )
}

class TemplateInputModal extends Component {
  state = {
    value: {name: '', description: '', plugin: '', table: ''},
    valid: {name: false, description: false, plugin: false, table: false},
    error: {name: null, description: null, plugin: false, table: null},
  }

  static defaultProps = {
    open: false,
    onSubmit: (name, description) => console.log(`default onSubmit`)
  }

  addButtonColor = () => {
    return (this.state.valid.name && this.state.valid.description && this.state.valid.plugin && this.state.valid.table) ? COLORS.SUBMIT_BUTTON : null
  }

  addButtonDisabled = () => {
    return (this.state.valid.name && this.state.valid.description && this.state.valid.plugin && this.state.valid.table) ? false : true
  }

  nameRef = React.createRef()
  descriptionRef = React.createRef()

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
              <InputErrorPopup context={this.state.codeNode} error={this.state.error.code} />
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
                inline
                placeholder='Template Type' 
                search
                options={this.props.pluginOptions}
                value={this.state.value.plugin}
                onChange={this.handleChange} 
              />
              <Form.Select 
                name='table'
                inline
                placeholder='Table' 
                search
                options={this.props.tableOptions}
                value={this.state.value.table}
                onChange={this.handleChange} 
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button id='TableInputModalCancel' onClick={this.handleCancel}>CANCEL</Button>
            <Button id='TableInputModalSave' color={this.addButtonColor()} disabled={this.addButtonDisabled()} onClick={this.handleSubmit}>ADD</Button>
          </Modal.Actions>
        </Modal>
    );
  }
}

export {TemplateCardsGroup, TemplateInputModal}
