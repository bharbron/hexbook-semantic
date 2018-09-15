import React, { Component } from 'react';
import {
  Form,
  Icon,
} from 'semantic-ui-react';

import './components.css';

class SingleLineAdder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  static defaultProps = {
    size: 'large',
    onSubmit: () => console.log('default onSubmit')
  };

  handleBlur() {
    this.setState({value: ''})
  }

  handleSubmit() {
    const value = this.state.value
    this.setState({value: ''})
    this.props.onSubmit(value)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyDown(event) {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({value: ''})
    }
  }

  render () {
    const iconColor = (this.state.value == '') ? null : 'blue'
    const isLink = (this.state.value == '') ? false : true

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Input
            icon={
              <Icon 
                name='circle plus'
                color={iconColor}
                link={isLink}
                onClick={this.handleSubmit} />
            }
            iconPosition='left'
            transparent
            fluid
            size={this.props.size}
            placeholder={this.props.placeholder}
            id='HexDefinitionInput'
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </Form.Field>
      </Form>
    )
  }
}

function HiddenSubmitButton(props) {
  return <input type='submit' style={{visibility: 'hidden', position: 'fixed', bottom: '0rem', left: '0rem'}}/>
}

export { SingleLineAdder, HiddenSubmitButton }