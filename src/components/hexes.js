import React, {Component} from 'react';
import {
  Dropdown,
  Header,
  Icon,
  Label,
  Segment,
  Transition
} from 'semantic-ui-react';
import {SingleLineAdder, SingleLineAdderV2} from './forms'
import {TableCodeLabel} from './labels'
import {ListWithDeletableItems} from './lists'
import {EMPTY_REGEX, VALID_TABLE_DEFINITION_REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'

import './components.css';

class HexDefinitionSegment extends Component {
  state = {
    value: '',
    valid: false,
    error: null
  }

  handleChange = (event, {name, value}) => {
    if (value.match(EMPTY_REGEX)) {
      this.setState({value: value, valid: false, error: null})
      return
    }
    if (value.match(VALID_TABLE_DEFINITION_REGEX)) {
      this.setState({value: value, valid: true, error: null})
      return
    }
    this.setState({valid: false, error: ERRORS.HEX_DEFINTION_INVALID_CHAR})
    return
  }

  handleSubmit = (event) => {
    if (this.state.valid) {
      const value = this.state.value
      this.setState({value: '', valid: false, error: null})
      this.props.onSubmit(value)
    }
  }

  handleBlur = (event) => {
  }

  handleKeyDown = (event) => {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({value: '', valid: false, error: null})
    }
  }

  render() {
    return (
      <Transition transitionOnMount='true' animation='fade up'>
        <Segment.Group>
          <Segment>
            <Header content='Hex Definition' subheader='What details should be randomly generated for each hex.' />
            <ListWithDeletableItems 
              bulleted='true' 
              items={ 
                this.props.hexDefinitions.map(
                  (hexDefinition) => ({
                    key: hexDefinition.id, 
                    content: hexDefinition.text, 
                    onClick: () => this.props.onDelete(hexDefinition.id)
                  })
                )
              }
            />
            <SingleLineAdderV2 
              name='hexdefinition'
              placeholder='Enter [[NEW]] hex detail...'
              value={this.state.value}
              valid={this.state.valid}
              error={this.state.error}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onBlur={this.handleBlur}
            />
          </Segment>
          <Segment>
            <TableCodeLabel code='HEX' />
          </Segment>
          <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import definition ...' />
              <Dropdown.Item text='Export definition ...' />
            </Dropdown.Menu>
          </Dropdown>
        </Segment.Group>
      </Transition>
    )
  }
}

export {HexDefinitionSegment}
