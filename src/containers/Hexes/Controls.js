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
import FloatingActionButton from '../../components/FloatingActionButton'
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
            <FloatingActionButton />
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