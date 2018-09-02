import React, { Component } from 'react';
import {
  Button
} from 'semantic-ui-react';

import './components.css';

class FloatingActionButton extends Component {
  render () {
    return (
      <Button className='FloatingActionButton' circular color='google plus' size='huge' icon='plus' />
    )
  }
}

export default FloatingActionButton