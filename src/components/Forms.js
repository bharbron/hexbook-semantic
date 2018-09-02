import React, { Component } from 'react';
import {
  Form,
  Icon,
} from 'semantic-ui-react';

import './components.css';

class SingleLineAdder extends Component {
  static defaultProps = {
    size: 'large',
  }

  render () {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Field>
          <Form.Input
            name={this.props.name}
            icon={
              <Icon name='circle plus' link onClick={this.props.onSubmit} />
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