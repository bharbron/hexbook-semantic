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
        <Button circular color='blue' size='huge' icon='play' style={{ position: 'fixed', bottom: '7rem', right: '2rem', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2)' }} />
        <Button circular color='google plus' size='huge' icon='plus' style={{ position: 'fixed', bottom: '2rem', right: '2rem', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2)', width: '56px', height: '56px' }} />
      </div>
    );
  };
};

export default BooksControls