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
import {DirectInputTableCell} from './datatables'
import {SingleLineAdder} from './forms'
import {TableCodeLabel, TableEntriesCountLabel, TemplateLabel, TagLabel, TagWeightLabel} from './labels'
import {COLORS} from '../constants/colors'
import './components.css';

function TableDetailsSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content='Table Settings' subheader='Click pencil to edit' />
          <TableDetailsList {...props} />
        </Segment>
        <Segment>
          <TableDetailsLabels table={props.table} />
        </Segment>
      </Segment.Group>
    </Transition>
  );
}

function TableDetailsList(props) {
  return (
    <List size='large'>
      <TableDetailsListItem 
        header='Name' 
        content={props.table.name} 
        adjuster={props.nameAdjuster} 
        validation={props.nameValidation} 
        submitValidation={props.nameSubmitValidation} />
      <TableDetailsListItem 
        header='CODE' 
        content={props.table.code} 
        adjuster={props.codeAdjuster} 
        validation={props.codeValidation} 
        submitValidation={props.codeSubmitValidation} />
      <TableDetailsListItem 
        header='Description' 
        content={props.table.description} 
        adjuster={props.descriptionAdjuster} 
        validation={props.descriptionValidation} 
        submitValidation={props.descriptionSubmitValidation} />
    </List>
  );
}

class TableDetailsListItem extends Component {
  state = {
    editMode: false,
    value: this.props.content
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.content !== prevProps.content) {
      this.setState({value: this.props.content})
    }
  }

  handleClick = () => {
    this.setState({editMode: true})
  }

  handleBlur = () => {
    this.setState({value: this.props.content, editMode: false})
  }

  handleKeyDown = (event) => {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({value: this.props.content, editMode: false})
    }
  }

  handleChange = (event, {name, value}) => {
    const adjValue = this.props.adjuster(value)
    let error = undefined
    if (this.props.validation) {
      error = this.props.validation(adjValue, this.props.content)
    }
    if (!error) {
      this.setState({'value': adjValue})
    }
  }

  handleSubmit = (event) => {
    let error = undefined
    if (this.props.submitValidation) {
      error = this.props.submitValidation(this.props.value, this.props.content)
    }
    if (!error) {
      this.setState({editMode: false})
      this.props.onSubmit(this.props.value)
    }
    this.setState({value: this.props.content, editMode: false})
  }

  render() {
    return (
      <List.Item>
        <List.Content>
          <List.Header>{this.props.header}</List.Header>
          <List.Description onBlur={this.handleBlur}>
          {!this.state.editMode && this.props.content}   {!this.state.editMode && <Icon link name='pencil' onClick={this.handleClick} />}
          {this.state.editMode && 
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                focus
                size='tiny'
                autoFocus
                value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
            </Form>}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

function TableDetailsLabels(props) {
  return (
    <Label.Group>
      {props.table.entries && <TableEntriesCountLabel count={props.table.entries.length} />}
      <TableCodeLabel code={props.table.code} />
      {props.table.template && <TemplateLabel template={props.table.template.name} />}
    </Label.Group>
  )
}

export {TableDetailsSegment}
