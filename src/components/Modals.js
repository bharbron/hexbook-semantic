import React, { Component } from 'react';
import {
  Button,
  Form,
  Header,
  Modal,
  TextArea
} from 'semantic-ui-react';

import './components.css';

class TextAreaInputModal extends Component {
  render () {
    return (
      <Modal size='tiny' open={this.props.open} onClose={() => this.props.onClose()}>
        <Modal.Header>
          <Header content={this.props.header} subheader={this.props.subheader} />
        </Modal.Header>
        <Modal.Content scrolling>
          <Form>
            <Form.Field>
              <TextArea autoHeight style={{ minHeight: '15rem', border: '0px', padding: '0px' }} placeholder={this.props.placeholder} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button size='small' id='TextAreaInputModalCancel' onClick={() => this.props.onCancelClick()}>CANCEL</Button>
          <Button size='small' primary id='TextAreaInputModalSave' onClick={() => this.props.onSaveClick()}>SAVE</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export { TextAreaInputModal }