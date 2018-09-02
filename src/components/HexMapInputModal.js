import React, { Component } from 'react';
import {
  Button,
  Form,
  Modal,
  TextArea
} from 'semantic-ui-react';

import './components.css';

class HexMapInputModal extends Component {
  render () {
      <Modal size='tiny' open={this.props.open} onClose={() => this.setState({ modal_open: false })}>
        <Modal.Header >
          <Header content='Add to Hex Map' subheader='One hex per line, no spaces, all lowercase' />
        </Modal.Header>
        <Modal.Content scrolling>
          <Form>
            <Form.Field>
              <TextArea autoHeight style={{ minHeight: '15rem', border: '0px', padding: '0px' }} placeholder='coordinate,terrain,territory' />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button size='small' id='HexMapInputModalCancel'>CANCEL</Button>
          <Button size='small' primary id='HexMapInputModalSave'>SAVE</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default HexMapInputModal