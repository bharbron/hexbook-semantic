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
  constructor(props) {
    super(props)
    this.state = {
      primaryColor: null,
      primaryDisabled: true,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  static defaultProps = {
    open: false,
    primaryText: 'ADD',
    onSubmit: (value) => console.log(`default onSubmit: ${value}`)
  }

  handleChange(event) {
    if ( event.target.value ) { 
      this.setState({value: event.target.value, primaryColor: 'blue', primaryDisabled: false})
    }
    else {
      this.setState({value: event.target.value, primaryColor: null, primaryDisabled: true})
    }
  }

  handleSubmit() {
    const value = this.state.value
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onSubmit(value)
  }

  handleClose() {
    this.props.onClose()
  }

  handleCancel() {
    this.setState({value: '', primaryColor: null, primaryDisabled: true})
    this.props.onClose()
  }

  render () {
    return (
      <Transition animation='fly up' mountOnShow unmountOnHide='true' visible={this.props.open}>
        <Modal size='tiny' open={true} onClose={this.handleClose} className='TextAreaInputModal'>
          <Modal.Header style={{ borderBottom: '0px' }}>
            <Header as='h3' content={this.props.header} subheader={this.props.subheader} />
          </Modal.Header>
          <Modal.Content scrolling>
            <Form>
              <Form.Field>
                <TextArea
                  autoHeight
                  autoFocus
                  placeholder={this.props.placeholder}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button id='TextAreaInputModalCancel' onClick={this.handleCancel}>CANCEL</Button>
            <Button id='TextAreaInputModalSave' color={this.state.primaryColor} disabled={this.state.primaryDisabled} onClick={this.handleSubmit}>{this.props.primaryText}</Button>
          </Modal.Actions>
        </Modal>
      </Transition>
    )
  }
}

export { TextAreaInputModal }