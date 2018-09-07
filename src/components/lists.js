import React, { Component } from 'react';
import {
  Icon,
  List,
  Transition
} from 'semantic-ui-react';

import './components.css';

class ListWithDeletableItems extends Component {
  static defaultProps = {
    animation: 'fade',
    size: 'large',
    bulleted: false,
    icon: false,
    iconSize: 'big',
    items: []
  };

  render () {
    return (
      <Transition.Group as={List} animation={this.props.animation} size={this.props.size} bulleted={this.props.bulleted}>
        { this.props.items.map(({key, header, description, content, onClick}) => 
          <List.Item key={key}>
            { this.props.icon && <List.Icon name={this.props.icon} size={this.props.iconSize} /> }
            <List.Content>
              <List.Header>{header}</List.Header>
              <List.Description>{description} { !content && <Icon link name='minus circle' color='grey' onClick={onClick} /> }
              </List.Description>
              {content} { content && <Icon link name='minus circle' color='grey' onClick={onClick} /> }
            </List.Content>
          </List.Item>
        )}
      </Transition.Group>
    )
  }
}

export { ListWithDeletableItems }
