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
import {
  nameAdjuster, nameValidation,
  codeAdjuster, codeValidation,
  descriptionAdjuster, descriptionValidation
} from '../helpers/validation'
import './components.css';

function TableDetailsSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content='Table Settings' subheader='Click below to edit' />
          <TableDetailsList table={props.table} />
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
      <TableDetailsListItem header='Name' contents={props.table.name} adjuster={nameAdjuster} validation={nameValidation} />
      <TableDetailsListItem header='CODE' contents={props.table.code} adjuster={codeAdjuster} validation={codeValidation} />
      <TableDetailsListItem header='Description' contents={props.table.description} adjuster={descriptionAdjuster} validation={descriptionValidation} />
    </List>
  );
}

class TableDetailsListItem extends Component {
  state = {
    editMode: false,
    value: this.props.contents
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.contents !== prevProps.contents) {
      this.setState({value: this.props.contents})
    }
  }

  handleClick = () => {
    this.setState({editMode: true})
  }

  handleBlur = () => {
    this.setState({value: this.props.contents, editMode: false})
  }

  handleKeyDown = (event) => {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({value: this.props.contents, editMode: false})
    }
  }

  handleChange = (event, {name, value}) => {
    const adjValue = this.props.adjuster(value)
    let error = undefined
    if (this.props.validation) {
      error = this.props.validation(adjValue)
    }
    if (!error) {
      this.setState({'value': adjValue})
    }
  }

  handleSubmit = (event) => {
    this.setState({editMode: false})
    alert('handleSubmit')
  }

  render() {
    return (
      <List.Item>
        <List.Content>
          <List.Header>{this.props.header}</List.Header>
          <List.Description onBlur={this.handleBlur}>
          {!this.state.editMode && this.props.contents}   {!this.state.editMode && <Icon link name='pencil' onClick={this.handleClick} />}
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
