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
      inputMode: false,
      value: this.props.content
    }

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static defaultProps = {
    onSubmit: () => console.log('default onSubmit')
  };

  handleBlur() {
    this.setState({value: this.props.content, inputMode: false})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    this.setState({inputMode: false})
    this.props.onSubmit(this.state.value)
  }

  handleKeyDown(event) {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({value: this.props.content, inputMode: false})
    }
  }

  render () {
    return (
      <Table.Cell onClick={ () => this.setState({inputMode: true}) } onBlur={this.handleBlur}>
        { !this.state.inputMode && this.props.content }
        { this.state.inputMode && 
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              fluid
              focus
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