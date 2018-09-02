import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Header,
  Icon,
  Input,
  Label,
  List,
  Menu,
  Modal,
  Segment,
  Table,
  TextArea
} from 'semantic-ui-react';
import './Hexes.css';

class HexesControls extends Component {
  render() {
    return (
      <div>
        <Modal
          size='tiny'
          centered={false}
          closeIcon
          closeOnDimmerClick={false}
          dimmer='inverted'
          trigger={
            <Button
              circular
              color='google plus'
              size='huge'
              icon='plus'
              style={{ position: 'fixed', bottom: '2rem', right: '2rem', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2)', width: '56px', height: '56px' }}
            />
          }
        >
          <Modal.Content>
            <Form>
              <Header content='Add New Hex[es]' subheader='Enter one hex per line, all lowercase, no spaces' />
              <label style={{ fontFamily: 'courier' }}>coordinate,terrain,territory</label>
              <TextArea autoHeight style={{ minHeight: '20rem', fontFamily: 'courier' }} />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button>Cancel</Button>
            <Button color='green'>Add</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  };
};

export default HexesControls