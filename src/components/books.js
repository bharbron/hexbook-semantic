import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Button,
  Card,
  Dropdown,
  Form,
  Header,
  Icon,
  Label,
  List,
  Modal,
  Ref,
  Select,
  Transition
} from 'semantic-ui-react';
import {HiddenSubmitButton, InputErrorPopup} from './forms'
import {TableCodeLabel, TemplatePluginLabel, TemplatePropertyLabel} from './labels'
import {COLORS} from '../constants/colors'
import {REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'
import './components.css';

function BookCardsGroup(props) {
  return (
    <Card.Group 
      className='BookCardsGroup' 
      itemsPerRow='2' 
      doubling 
      children={
        props.books.map(
          book => 
            <BookCard 
              book={book}
              templatesByName={props.templatesByName}
              onSubmitSetting={props.onSubmitSetting}
              onSubmitTemplate={props.onSubmitTemplate}
              onRemoveTemplate={props.onRemoveTemplate}
            />
        )
      } 
    />
  )
}

function BookCard(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card className='BookCard'>
        <BookContentSettings 
          book={props.book} 
          onSubmit={(setting, value) => props.onSubmitSetting(setting, value, props.book)} 
        />
        <BookContentTemplates 
          book={props.book}
          templatesByName={props.templatesByName}
          onSubmit={props.onSubmitTemplate}
          onRemove={props.onRemoveTemplate}
        />
        <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <Dropdown.Menu direction='left'>
            <Dropdown.Item text='Delete this book' />
          </Dropdown.Menu>
        </Dropdown>
      </Card>
    </Transition>
  )
}

function BookContentSettings(props) {
  return(
    <Card.Content className='BookContentSettings'>
      <Card.Header>{props.book.name}</Card.Header>
      <Card.Description>
        <BookSettingList book={props.book} onSubmit={props.onSubmit} />
      </Card.Description>
    </Card.Content>
  )
}

function BookSettingList(props) {
  const sizeOptions = [
    {key: 'A4', value: 'A4', text: 'A4'},
    {key: 'A5', value: 'A5', text: 'A5'},
  ]
  return (
    <List size='large' className='BookSettingList'>
      <BookSettingSelect name='Size' setting='size' value={props.book.size} options={sizeOptions} onSubmit={props.onSubmit} />
    </List>
  )
}

class BookSettingSelect extends Component {
  state = {
    editMode: false
  }

  handleChange = (event, {name, value}) => {
    this.setState({editMode: false})
    this.props.onSubmit(this.props.setting, value)
  }

  handleClick = () => {
    this.setState({editMode: true})
  }

  handleBlur = () => {
    this.setState({editMode: false})
  }

  handleKeyDown = (event) => {
    //stop edit on escape
    if (event.keyCode === 27) {
      this.setState({editMode: false})
    }
  }

