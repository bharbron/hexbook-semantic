import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Form,
  Header,
  Icon,
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
  state = {}

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
    const properties = {...this.props.properties}
    const valid = {...this.props.valid}
    const error = {...this.props.error}
    if (name === 'columns') {
      properties.columns = value
      valid.columns = true
      error.columns = null
      this.props.onChange(properties, valid, error)
      return
    }
    if (name === 'whitespace') {
      properties.whitespace = value
      valid.whitespace = true
      error.whitespace = null
      this.props.onChange(properties, valid, error)
      return
    }
  }

  render() {
    return (
      <Form className='IndexEditProperties'>
        <Header as='h4' content='Properties' subheader='Number of columns per page and number of lines of whitespace after each index entry' />
        <Form.Group>
          <Form.Select 
            name='columns'
            label='Columns'
            placeholder=''
            options={this.columnOptions}
            value={this.props.properties.columns}
            onChange={this.handleChange} 
          />
          <Form.Select 
            name='whitespace'
            label='Whitespace'
            placeholder=''
            options={this.whitespaceOptions}
            value={this.props.properties.whitespace}
            onChange={this.handleChange} 
          />
        </Form.Group>
      </Form>
    )
  }
}

class IndexEditMetadata extends Component {
  state = {}

  formatOptions = [
    {key: 'p', value: 'p', text: 'Normal text'},
    {key: 'h1', value: 'h1', text: 'Heading 1'},
    {key: 'h2', value: 'h2', text: 'Heading 2'},
    {key: 'h3', value: 'h3', text: 'Heading 3'},
    {key: 'h4', value: 'h4', text: 'Heading 4'},
    {key: 'h5', value: 'h5', text: 'Heading 5'},
  ]

  optionTextByValue = (options) => {
    const optionTextByValue = {}
    options.forEach(
      option => {
        optionTextByValue[option.value] = option.text
      }
    )
    return optionTextByValue
  }

  handleChange = (event, {name, value}) => {
    const metadata = {...this.props.metadata}
    const valid = {...this.props.valid}
    const error = {...this.props.error}
    if (name === 'text') {
      metadata.text = value
      valid.text = true
      error.text = null
      this.props.onChange(metadata, valid, error)
      return
    }
    if (name === 'references') {
      metadata.references = value
      valid.references = true
      error.references = null
      this.props.onChange(metadata, valid, error)
      return
    }
  }

  handleAddEntryDetail = (value) => {
    const metadata = {...this.props.metadata}
    const valid = {...this.props.valid}
    const error = {...this.props.error}
    metadata.entryDetails = [...this.props.metadata.entryDetails, value]
    valid.entryDetails = true
    error.entryDetails = null
    this.props.onChange(metadata, valid, error)
  }

  handleRemoveEntryDetail = () => {
    const metadata = {...this.props.metadata}
    const valid = {...this.props.valid}
    const error = {...this.props.error}
    const newEntryDetails = [...this.props.metadata.entryDetails]
    newEntryDetails.pop()
    metadata.entryDetails = newEntryDetails
    valid.entryDetails = true
    error.entryDetails = null
    this.props.onChange(metadata, valid, error)
  }

  render() {
    return (
      <Form className='IndexEditMetadata'>
        <Header as='h4' content='Entry' subheader='Formatting to apply to the primary text of each index entry, i.e. the hex coordinates, NPC name, etc.' />
        <EditTextFormatting 
          options={this.formatOptions} 
          text={this.props.metadata.text} 
          onChange={this.handleChange} 
        />
        <Header as='h4' content='Details' subheader='Formatting to apply to each line of detail for each index entry. Lines with no defined format default to "Normal text".' />
        <EditEntryDetailsFormatting 
          options={this.formatOptions}
          optionTextByValue={this.optionTextByValue(this.formatOptions)}
          entryDetails={this.props.metadata.entryDetails} 
          onSubmit={this.handleAddEntryDetail}
          onRemove={this.handleRemoveEntryDetail}
        />
        <Header as='h4' content='References' subheader='Formatting to apply to the list of hexes that reference each index entry.' />
        <EditReferencesFormatting 
          options={this.formatOptions} 
          references={this.props.metadata.references} 
          onChange={this.handleChange} 
        />
      </Form>
    )
  }
}

function EditTextFormatting(props) {
  return (
    <Form.Group>
      <Form.Select 
        name='text'
        options={props.options}
        value={props.text}
        onChange={props.onChange} 
      />
    </Form.Group>
  )
}

function EditEntryDetailsFormatting(props) {
  return (
    <div className='EditEntryDetailsFormatting'>
      <List size='large'>
        {props.entryDetails.map(
          (entryDetail, index, entryDetails) => 
            <EntryDetailFormattingListItem 
              index={index} 
              entryDetail={entryDetail}
              formatText={props.optionTextByValue[entryDetail]}
              onRemove={props.onRemove}
              last={(index + 1 === entryDetails.length)}
            />
        )}
      </List>
      <EntryDetailFormattingAdder options={props.options} onSubmit={props.onSubmit} /> 
    </div>
  )
}

function EntryDetailFormattingListItem(props) {
  return (
    <List.Item key={props.index + '_' + props.entryDetail}>
      Line {props.index + 1}: {props.formatText} {props.last && <Icon link name='minus circle' color='grey' onClick={props.onRemove} />}
    </List.Item>
  )
}

class EntryDetailFormattingAdder extends Component {
  state = {
    value: 'p'
  }

  handleChange = (event, {name, value}) => {
    this.setState({value: value})
  }

  handleSubmit = () => {
    const value = this.state.value
    this.setState({value: 'p'})
    this.props.onSubmit(value)
  }

  render() {
    return (
      <Form className='EntryDetailFormattingAdder' onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Button 
            type='submit' 
            inline 
            circular 
            icon='plus' 
          />
          <Form.Select 
            name='entrydetail'
            options={this.props.options}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    )
  }
}

function EditReferencesFormatting(props) {
  return (
    <Form.Group>
      <Form.Select 
        name='references'
        options={props.options}
        value={props.references}
        onChange={props.onChange} 
      />
    </Form.Group>
  )
}

export {IndexPreview, IndexEditProperties, IndexEditMetadata}
