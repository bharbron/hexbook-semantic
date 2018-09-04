import React, { Component } from 'react';
import {
  Icon,
  List
} from 'semantic-ui-react';

import './components.css';

class ListWithDeletableItems extends Component {
  static defaultProps = {
    size: 'large',
    bulleted: false,
    icon: false,
    icon_size: 'big',
    items: []
  };

  render () {
    return (
      <List size={this.props.size} bulleted={this.props.bulleted}>
        { this.props.items.map(({id, header, description, content}) => 
          <List.Item>
            { this.props.icon && <List.Icon name={this.props.icon} size={this.props.icon_size} /> }
            <List.Content>
              <List.Header>{header}</List.Header>
              <List.Description>{description} { !content && <Icon link name='minus circle' color='grey' onClick={this.props.handleClick} /> }
              </List.Description>
              {content} { content && <Icon link name='minus circle' color='grey' onClick={this.props.handleClick} /> }
            </List.Content>
          </List.Item>
        )}
      </List>
    )
  }
}

export { ListWithDeletableItems }