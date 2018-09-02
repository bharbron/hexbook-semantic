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
      <Modal size='tiny' open={this.props.open} onClose={() => this.props.onClose()} className='TextAreaInputModal'>
        <Modal.Header style={{ borderBottom: '0px' }}>
          <Header as='h3' content={this.props.header} subheader={this.props.subheader} />
        </Modal.Header>
        <Modal.Content scrolling>
          <Form>
            <Form.Field>
              <TextArea autoHeight placeholder={this.props.placeholder} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button id='TextAreaInputModalCancel' onClick={() => this.props.onCancelClick()}>CANCEL</Button>
          <Button primary id='TextAreaInputModalSave' onClick={() => this.props.onSaveClick()}>ADD</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export { TextAreaInputModal }