  render() {
    return (
      <List.Item key={this.props.setting} className='BookSettingSelect'>
        <List.Content>
          <List.Header>{this.props.name}</List.Header>
          <List.Description>
            {!this.state.editMode && this.props.value}  {!this.state.editMode && <Icon link name='pencil' onClick={this.handleClick} />}
            {this.state.editMode && 
              <Form>
                <Form.Group>
                  <Form.Select
                    name={this.props.name}
                    options={this.props.options}
                    value={this.props.value}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleBlur}
                  />
                </Form.Group>
              </Form>
            }
          </List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

function BookContentTemplates(props) {
  return (
    <Card.Content className='BookContentTemplates'>
      <BookTemplateList 
        book={props.book}
        onRemove={props.onRemove}
      />
      <BookTemplateAdder 
        book={props.book}
        templatesByName={props.templatesByName}
        onSubmit={props.onSubmit}
      />
    </Card.Content>
  )
}

function BookTemplateList(props) {
  return (
    <List size='large' className='BookTemplateList'>
      {props.book.templates.map(
        template => 
          <BookTemplateListItem template={template} book={props.book} onRemove={props.onRemove} />
        )
      }
    </List>
  )
}

function BookTemplateListItem(props) {
  return (
    <List.Item key={props.template.id} className='BookTemplateListItem'>
      <List.Icon name='puzzle' size='big' />
      <List.Content>
        <List.Header>{props.template.name}</List.Header>
        <List.Description>
          {props.template.description} <Icon link name='minus circle' color='grey' onClick={() => props.onRemove(props.template, props.book)} />
        </List.Description>
      </List.Content>
    </List.Item>
  )
}

class BookTemplateAdder extends Component {
  state = {value: null}

  templateOptions = () => {
    const bookTemplateNames = this.props.book.templates.map(template => template.name)
    const options = Object.keys(this.props.templatesByName).sort().map(
      name => {
        return {key: name, value: name, text: name}
      }
    )
    return options.filter(option => !bookTemplateNames.includes(option.value))
  }

  handleChange = (event, {name, value}) => {
    this.setState({value: value})
  }

  handleSubmit = () => {
    if (this.state.value) {
      const value = this.state.value
      this.setState({value: null})
      this.props.onSubmit(this.props.templatesByName[value], this.props.book)
    }
  }

  render() {
    return (
      <Form className='BookTemplateAdder' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Button 
            type='submit' 
            inline 
            circular 
            icon='plus' 
            disabled={!this.state.value}
          />
          <Form.Select 
            name='template'
            placeholder='Select a template'
            options={this.templateOptions()}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    )
  }
}

class BookInputModal extends Component {
  initialState = {
    name: {value: '', valid: false, error: null},
    size: {value: 'A5', valid: true, error: null},
  }

  state = {...this.initialState}

  sizeOptions = [
    {key: 'A4', value: 'A4', text: 'A4'},
    {key: 'A5', value: 'A5', text: 'A5'},
  ]

  nameRef = React.createRef()
  handleNameRef = nameNode => this.setState({nameNode})

  valuesValid = () => {
    return (this.state.name.valid && this.state.size.valid)
  }

  addButtonColor = () => {
    return (this.valuesValid()) ? COLORS.SUBMIT_BUTTON : null
  }

  handleCancel = () => {
    this.setState(this.initialState)
    this.props.onClose()
  }

  handleClose = () => {
    this.props.onClose()
  }

  handleSubmit = () => {
    if (this.valuesValid()) {
      const name = this.state.name.value
      const size = this.state.size.value
      this.setState(this.initialState)
      this.props.onSubmit(name, size)
    }
  }

  handleChange = (event, {name, value}) => {
    if (name === 'name') {
      if (value.match(REGEX.EMPTY)) {
        this.setState({name: {value: value, valid: false, error: ERRORS.REQUIRED}})
        return
      }
      if (value.match(REGEX.BOOK_NAME)) {
        if (this.props.booksByName[value]) {
          this.setState({name: {value: value, valid: true, error: ERRORS.BOOK_NAME_DUPLICATE}})
          return
        }
        this.setState({name: {value: value, valid: true, error: null}})
        return
      }
      this.setState({name: {value: value, valid: false, error: ERRORS.BOOK_NAME_INVALID_CHAR}})
      return
    }
    if (name === 'size') {
      this.setState({size: {value: value, valid: true, error: null}})
      return
    }
  }

  render() {
    return (
        <Modal size='tiny' open={this.props.open} onClose={this.handleClose} className='BookInputModal'>
          <Modal.Header style={{ borderBottom: '0px' }}>
            <Header as='h3' content='Add New Book' />
          </Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Ref innerRef={this.handleNameRef}>
                <Form.Input 
                  name='name'
                  label='Name'
                  error={this.state.name.error} 
                  autoFocus
                  transparent
                  placeholder='Enter name for the book...'
                  value={this.state.name.value}
                  onChange={this.handleChange}
                />
              </Ref>
              <InputErrorPopup context={this.state.nameNode} error={this.state.name.error} />
              <Form.Select 
                name='size'
                label='Size'
                placeholder='' 
                search
                options={this.sizeOptions}
                value={this.state.size.value}
                onChange={this.handleChange} 
              />
              <HiddenSubmitButton />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button className='modalSecondaryButton' onClick={this.handleCancel}>CANCEL</Button>
            <Button className='modalPrimaryButton' color={this.addButtonColor()} disabled={!(this.valuesValid())} onClick={this.handleSubmit}>ADD</Button>
          </Modal.Actions>
        </Modal>
    );
  }
}

export {BookCardsGroup, BookInputModal}
