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

export {BookCardsGroup}
