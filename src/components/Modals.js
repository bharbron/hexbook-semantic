import React, { Component } from 'react';
import {
  Button,
  Form,
  Header,
  Modal,
  TextArea,
  Transition,
} from 'semantic-ui-react';

import './components.css';

class TextAreaInputModal extends Component {
  static defaultProps = {
    open: false,
    value: '',
    primaryText: 'ADD'
  }

  render () {
    const primaryColor = ( this.props.value == '' ) ? null : 'blue';
    const primaryDisabled = ( this.props.value == '' ) ? true : false;

    return (
      <Transition animation='fly up' mountOnShow unmountOnHide='true' visible={this.props.open}>
        <Modal size='tiny' open={true} onClose={this.props.onClose} className='TextAreaInputModal'>
          <Modal.Header style={{ borderBottom: '0px' }}>
            <Header as='h3' content={this.props.header} subheader={this.props.subheader} />
          </Modal.Header>
          <Modal.Content scrolling>
            <Form>
              <Form.Field>
                <TextArea
                  autoHeight
                  placeholder={this.props.placeholder}
                  value={this.props.value}
                  onChange={this.props.onChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button id='TextAreaInputModalCancel' onClick={this.props.onCancelClick}>CANCEL</Button>
            <Button id='TextAreaInputModalSave' color={primaryColor} disabled={primaryDisabled} onClick={this.props.onSubmit}>{this.props.primaryText}</Button>
          </Modal.Actions>
        </Modal>
      </Transition>
    )
  }
}

export { TextAreaInputModal }