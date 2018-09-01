import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Dropdown,
  Icon,
  List,
  Menu,
  Select
} from 'semantic-ui-react';

import './Books.css';

class BooksControls extends Component {
  render() {
    return (
      <div>
        <Button circular color='blue' size='massive' icon='play' style={{ position: 'fixed', bottom: '8rem', right: '2rem' }} />
        <Button circular color='google plus' size='massive' icon='plus' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
      </div>
    );
  };
};

export default BooksControls