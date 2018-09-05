import React, { Component } from 'react';
import {
  Form,
  Table
} from 'semantic-ui-react';

import './components.css';

class DirectInputTableCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input_mode: false,
      value: this.props.content
    }

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleBlur() {
    this.setState({value: this.props.content, input_mode: false})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleKeyDown(event) {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({value: this.props.content, input_mode: false})
    }
  }

  render () {
    return (
      <Table.Cell onClick={ () => this.setState({input_mode: true}) } onBlur={this.handleBlur}>
        { !this.state.input_mode && this.props.content }
        { this.state.input_mode && 
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              fluid
              focus
              transparent
              size='tiny'
              autoFocus
              value={this.state.value}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          </Form>
        }
      </Table.Cell>
    )
  }
}

export { DirectInputTableCell }