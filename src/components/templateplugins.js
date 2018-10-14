import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Form,
  List,
} from 'semantic-ui-react';
import {TEMPLATE_PREVIEW} from '../constants/strings'
import './components.css';

function IndexPreview(props) {
  const previewEntryDetails = []
  for (let i = 0; i < props.template.metadata.entryDetails.length; i++) {
    previewEntryDetails.push({
      content: TEMPLATE_PREVIEW.ENTRY_DETAILS[i % TEMPLATE_PREVIEW.ENTRY_DETAILS.length],
      renderAs: props.template.metadata.entryDetails[i],
    })
  }
  return (
    <List className='IndexPreview'>
      <IndexPreviewListItem content='1234' renderAs={props.template.metadata.text} />
      {previewEntryDetails.map(
        ped => <IndexPreviewListItem content={ped.content} renderAs={ped.renderAs} />
      )}
      <IndexPreviewListItem content='...' renderAs='p' />
      <IndexPreviewListItem content={TEMPLATE_PREVIEW.REFERENCES} renderAs={props.template.metadata.references} />
    </List>
  )
}

function IndexPreviewListItem(props) {
  const $renderAs = props.renderAs //need the '$'' so that the variable can be used in place of a component name
  return <List.Item><$renderAs>{props.content}</$renderAs></List.Item>
}

class IndexEditProperties extends Component {
  state = {
    columns: {
      value: (this.props.template && this.props.template.properties) ? this.props.template.properties.columns : undefined,
      valid: (this.props.template && this.props.template.properties && this.props.template.properties.columns) ? true : false,
      error: null,
    },
    whitespace: {
      value: (this.props.template && this.props.template.properties) ? this.props.template.properties.whitespace : undefined,
      valid: (this.props.template && this.props.template.properties && this.props.template.properties.whitespace) ? true : false,
      error: null,
    }
  }

  columnOptions = [
    {key: 1, value: 1, text: 1},
    {key: 2, value: 2, text: 2},
  ]

  whitespaceOptions = [
    {key: 0, value: 0, text: 0},
    {key: 1, value: 1, text: 1},
    {key: 2, value: 2, text: 2},
    {key: 3, value: 3, text: 3},
    {key: 4, value: 4, text: 4},
    {key: 5, value: 5, text: 5},
    {key: 6, value: 6, text: 6},
    {key: 7, value: 7, text: 7},
    {key: 8, value: 8, text: 8},
    {key: 9, value: 9, text: 9},
    {key: 10, value: 10, text: 10},
  ]

  handleChange = (event, {name, value}) => {
    if (name === 'columns') {
      this.setState({
        columns: {value: value, valid: true, error: null}
      })
    }
    if (name === 'whitespace') {
      this.setState({
        whitespace: {value: value, valid: true, error: null}
      })
    }
    // The parent component needs to know about the values as well,
    // so assemble them as a 'properties' object and send them up
    const properties = {
      columns: this.state.columns.value,
      whitespace: this.state.whitespace.value,
    }
    this.props.onChange({
      properties: properties, 
      valid: (this.state.columns.valid && this.state.whitespace.valid),
      error: null,
    })
  }

  render() {
    return (
      <Form className='IndexEditProperties'>
        <Form.Group>
          <Form.Select 
            name='columns'
            label='Columns'
            placeholder=''
            options={this.columnOptions}
            value={this.state.columns.value}
            onChange={this.handleChange} 
          />
          <Form.Select 
            name='whitespace'
            label='Whitespace'
            placeholder=''
            options={this.whitespaceOptions}
            value={this.state.whitespace.value}
            onChange={this.handleChange} 
          />
        </Form.Group>
      </Form>
    )
  }
}

export {IndexPreview, IndexEditProperties}
