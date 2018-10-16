import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Button,
  Card,
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
  console.log('BookCardsGroup')
  console.log('props')
  console.log(props)
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
              onSubmitSetting={props.onSubmitSetting}
            />
        )
      } 
    />
  )
}

function BookCard(props) {
  console.log('BookCard')
  console.log('props')
  console.log(props)
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card raised className='BookCard'>
        <BookContentSettings 
          book={props.book} 
          onSubmit={(setting, value) => props.onSubmitSetting(setting, value, props.book)} 
        />

        <Card.Content>
          <List size='large'>
            <List.Item>
              <List.Icon name='puzzle' size='big' />
              <List.Content>
                <List.Header>Hexes</List.Header>
                <List.Description>Template for printing the list of hexes <Icon link name='minus circle' color='grey' /></List.Description>
              </List.Content>
            </List.Item>
          </List>
          <Icon link name='plus circle' size='large' color='grey' />
          <Select placeholder='Select a template' />
        </Card.Content>

      </Card>
    </Transition>
  )
}

function BookContentSettings(props) {
  return(
    <Card.Content>
      <Card.Header>{props.book.name}</Card.Header>
      <Card.Description>
        <BookSettingList book={props.book} onSubmit={props.onSubmit} />
      </Card.Description>
    </Card.Content>
  )
}

function BookSettingList(props) {
  const sizeOptions = [{key: 'A5', value: 'A5', text: 'A5'}]
  return (
    <List bulleted className='BookSettingList'>
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
      <List.Item key={this.props.setting}>
        {this.props.name}: {!this.state.editMode && this.props.value}
        {!this.state.editMode && <Icon link name='pencil' onClick={this.handleClick} />}
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
      </List.Item>
    )
  }
}

export {BookCardsGroup}
