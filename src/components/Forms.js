import React, { Component } from 'react';
import {
  Form,
  Icon,
} from 'semantic-ui-react';

import './components.css';

class SingleLineAdder extends Component {
  static defaultProps = {
    size: 'large',
    value: ''
  };

  render () {
    const iconColor = (this.props.value == '') ? null : 'blue'
    const isLink = (this.props.value == '') ? false : true

    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Field>
          <Form.Input
            name={this.props.name}
            icon={
              <Icon 
                name='circle plus'
                color={iconColor}
                link={isLink}
                onClick={this.props.onSubmit} />
            }
            iconPosition='left'
            transparent
            fluid
            size={this.props.size}
            placeholder={this.props.placeholder}
            id='HexDefinitionInput'
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </Form.Field>
      </Form>
    )
  }
}

export { SingleLineAdder }