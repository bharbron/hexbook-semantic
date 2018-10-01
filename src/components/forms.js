import React, { Component } from 'react';
import {
  Form,
  Icon,
  Popup,
  Ref,
} from 'semantic-ui-react';
import {COLORS} from '../constants/colors'
import './components.css';

class SingleLineAdderV2 extends Component {
  state = {}

  static defaultProps = {
    size: 'large',
    errorPosition: 'left center',
  }

  adderDisabled = () => {
    return (this.props.valid) ? false : true
  }

  iconColor = () => {
    return (this.props.valid) ? COLORS.SUBMIT_BUTTON : null
  }

  isLink = () => {
    return (this.props.valid) ? true : false
  }

  handleRef = node => this.setState({ node })

  render () {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Field>
          <Ref innerRef={this.handleRef}>
            <Form.Input
              name={this.props.name}
              icon={
                <Icon 
                  name='circle plus'
                  disabled={this.adderDisabled()}
                  color={this.iconColor()}
                  link={this.isLink()}
                  onClick={this.props.onSubmit} 
                />
              }
              iconPosition='left'
              transparent
              fluid
              error={this.props.error}
              size={this.props.size}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={this.props.onChange}
              onKeyDown={this.props.onKeyDown}
              onBlur={this.props.onBlur}
            />
          </Ref>
          <InputErrorPopup context={this.state.node} error={this.props.error} />
        </Form.Field>
      </Form>
    )
  }
}

function HiddenSubmitButton(props) {
  return <input type='submit' style={{visibility: 'hidden', position: 'fixed', bottom: '0rem', left: '0rem'}}/>
}

function InputErrorPopup(props) {
  return (
    <Popup
      context={props.context}
      content={props.error}
      open={props.error}
      position='left center'
      size='tiny'
      inverted
    />
  )
}

export {SingleLineAdderV2, HiddenSubmitButton, InputErrorPopup}
